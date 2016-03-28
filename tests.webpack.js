// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';

var context = require.context('./app', true, /.spec$/);
testsContext.keys().forEach(context);