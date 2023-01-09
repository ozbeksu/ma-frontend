import template from './template.marko';
import {pageContext} from '~/constants';
import {getUserDataFromToken} from '~/utils/helpers';

export default async ({cookies}, res) => {
  const user = getUserDataFromToken(cookies['token']);

  res.marko(template, {...pageContext, user});
};
