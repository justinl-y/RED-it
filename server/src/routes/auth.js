import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

import database from '../database/db';
import config from '../../config';
import { SESSION_COOKIE } from '../app';

// zdd cookie global

export default function(router) {
  router.use(cors());
  router.use(bodyParser.json());
  router.use(cookieParser());

  router.post('/register', (req, res) => {
    console.log(req.body);

    // check for user exists
    // create user in database with a hashed password
    // create and object with the user email

    const { first_name, last_name, email, password } = req.body;
    const salt = bcrypt.genSaltSync(1);
    const hash = bcrypt.hashSync(password, salt);

    const querySQL = `insert into
                        users
                        (
                          first_name,
                          last_name,
                          email,
                          password
                        )
                        values
                        (
                          '${first_name}',
                          '${last_name}',
                          '${email}',
                          '${hash}'
                        ) returning user_id;`;

    database.query(querySQL, [])
      .then((response) => {

        // console.log(response.rows[0].user_id);
        // user_id = response.rows[0].user_id;

        // res.status(201).json(response.rows);
        //res.status(200).json({response: 'OK'})

        // encrypt the object using jwt
        // logic for login as well - add logic for checking decrypted cookie
        const sessionUser = { email: email };
        const JWT = jwt.sign(sessionUser, config.get('APP_SECRET'));

        res.status(200).cookie(SESSION_COOKIE, JWT, {
          secure: false, //config.get('HTTPS'),
          maxAge: 7200000,
          httpOnly: true,
        }).json({ success: 'You are logged in, enjoy' })
        // }).json(response.rows);

      }).catch((error) => {
        res.status(500).json({ error })
      });

    // send the token back to the user
  })

  router.post('/login', (req, res) => {
    // todo
  })

  router.post('/logout', (req, res) => {
    if(req.cookies.token) {
      res.clearCookie(SESSION_COOKIE);
    }

    res.status(200).json({ response: 'Thanks for visiting' });
  })

  return router;
}

// to clear cookie
// res.clearCookie(SESSION_COOKIE);
