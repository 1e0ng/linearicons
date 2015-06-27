Package.describe({
  name: 'lsun:linearicons',
  version: '1.0.0_1',
  // Brief, one-line summary of the package.
  summary: 'Meteor port of Linearicons',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/liangsun/linearicons',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'Linearicons-Free-v1.0.0/fonts/Linearicons-Free.eot',
    'Linearicons-Free-v1.0.0/fonts/Linearicons-Free.svg',
    'Linearicons-Free-v1.0.0/fonts/Linearicons-Free.ttf',
    'Linearicons-Free-v1.0.0/fonts/Linearicons-Free.woff',
    'Linearicons-Free-v1.0.0/style.css',
  ], 'client');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'http'], 'client');
  api.use('lsun:linearicons', 'client');
  api.addFiles('linearicons-tests.js', 'client');
});
