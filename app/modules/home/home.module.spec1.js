import homeModule from './home.module';

describe(homeModule, function() {

    beforeEach(module(homeModule));

    describe('view2 controller', function() {

        it('should ....', inject(function($controller, $directive) {

            var homeDirective = $directive('home');
            expect(homeDirective).toBeDefined();
        }));

    });
});