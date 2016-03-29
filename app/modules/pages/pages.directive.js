import pagesTemplate from './pages.html';

export default function pagesDirective() {
    return {
        restrict: 'E',
        bindToController: {
            page: '@'
        },
        template: pagesTemplate,
        controller: PagesController,
        controllerAs: '$ctrl'
    }
}

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


