import homeTemplate from './home.html';

export default function homeDirective() {
    return {
        restrict: 'E',
        bindToController: {},
        template: homeTemplate,
        controller: HomeController,
        controllerAs: '$ctrl'
    }
}

class HomeController {
    constructor(randomNames) {
        this.randomNames = randomNames;
    }

    $onInit() {
        this.randomName();
    }

    randomName() {
        this.name = this.randomNames.getName();
    }
}

HomeController.$inject = ['randomNames'];

