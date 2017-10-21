import dotEnv from 'dotenv';
import env from '../helpers/env';

// .env config implementation
dotEnv.config();

env.checkEnvironmentVariables();
