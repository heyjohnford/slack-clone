import Good from 'good';

module.exports = [
  {
    register: Good,
    options: {
      reporters: [{
        reporter: require('good-console'),
        events: {
          response: '*',
          log: '*'
        }
      }]
    }
  },
  {
    register: require('yar'),
    options: {
      cookieOptions: {
        password: 'password',
        isSecure: false
      }
    }
  }
];
