import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

import database from '../database/db';
import { SESSION_COOKIE } from '../app';

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

    const sessionUser = jwt.decode(req.cookies[SESSION_COOKIE]);
    next();
  })

  router.get('/posts/:categoryId', (req, res) => {
    const querySQL = `select
                        posts.post_id,
                        posts.title,
                        posts.link,
                        posts.description,
                        posts.votes, 
                        json_agg(json_build_object('tags_id', tags.tag_id, 'tags_title', tags.title)) as tags
                      from
                        posts
                        left outer join post_tags on post_tags.post_id = posts.post_id
                        left outer join tags on tags.tag_id = post_tags.tag_id
                      where 
                        category_id = $1
                      group by
	                      posts.post_id
                      order by
                        posts.post_id asc;`;

      database.query(querySQL, [req.params.categoryId]).then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.status(500).json({error})
    })
  });

  router.get('/weeks', (req, res) => {
    const querySQL = `select
                        weeks.week_id,
                        weeks.title,
                        json_agg(json_build_object('category_id', categories.category_id, 'category_title', categories.title)) as categories
                      from
                        weeks
                        inner join categories on categories.week_id = weeks.week_id
                      group by
                        weeks.week_id
                      order by
                        weeks.title asc;`;

    database.query(querySQL, [])
      .then((response) => {
        res.json(response.rows);
      }).catch((error) => {
        res.status(500).json({error})
      })
  })

  router.get('/categories', (req, res) => {
    const querySQL = `select
                      category_id,
                      title
                    from
                      categories
                    order by
                      title asc;`;

    database.query(querySQL, [])
      .then((response) => {
        res.json(response.rows);
      }).catch((error) => {
        res.status(500).json({error})
      })
  })

  router.post('/votes', (req, res) => {
    //console.log(req.body);

    const { userId, postId } = req.body.vote

    //console.log(userId, postId);

    // attempt to insert vote into user post vote
    const queryInsertVote = `insert into
                                user_post_votes
                                  (
                                    user_id,
                                    post_id
                                  )
                                  values
                                  (
                                    '${userId}',
                                    '${postId}'
                                  );`

    database.query(queryInsertVote, [])
      .then((response) => {
        //res.status(200).json({ success: true })

        // Update post vote - If caching update fails, the user should still receive a success message
        const queryUpdateVote = `update
                                    posts
                                  set
                                    votes = votes + 1
                                  where
                                    post_id = '${postId}';`;

        database.query(queryUpdateVote, [])
          .catch(err => console.log('handle cache fail'));

        // return post vote count
        const querySelectVoteCount = `select
                                        post_id,
                                        votes 
                                      from 
                                        posts 
                                      where
                                        post_id = '${postId}';`;

        return database.query(querySelectVoteCount, [])
          .then((response) => {
            // console.log(response.rows);
            res.status(200).json(response.rows);
          }).catch((err) => {
            res.status(500).json({err})
          })
      })
      .catch((error) => {
        res.status(409).json({ response: false })
        // res.status(500).json({error})
      })

      // res.status(200).json({ success: true })
    })

  router.post('/post' , (req, res) => {
    const { title, link, date, description, user_id, category_id } = req.body.post;

    const querySQL = `insert into 
                    posts 
                      (title,
                      link,
                      date,
                      description,
                      user_id,
                      category_id)
                    values 
                      ('${title}',
                      '${link}',
                      '${date}',
                      '${description}',
                      '${user_id}',
                      '${category_id}');`

    database.query(querySQL, [])
    .then((response) => {
      //res.json(response.rows);
      res.status(200).json({ success: true })
    }).catch((error) => {
      res.status(500).json({error})
    })
  })

  return router;
}
