import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import database from '../database/db';
import { SESSION_COOKIE } from '../app';
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

    next();
  })

  // get all weeks end point
  router.get('/weeks', (req, res) => {
    database.query(selectWeeks, [])
    .then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.status(500).json({error})
    })
  });
  
  // get all categories end point
  router.get('/categories', (req, res) => {
    database.query(selectCategories, [])
    .then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.status(500).json({error})
    })
  });

  // get posts for one category end point
  router.get('/posts/:categoryId', (req, res) => {
    database.query(selectPostsByCategoryID, [req.params.categoryId])
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
  
  // post vote end point
  router.post('/votes', async function(req, res) {
    const { userId, postId } = req.body.vote;
    
    try {
      try {
        await insertVote(userId, postId)
      } catch (err) {
        if (err.code === '23505') {
          res.status(409).json({ response: false });
        } else {
          throw err;
        }
      }
      
      await updateVote(postId);
      const select = await selectVote(postId);
      
      res.status(200).send(select.rows);
    } catch(err) {
      // res.status(500).send(err);
      res.status(500).json({ response: false })
    }
  });

  // post post end point
  router.get('/post/:postId', async function(req, res) {
    try {
      await database.query(selectPost, [req.params.postId]);
      res.status(200).json(response.rows);
    } catch(err) {
      res.status(500).json({err});
    }
  });
  
  // post post end point
  router.post('/post', async function(req, res) {
    console.log('put' + req.body.post);

    const { title, description, link, tag, categoryId, userId, postDate } = req.body.post;

    try {
      await database.query(insertPost(title, description, link, categoryId, userId, postDate), []);
      res.status(200).json({ success: true });
    } catch(err) {
      res.status(500).json({err});
    }
  });

  // post put end point
  router.put('/post', async function(req, res) {
    const { postId, title, description, link, tag, categoryId, userId, postDate } = req.body.post;

    try {
      await database.query(updatePost(postId, title, description, link, categoryId, userId, postDate), []);
      res.status(200).json({ success: true });
    } catch(err) {
      res.status(500).json({err});
    }
  });

  // post delete end point
  router.delete('/post', async function(req, res) {
    const { postId } = req.body.post;

    try {
      await database.query(deletePost(postId), []);
      res.status(200).json({ success: true });
    } catch(err) {
      res.status(500).json({err});
    }
  });

  
  /*router.post('/post', (req, res) => {
    // console.log(req.body.post);

    const { title, description, link, tag, categoryId, userId, postDate } = req.body.post;

    // console.log(req.body.post);

    database.query(insertPost(title, description, link, categoryId, userId, postDate), [])
      .then((response) => {
        //res.json(response.rows);
        res.status(200).json({ success: true })
      }).catch((err) => {
        res.status(500).json({err})
      })
  });*/

  return router;
}
