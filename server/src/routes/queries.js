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

export const insertPostVote = (userId, postId) => (
  `insert into
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
);

export const updatePostVote = postId => (
  `update
      posts
    set
      votes = votes + 1
    where
      post_id = '${postId}';`
);

export const selectPostVote = postId => (
  `select
      post_id,
      votes 
    from 
      posts 
    where
      post_id = '${postId}';`
);

export const selectPost =
  `select
      post_id,
      title,
      link,
      date,
      description,
      user_id,
      category_id,
    from
      posts
    where
      post_id = $1;`;

export const insertPost = (title, description, link, categoryId, userId, postDate) => (
  `insert into 
      posts 
        (title,
        link,
        date,
        description,
        user_id,
        category_id,
        votes)
      values 
        ('${title}',
        '${link}',
        '${postDate}',
        '${description}',
        '${userId}',
        '${categoryId}',
        0);`
);

export const updatePost = (postId, title, description, link, categoryId) => (
  `update
      posts
    set 
      title = '${title}',
      link = ${link}',
      description = '${description}',
      category_id = '${categoryId}',
    where
      post_id = '${postId}';`
);

export const deletePost = postId => (
  `delete from
      posts
    where
      post_id = '${postId}';`
);
