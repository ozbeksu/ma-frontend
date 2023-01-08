import {IMAGE_SIZES} from './enums';

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
    classes += 'fw6 ';
  }
  if (underline) {
    classes += 'underline ';
  }
  if (italic) {
    classes += 'i ';
  }
  return classes;
};

export const getImageUrl = (image, size = IMAGE_SIZES.xlarge) =>
  image?.sizes[size]?.url;
