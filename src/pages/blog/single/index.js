import httpClient from '~/utils/httpClient';
import template from './template.marko';
import {pageContext} from '~/constants';

export default async ({cookies, session, params}, res) => {
  const user = session.isAuth ? session.user : null;

  pageContext.promises.getPageBySlug = httpClient.get(
    `/pages/content/${params.slug}`,
    {headers: {Authorization: `JWT ${cookies['token']}`}},
  );

  const {data} = await httpClient.get(
    `/globals/settings/meta/${params.slug}`,
  );
  res.marko(template, {...pageContext, user, ...data});
};
