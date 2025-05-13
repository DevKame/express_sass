

import path from 'node:path';
import {fileURLToPath} from 'node:url';

import express from 'express';
import helmet from 'helmet';
import hbs from 'hbs';

import Indexrouter from './router/Indexrouter.js';
import Aboutrouter from './router/Aboutrouter.js';
import Teamrouter from './router/Teamrouter.js';
import Productrouter from './router/Productrouter.js';
import Loginrouter from './router/Loginrouter.js';


import { errorCheck } from './middleware/errorCheck.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = express();
server.use(helmet());
server.use(express.static('public'));
server.use(express.urlencoded());
server.use(express.json());

server.set('view engine', 'hbs');
server.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'components'));


server.use('/team', Teamrouter);
server.use('/about', Aboutrouter);
server.use('/products', Productrouter);
server.use('/login', Loginrouter);
server.use('/', Indexrouter);

server.use((req, res) => {
    res.status(404).render('404');
  });

server.listen(3000);