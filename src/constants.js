export const API_URL = 'http://localhost';
export const API_PORT = '5000';
export const API_ENDPOINT = `${API_URL}:${API_PORT}/api/v1`;

export const SETTINGS_URL = '/globals/settings';

export const globalContext = {
  title: 'Home - Asterisk',
  meta: {description: 'Welcome to Asterisk!', keywords: 'asterix'},
  user: {
    username: 'admin',
    email: 'admin@admin.com',
    isLoggenIn: true,
    isVerified: true,
  },
  blocks: [],
  promises: {},
  cache: {},
};

export const justValidateConfig = {
  lockForm: true,
  focusInvalidField: true,
  validateBeforeSubmitting: true,
  errorFieldCssClass: 'invalid',
  errorLabelCssClass: 'invalid-label',
  successFieldCssClass: 'valid',
  successLabelCssClass: 'valid-label',
  // errorsContainer: '.error-messages',
};
