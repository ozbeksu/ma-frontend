import {
  setResourseToGlobalContext,
  setPromiseToGlobalContext,
  getPageContext,
  getPageMetaBySlug,
} from '~/utils/helpers';
import {globalContext, SETTINGS_URL} from '~/constants';
import template from './template.marko';

export default async ({cookies, session, params}, res) => {
  const user = session.isAuth ? session.user : null;

  await setResourseToGlobalContext(globalContext, SETTINGS_URL);
  setPromiseToGlobalContext(
    globalContext,
    {user, token: cookies['token']},
    {key: 'getPageBySlug', url: `/pages/content/${params.slug}`},
  );

  const data = await getPageMetaBySlug(params.slug);
  const context = getPageContext(globalContext, SETTINGS_URL, {...data, user});

  res.marko(template, context);
};
