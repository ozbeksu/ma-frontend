import {setResourseToGlobalContext, getPageContext} from '~/utils/helpers';
import {globalContext, SETTINGS_URL} from '~/constants';
import template from './template.marko';

export default async ({session}, res) => {
  await setResourseToGlobalContext(globalContext, SETTINGS_URL);

  res.marko(
    template,
    getPageContext(globalContext, SETTINGS_URL, {
      user: session.isAuth ? session.user : null,
    }),
  );
};
