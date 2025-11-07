import GhostContentAPI from '@tryghost/content-api';

const ghost = new GhostContentAPI({
  url: 'http://102.215.228.243:2368',
  key: '6d386941834a5286d34a66e2e4', // Content API key
  version: 'v5.0'
});

export default ghost;
