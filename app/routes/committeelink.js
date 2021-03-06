import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=aecc85c4e48b47efb4ec5a590c0c3c14&chamber=' + params.chamber + '&subcommittee=false';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },
});
