import express from 'express';
import { resolve } from 'path';
import fallback from 'express-history-api-fallback';
import config from '../config';

const root = resolve(process.cwd(), config.get('STATIC_PATH'));
const app = express();

app.use(express.static(root));
app.use(fallback('index.html', { root }));

const cors = require('cors');
const fs = require('fs');
const jsonFile = require('./database/mock-data.json');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

// get categories
app.get('/categories', (req, res) => {
  /* const { weeks } = jsonFile;
  const categories = weeks.map(week => week.categories)
                          .reduce((el, nextEl) => el.concat(nextEl))
                          .filter((category, index, categoriesFt) => categoriesFt.indexOf(category) === index);
  res.json(categories); */

  res.json(jsonFile.weeks);
});

// get posts
app.get('/posts', function (req, res) {
  res.json(jsonFile.posts);
});

// post test category
app.post('/posts', (req, res) => {
  const newPost = req.body;
  const newData = jsonFile;

  newData.weeks.push(newPost);

  console.log(newPost);

  /*fs.writeFile('./database/mock-data.json', JSON.stringify(newData), { encoding: 'utf-8' }, (err) => {
    if (err) return res.status(500).json({ error: err });
    return res.status(200).json(newData);
  });*/
});

// 404
app.use((req, res, next) => {
  res.status(404).send('Page not found...');
  next();
});

module.exports = app;
