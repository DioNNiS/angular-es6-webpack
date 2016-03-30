import angular from 'angular';
import coreModule from './modules/core/core.module';
import './style.less';


angular.element(document).ready(function() {
    angular.bootstrap(document, [coreModule], {
        //strictDi: true
    });
});

