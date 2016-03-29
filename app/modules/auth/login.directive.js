import loginTemplate from './login.html';

export default function LoginDirective() {
    return {
        restrict: 'E',
        bindToController: {},
        template: loginTemplate,
        controller: LoginController,
        controllerAs: '$ctrl'
    }
}

class LoginController {
    constructor() {

    }

    $onInit() {

    }
}

LoginController.$inject = [];