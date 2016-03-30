import homeModule from './home.module';
import {HomeController} from './home.directive';
import RandomNames from './randomNames.service';
import homeTemplate from './home.html';

describe('Home', () => {
    let $rootScope, makeController;

    beforeEach(window.module(homeModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new HomeController(new RandomNames());
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    var $controller;

    describe('Controller', () => {

        it('has a name property [name]', () => {
            let controller = makeController();

            expect(controller).toBeDefined();
            expect(controller.name).toBeDefined();
            expect(controller.name).toEqual('');
        });

        it('has a method [randomName]', () => {
            let controller = makeController();
            controller.randomName();

            expect(controller.randomName).toBeDefined();
            expect(controller.name.length).toBeGreaterThan(1);
        });
    });

    describe('Template', () => {

        it('has expressions in template', () => {
            expect(homeTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
        });
    });

    /*
    describe('Component', () => {
        // component/directive specs
        let component = NavbarComponent;

        it('includes the intended template',() => {
            expect(component.template).toEqual(homeTemplate);
        });

        it('uses `controllerAs` syntax', () => {
            expect(component.controllerAs).toBeDefined();
        });

        it('invokes the right controller', () => {
            expect(component.controller).toEqual(HomeController);
        });
    });*/
});