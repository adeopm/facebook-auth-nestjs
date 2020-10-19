export const FACEBOOK_AUTH_GRAPH_URL = 'https://graph.facebook.com/';
export const FACEBOOK_AUTH_DEBUG_TOKEN_URL = `${FACEBOOK_AUTH_GRAPH_URL}debug_token`;
export const FACEBOOK_AUTH_ACCESS_TOKEN_URL = `${FACEBOOK_AUTH_GRAPH_URL}oauth/access_token`;
export const FACEBOOK_AUTH_CONFIG_MODULE_TOKEN = Symbol('FACEBOOK_AUTH_MODULE_CONFIG_TOKEN');
export const FACEBOOK_AUTH_SERVICE_TOKEN = Symbol('FACEBOOK_AUTH_SERVICE_TOKEN');