import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import database from '../database/db';

export default function(router) {
  router.use(cors())
  router.use(bodyParser.json())

  router.post('/register', (req, res) => {
    console.log(req.body);
    
    // check for user exists
    // create user in database with a hashed password
    // create and object with the user email

    const { first_name, last_name, email, password } = req.body;

    // console.log(req.body);

    const salt = bcrypt.genSaltSync(1);

    // console.log(salt);

    let hash = bcrypt.hashSync(password, salt);

    // console.log(hash);

    // let user_id = 0;

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

    // console.log(querySQL);

    database.query(querySQL, [])
      .then((response) => {

        // console.log(response.rows[0].user_id);
        // user_id = response.rows[0].user_id;

        res.status(201).json(response.rows);
        //res.status(200).json({response: 'OK'})
      }).catch((error) => {
        res.status(500).json({error})
      });

    // console.log(user_id);

    /* const querySQL = `select 
                        count(user_id) as user_count
                      from 
                        users 
                      where 
                        email = '${email}';`

    database.query(querySQL, [])
      .then((response) => {
        const user_count = response.rows;

        if (parseInt(user_count[0].user_count) === 1) {
          res.status(409).json({ response: 'user exists' });
        } else {
          res.status(200).json({ response: 'carry on' });
        };
      }).catch((error) => {
        res.status(500).json({error})
      }); */


    // encrypt the object using jwt
    // send the token back to the user
  })

  router.post('/logout', (req, res) => {

  })

  return router;
}

