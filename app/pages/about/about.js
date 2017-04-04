
export const about = angular.module('about', [])
.config(function ($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    template: require('./about.html')
  });
});
