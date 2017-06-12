import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

import config from '../../config';
import { SESSION_COOKIE } from '../app';
import database from '../database/db';
import {
  selectUserDetails,
  insertUserDetils,
} from './queries-auth';

const MAX_CONNECTION_TIME = 7200000;
const APP_SECRET = config.get('APP_SECRET');

export default (router) => {
  router.use(cors({
    origin: ['http://localhost:3000'], // origin: ['http://localhost:8000'], //can change to 8000 on deploy
    credentials: true,
  }));

  router.use(bodyParser.json());
  router.use(cookieParser());

  router.post('/login', (req, res) => {
    const { email, password } = req.body.login;

    database.query(selectUserDetails(email), [])
      .then((response) => {
        // check for existing user data
        if (response.rows.length > 0) {
          // decrypt password
          const decryptedPassword = bcrypt.compareSync(password, response.rows[0].password);

          if (decryptedPassword) {
            // create session cookie
            const sessionUser = { email };
            const JWT = jwt.sign(sessionUser, APP_SECRET);

            res.status(200).cookie(SESSION_COOKIE, JWT, {
              // secure: config.get('HTTPS'), // for production
              secure: false,
              maxAge: MAX_CONNECTION_TIME,
              httpOnly: true,
            }).json({ response: true, userId: response.rows[0].user_id });
          } else {
            res.status(200).json({ response: false });
          }
        } else {
          res.status(200).json({ response: false });
        }
      }).catch((error) => {
        res.status(500).json({ error });
      });
  });

  router.post('/register', (req, res) => {
    // create user in database with a hashed password using referrental integrity to see if user exists
    const { firstName, lastName, email, password } = req.body.register;

    // encrypt password and save new user to database
    bcrypt.genSalt(5, (err, saltResult) => {
      bcrypt.hash(password, saltResult, (err, hash) => {
        database.query(insertUserDetils(firstName, lastName, email, hash), [])
          .then((response) => {
            // create and object with the user email
            const sessionUser = { email };
            // encrypt the object using jwt
            const JWT = jwt.sign(sessionUser, APP_SECRET);

            res.status(200).cookie(SESSION_COOKIE, JWT, {
              // secure: config.get('HTTPS'), // for production
              secure: false,
              maxAge: MAX_CONNECTION_TIME,
              httpOnly: true,
            }).json({ response: true, userId: response.rows[0].user_id });
          }).catch((error) => {
            res.status(500).json({ error });
          });
      });
    });
  });

  router.get('/logout', (req, res) => {
    if (req.cookies) {
      res.clearCookie(SESSION_COOKIE);
    }

    return res.status(200).json({ response: false });
  });

  return router;
};
