import {Router} from 'express';

import indexPage from './pages/index';
import loginPage from './pages/auth/login';
import logout from './pages/auth/logout';
import profilePage from './pages/profile';
import blogPage from './pages/blog';
import blogSinglePage from './pages/blog/single';

export const router = Router()
  .get('/', indexPage)
  .get('/login', loginPage)
  .get('/logout', logout)
  .get('/profile', profilePage)
  .get('/blog', blogPage)
  .get('/blog/:slug', blogSinglePage);
