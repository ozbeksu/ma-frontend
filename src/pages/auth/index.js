import template from './template.marko';
import {defaultContext} from '~/constants';

export default (req, res) => {
  res.marko(template, defaultContext);
};
