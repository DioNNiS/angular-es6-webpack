import 'bootstrap/less/bootstrap.less';
import './style.less';
//import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './core.config';
import authModule from '../auth/auth.module';
import homeModule from '../home/home.module';
import pagesModule from '../pages/pages.module';

angular.module('core', [
        // 3-rd party
        uiRouter,

        // internal modules
        authModule, homeModule, pagesModule
    ])
    .config(config)
    .name;