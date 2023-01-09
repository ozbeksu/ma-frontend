import httpClient from '~/utils/httpClient';
import template from './template.marko';
import {pageContext} from '~/constants';

export default async ({cookies, session}, res) => {
  const user = session.isAuth ? session.user : null;

  pageContext.promises.getPageBySlug = httpClient.get('/pages/content/blog', {
    headers: {Authorization: `JWT ${cookies['token']}`},
  });
  const {data} = await httpClient.get('/globals/settings/meta/blog');
  res.marko(template, {...pageContext, user, ...data});
};
