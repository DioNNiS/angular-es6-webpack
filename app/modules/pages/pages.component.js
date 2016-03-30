import template from './pages.html';

class PagesController {
    constructor() {
    }

    $onInit() {
        this.title = 'Pages List';

        if (this.page) {
            this.title = 'Page - ' + this.page;
        }
    }
}

PagesController.$inject = [];

let pagesComponent = {
    name: 'pages',
    restrict: 'E',
    bindings: {
        page: '@'
    },
    template: template, // template: template,
    controller: PagesController
};

export { pagesComponent };


