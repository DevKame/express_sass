

import path from 'node:path';
import {fileURLToPath} from 'node:url';

import express from 'express';
import helmet from 'helmet';
import hbs from 'hbs';

import Indexrouter from './router/Indexrouter.js';
import Aboutrouter from './router/Aboutrouter.js';
import Teamrouter from './router/Teamrouter.js';
import Productrouter from './router/Productrouter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = express();
server.use('/team', Teamrouter);
server.use('/about', Aboutrouter);
server.use('/products', Productrouter);
server.use('/', Indexrouter);

server.use(helmet());
server.use(express.static('public'));
server.set('view engine', 'hbs');
server.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'components'));

server.use(express.urlencoded());



server.listen(3000);