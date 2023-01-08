import axios from 'axios';
import template from './template.marko';
import {API_ENDPOINT} from '~/constants';

export default async (req, res) => {
  const url = `${API_ENDPOINT}/api/pages/blog/${req.params.slug}`;
  const {data} = await axios.get(url);

  res.marko(template, {...data.doc});
};
