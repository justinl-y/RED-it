import express from 'express';
import { resolve } from 'path';
import fallback from 'express-history-api-fallback';
import config from '../config';
import AUTHRoutes from './routes/auth';
import APIRoutes from './routes/api';
// import './database/db';

export const SESSION_COOKIE = 'redit_session';

const root = resolve(process.cwd(), config.get('STATIC_PATH'));
const app = express();

const router = express.Router({
  mergeParams: true,
})

app.use('/auth', AUTHRoutes(router));
app.use('/api', APIRoutes(router));

app.use(express.static(root));
app.use(fallback('index.html', { root }));

module.exports = app;
