export const selectPostsByCategoryID = 
  `select
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

export const selectWeeks = 
  `select
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

export const selectCategories = 
  `select
    category_id,
    title
  from
    categories
  order by
    title asc;`;

export const insertPostVote = (userId, postId) => {
  return `insert into
            user_post_votes
              (
                user_id,
                post_id
              )
              values
              (
                '${userId}',
                '${postId}'
              );`;
};

export const updatePostVote = (postId) => {
  return `update
            posts
          set
            votes = votes + 1
          where
            post_id = '${postId}';`;
};

export const selectPostVote = (postId) => {
  return `select
            post_id,
            votes 
          from 
            posts 
          where
            post_id = '${postId}';`
};

export const insertPost = (title, link, date, description, user_id, category_id) => {
  return `insert into 
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
};
