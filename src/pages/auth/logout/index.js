export default async ({session}, res) => {
  session.destroy(err => {if (err) console.log(err)});
  res.clearCookie('token');
  res.redirect('/');
};
