import template from './template.marko';
import {globalContext} from '~/constants';
import {getUserDataFromToken} from '~/utils/helpers';

export default async ({cookies}, res) => {
  const user = getUserDataFromToken(cookies['token']);

  res.marko(template, {...globalContext, user});
};
