import navbarTemplate from '../shared/page/navbar.html';

run.$inject = ['$templateCache'];

export default function run($templateCache) {
    $templateCache.put('navbar.html', navbarTemplate);
}

