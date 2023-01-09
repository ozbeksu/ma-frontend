import {getUserDataFromToken} from './../utils/helpers.js';

export default async ({cookies, session}, _, next) => {
  const user = getUserDataFromToken(cookies['token']);

  if (user && !user.isExpired) {
    session.user = user;
    session.username = user.username;
    session.isAuth = true;
  } else {
    session.user = null;
    session.username = null;
    session.isAuth = false;
  }

  next();
};
