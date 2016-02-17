
exports.default = {
  routes: function(api){
    api.config.servers.web.rootEndpointType = 'api';

    return {
      get: [
        { path: '/status', action: 'status' },
        { path: '/docs', action: 'showDocumentation' }
      ]

    };
  }
};
