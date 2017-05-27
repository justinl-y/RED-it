import pg from 'pg';
import config from '../../config';

const dbconfig = {
  host: config.get('POSTGRES_HOST'),
  database: config.get('POSTGRES_DBNAME'),
  user: config.get('POSTGRES_USER'),
  password: config.get('POSTGRES_PASSWORD'),
};

const database = new pg.Pool(dbconfig);

export default database;
