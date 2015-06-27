'use strict';

var packageName = 'lsun:linearicons'
var packagePath = '/packages/' + packageName.replace(':', '_');

// Check that the font files are downloadable. Meteor places assets at /packages/<packageName>/.
// Only the 'woff' and 'woff2' files will be used in modern browsers
['eot', 'svg', 'ttf', 'woff', 'notexist'].forEach(function (font) {
  Tinytest.addAsync('Test format ' + font, function (test, done) {

    HTTP.get(
      packagePath + '/Linearicons-Free-v1.0.0/fonts/Linearicons-Free.' + font,
      {
         headers: {
           'Cache-Control': 'no-cache'  // because Meteor has cached fonts even after they were removed from package.js (!) - https://github.com/meteor/meteor/issues/3196
         }
      },
      function callback(error, result) {
        if (error) {
          test.fail({message: 'Font failed to load'});
        } else {
          // if the file is 404, Meteor will redirect to / and return the Meteor.js boilerplate
          // Meteor dosn't provide a 404 status code, so this is a hack here.
          if (font === 'notexist') {
            test.isTrue(result.content.length < 20000, 'get a format should not exist.');
          }
          else {
            test.isTrue(result.content.length > 20000, font + ' font could not be downloaded');
          }
        }
        done();
      }
    );
  });
});
