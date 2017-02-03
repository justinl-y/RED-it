import cors from 'cors';
import bodyParser from 'body-parser';
import database from '../database/db';

export default function APIRoutes(router){
  router.use(cors());
  router.use(bodyParser.json());

  /*router.use((req, res, next) => {
    console.log('got api request...'); // token for authentication goes here
  })*/

  router.get('/posts/:category_id', (req, res) => {
    const querySQL = `select
                        posts.post_id,
                        posts.title,
                        posts.link,
                        posts.description,
                        array_agg(tags.title) as tags,
                        category_id
                      from
                        posts
                        left outer join post_tags on post_tags.post_id = posts.post_id
                        left outer join tags on tags.tag_id = post_tags.tag_id
                      where 
                        category_id = $1
                      group by
	                      posts.post_id;`;

      // database.query('select * from posts where category_id = $1 ;', [req.params.category_id]).then((response) => {
      database.query(querySQL, [req.params.category_id]).then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.status(500).json({error})
    })
  });

  router.get('/weeks', (req, res) => {
    const querySQL = `select
                        weeks.week_id,
                        weeks.title,
                        array_agg(array[categories.category_id::text, categories.title::text]) as categories
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

  router.post('/votes/:postid' , (req, res) => {
    const { user_id, post_id } = req.body.vote

    // console.log(req.body.vote);

    const querySQL = `insert into
                    user_post_votes
                      (
                        user_id,
                        post_id
                      )
                      values
                      (
                        '${user_id}',
                        '${post_id}'
                      );`

    database.query(querySQL, [])
      .then((response) => {
        // res.json(response.rows);
        res.status(200).json({ success: true })
      }).catch((error) => {
        res.status(409).json({ error: 'voted already'})
        // res.status(500).json({error})
      })

      // return vote count
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
