import axios from 'axios';
import template from './template.marko';
import {API_ENDPOINT} from '~/constants';

export default async (_, res) => {
  const url = `${API_ENDPOINT}/api/pages/blog`;
  const {data} = await axios.get(url);

  res.marko(template, {...data.doc});
};
