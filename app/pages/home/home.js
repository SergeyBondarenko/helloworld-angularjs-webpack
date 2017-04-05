
export const home = angular.module('home', [])
.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    template: require('./home.html')
  });
});
