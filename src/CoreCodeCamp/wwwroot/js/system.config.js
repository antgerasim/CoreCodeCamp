(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'users': '/js/admin/users',
    'rxjs': '/lib/rxjs',
    '@angular': '/lib/angular2'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'users': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

  var packageNames = [
      'common',
      'compiler',
      'core',
      'http',
      'platform-browser',
      'platform-browser-dynamic'
  ];

  packageNames.forEach(function (pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);