import {Router} from 'express';

import indexPage from './pages/index';
import authPage from './pages/auth';
import blogPage from './pages/blog';
import blogSinglePage from './pages/blog/single';

export const router = Router()
  .get('/', indexPage)
  .get('/login', authPage)
  .get('/blog', blogPage)
  .get('/blog/:slug', blogSinglePage);
