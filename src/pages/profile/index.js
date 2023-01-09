import template from './template.marko';
import {pageContext} from '~/constants';

export default async ({session}, res) => {
  const user = session.isAuth ? session.user : null;

  res.marko(template, {...pageContext, user});
};
