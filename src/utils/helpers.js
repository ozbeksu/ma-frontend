import httpClient from './httpClient.js';
import {IMAGE_SIZES} from './enums.js';

/**
 * Returns css class based on card size config
 * @param {string} size
 * @returns {string}
 */
export const getCardWidthClass = size => {
  switch (size) {
    case 'full':
      return 'w-100';
    case 'half':
      return 'w-50';
    case 'oneThird':
      return 'w-33';
    case 'oneFourth':
      return 'w-25';
    case 'oneFifth':
      return 'w-20';
    default:
      return '';
  }
};

/**
 * Returns text content classes
 * @param {{underline: boolean, bold: boolean, italic: boolean}}
 * @returns {string}
 */
export const getTextContentClasses = ({underline, bold, italic}) => {
  let classes = '';
  if (bold) {
    classes += 'bold ';
  }
  if (underline) {
    classes += 'underline ';
  }
  if (italic) {
    classes += 'italic ';
  }
  return classes;
};

/**
 * @param {object} image
 * @param {string} size
 * @returns {string}
 */
export const getImageUrl = (image, size = IMAGE_SIZES.xlarge) =>
  image?.sizes[size]?.url;

/**
 * @param {array} fieldRules
 * @returns {array}
 */
export const getValidationRules = fieldRules =>
  fieldRules
    ?.map(field => {
      const [rule, errorMessage] = field.split('|');
      const [name, value] = rule.split(':');

      switch (name) {
        case 'required' || 'email' || 'password':
          return {rule: name, errorMessage};
        case 'min':
          return {rule: 'minLength', value: parseInt(value, 10), errorMessage};
        case 'max':
          return {rule: 'maxLength', value: parseInt(value, 10), errorMessage};
        default:
          break;
      }
    })
    .filter(Boolean);

/**
 * @param {string} token
 * @returns
 */
export const getUserDataFromToken = token => {
  let user;

  if (token) {
    const userString = new Buffer(token.split('.')[1], 'base64');
    user = JSON.parse(userString.toString('ascii'));
    user.isExpired = Date.now() >= new Date(user?.exp * 1000);
  }

  return user;
};

/**
 * @param {object} ctx Global context
 * @param {string} url
 * @param {unknown} data
 * @returns {object}
 */
export const getPageContext = (ctx, url, data) => {
  const {cache, ...rest} = ctx;

  return {...rest, ...cache[url], ...data};
};

/**
 * @param {object} ctx Global context
 * @param {string} url
 */
export const setResourseToGlobalContext = async (ctx, url) => {
  if (!ctx.cache[url]) {
    const {data} = await httpClient.get(url);

    ctx.cache[url] = data;
  }
};

/**
 * @param {object} ctx Global context
 * @param {{user: object, token: string}} auth
 * @param {{key: string, url: string}} params
 */
export const setPromiseToGlobalContext = (ctx, auth, {key, url}) => {
  ctx.promises[key] = httpClient.auth(auth).get(url);
};

/**
 * @param {string} slug
 * @returns {object}
 */
export const getPageMetaBySlug = async slug => {
  const {data} = await httpClient.get(`/globals/settings/meta/${slug}`);

  return data;
};
