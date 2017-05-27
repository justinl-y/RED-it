export const selectUserDetails = email => (
  `select
    user_id,
    password
  from
    users
  where
    email like '${email}';`
);

export const insertUserDetils = (firstName, lastName, email, hash) => (
  `insert into
    users
    (
      first_name,
      last_name,
      email,
      password
    )
    values
    (
      '${firstName}',
      '${lastName}',
      '${email}',
      '${hash}'
    ) returning user_id;`
);
