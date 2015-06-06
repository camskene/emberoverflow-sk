// in order to see the app running inside the QUnit runner
App.rootElement = '#ember-testing';

// Common test setup
App.setupForTesting();
App.injectTestHelpers();

// common QUnit module declaration
module("Integration tests", {
  beforeEach: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(App, App.advanceReadiness);
  },

  afterEach: function() {
    // reset the application state between each test
    App.reset();
  }
});

test('index page has a title and a list of questions', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(
      find('h2').text(),
      'Welcome to Emberoverflow',
      'Application header is rendered'
    );
    assert.equal(
      find('ul:not(.nav) > li').length,
      2,
      'There are two questions in the list'
    );
  });
});