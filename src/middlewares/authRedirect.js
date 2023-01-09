const authRoutes = ['/blog', '/profile'];

export default async ({originalUrl, session}, res, next) => {
  if (!authRoutes.includes(originalUrl)) {
    return next();
  }

  if (session.user == null) {
    session.backTo = originalUrl;
    res.redirect('/login');
  } else {
    next();
  }
};
