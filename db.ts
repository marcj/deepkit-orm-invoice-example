import { Database } from '@deepkit/orm';
import { SQLiteDatabaseAdapter } from '@deepkit/sqlite';
import { User } from './user';
import { Invoice } from './invoice';

export const database = new Database(new SQLiteDatabaseAdapter('data.sqlite'), [User, Invoice]);
