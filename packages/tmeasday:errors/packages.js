Package.onTest(function(api) {
  api.use("tmeasday:errors", 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.addFiles('errors_test.js', 'client');
})