import pg from 'pg';
import config from '../../config';

const dbconfig = {
  host: config.get('POSTGRES_HOST'), //localhost
  user: config.get('POSTGRES_USER'),
  password: config.get('POSTGRES_PASSWORD'),
  database: config.get('POSTGRES_DBNAME'),
}

const database = new pg.Pool(dbconfig);

export default database;
