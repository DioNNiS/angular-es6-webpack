import pagesModule from './pages.module';

describe('pages.module', () => {

    describe('pages.directive', () => {
        let $compile,
            $rootScope;

        beforeEach(angular.mock.module(pagesModule));

        beforeEach(inject(function(_$compile_, _$rootScope_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('Replaces the element with the appropriate content', function() {
            console.log('$compile = ', $compile, ' $rootScope = ', $rootScope);
            var element = $compile("<pages></pages>")($rootScope);
            $rootScope.$digest();
            expect(element.html()).toContain("Pages List");
        });

        it('Replaces the element with the appropriate content', function() {
            var element = $compile("<pages page='test'></pages>")($rootScope);
            $rootScope.$digest();
            expect(element.html()).toContain("Page - test");
        });

    })

});