export default async ({cookies, session}, res) => {
  // session.user = null;
  // session.username = null;
  // session.isAuth = false;
  // cookies['token'] = null;

  session.destroy(err => {
    if (err) {
      console.log(err);
    }
  });
  res.clearCookie('token');
  res.redirect('/');
};
