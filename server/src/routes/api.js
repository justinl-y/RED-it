import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { SESSION_COOKIE } from '../app';
import database from '../database/db';
import {
  selectWeeks,
  selectCategories,
  selectPostsByCategoryID,
  selectPostVote,
  insertPostVote,
  updatePostVote,
  selectPost,
  insertPost,
  updatePost,
  deletePost,
} from './queries';

export default (router) => {
  router.use(cors({
    origin: ['http://localhost:3000'], // origin: ['http://localhost:8000'], //can change to 8000 on deploy
    credentials: true,
  }));

  router.use(bodyParser.json());
  router.use(cookieParser());

  // check for cookie authorization
  router.use((req, res, next) => {
    if (!req.cookies[SESSION_COOKIE]) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    return next();
  });

  // get all weeks end point
  router.get('/weeks', (req, res) => {
    database.query(selectWeeks, [])
    .then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.status(500).json({ error });
    });
  });

  // get all categories end point
  router.get('/categories', (req, res) => {
    database.query(selectCategories, [])
    .then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.status(500).json({ error });
    });
  });

  // get posts for one category end point
  router.get('/posts/:categoryId', (req, res) => {
    database.query(selectPostsByCategoryID, [req.params.categoryId])
    .then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.status(500).json({ error });
    });
  });

  // insert vote into user post vote
  const insertVote = (userId, postId) => (
    database.query(insertPostVote(userId, postId), [])
  );

  // update post vote count
  const updateVote = postId => (
    database.query(updatePostVote(postId), [])
  );

  // return post vote count
  const selectVote = postId => (
    database.query(selectPostVote(postId), [])
  );

  // post vote end point
  router.post('/votes', async (req, res) => {
    const { userId, postId } = req.body.vote;

    try {
      await insertVote(userId, postId);
      await updateVote(postId);
      const select = await selectVote(postId);

      return res.status(200).send(select.rows);
    } catch (err) {
      if (err.code === '23505') {
        return res.status(409).json({ response: false });
      }

      return res.status(500).json({ err });
    }
  });

  // post post end point
  router.get('/post/:postId', async (req, res) => {
    try {
      await database.query(selectPost, [req.params.postId]);
      res.status(200).json(res.rows);
    } catch (err) {
      res.status(500).json({ err });
    }
  });

  // post post end point
  router.post('/post', async (req, res) => {
    const { title, description, link, categoryId, userId, postDate } = req.body.post; // tag

    try {
      await database.query(insertPost(title, description, link, categoryId, userId, postDate), []);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ err });
    }
  });

  // post put end point
  router.put('/post', async (req, res) => {
    const { postId, title, description, link, categoryId, userId, postDate } = req.body.post; // tag

    try {
      await database.query(updatePost(postId, title, description, link, categoryId, userId, postDate), []);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ err });
    }
  });

  // post delete end point
  router.delete('/post', async (req, res) => {
    const { postId } = req.body.post;

    try {
      await database.query(deletePost(postId), []);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ err });
    }
  });

  return router;
};
