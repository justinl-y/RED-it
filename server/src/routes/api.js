import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// import jwt from 'jsonwebtoken';

import database from '../database/db';
import { 
  SESSION_COOKIE 
} from '../app';
import { 
  selectPostsByCategoryID,
  selectWeeks,
  selectCategories,
  insertPostVote,
  updatePostVote,
  selectPostVote,
  insertPost 
} from './queries';

export default function APIRoutes(router){
  router.use(cors({
    origin: ['http://localhost:3000'], // origin: ['http://localhost:8000'], //can change to 8000 on deploy
    credentials: true
  }));
  
  router.use(bodyParser.json());
  router.use(cookieParser());
  
  // check for cookie authorisation
  router.use((req, res, next) => {
    if (!req.cookies[SESSION_COOKIE]) {
      return res.status(403).json({ error: 'Not authorised' })
    }
    
    // const sessionUser = jwt.decode(req.cookies[SESSION_COOKIE]);
    next();
  })
  
  router.get('/posts/:categoryId', (req, res) => {
    database.query(selectPostsByCategoryID, [req.params.categoryId])
    .then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.status(500).json({error})
    })
  });
  
  router.get('/weeks', (req, res) => {
    database.query(selectWeeks, [])
    .then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.status(500).json({error})
    })
  });
  
  router.get('/categories', (req, res) => {
    database.query(selectCategories, [])
    .then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.status(500).json({error})
    })
  });
  
  // insert vote into user post vote
  function insertVote(userId, postId) {
    return database.query(insertPostVote(userId, postId), []);
  }
  
  // update post vote count
  function updateVote(postId) {
    return database.query(updatePostVote(postId), []);
  }
  
  // return post vote count
  function selectVote(postId) {
    return database.query(selectPostVote(postId), []);
  }
  
  router.post('/votes', async function(req, res) {
    const { userId, postId } = req.body.vote;
    
    try {
      /*try {
        await insertVote(userId, postId);
      } catch (err) {
        throw err;
        // throw new BadRequestError('Missing Id');
      }

      try {
        await updateVote(postId);
      } catch (err) {
        throw err;
      }*/

      await insertVote(userId, postId);
      await updateVote(postId);
      const select = await selectVote(postId);
      
      res.status(200).send(select.rows);
    } catch(err) {
      if (err.code === '23505') {
        res.status(409).json({ response: false });
      } else {
        // res.status(500).send(err);
        res.status(500).json({ response: false })
      }
    }
  });
  
  router.post('/post' , (req, res) => {
    const { title, link, date, description, user_id, category_id } = req.body.post;
    
    database.query(insertPost(title, link, date, description, user_id, category_id), [])
    .then((response) => {
      //res.json(response.rows);
      res.status(200).json({ success: true })
    }).catch((error) => {
      res.status(500).json({error})
    })
  });
  
  return router;
}
