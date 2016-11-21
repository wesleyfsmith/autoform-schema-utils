Package.describe({
  name: 'wesleyfsmith:autoform-schema-utils',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Simple utilities for merging autoform options into a simple schema.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/wesleyfsmith/autoform-schema-utils.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('aldeed:simple-schema@1.5.3');
  api.mainModule('autoform-schema-utils.js');
});
