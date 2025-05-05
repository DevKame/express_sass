

import path from 'node:path';
import {fileURLToPath} from 'node:url';

import express from 'express';
import helmet from 'helmet';

import Indexrouter from './router/Indexrouter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = express();

server.use(helmet());
server.set('view engine', 'hbs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded());

server.use('/', Indexrouter);


server.listen(3000);