import 'bootstrap/less/bootstrap.less';
import './style.less';
//import 'bootstrap/dist/css/bootstrap.css';

import './boot';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './app.config';
//import home from './features/home';

angular.module('core', [uiRouter]).
    config(config).
    name;