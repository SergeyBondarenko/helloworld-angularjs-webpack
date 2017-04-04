module.exports = function (myApp) {
  myApp.directive('helloWorld', helloWorldFn);

  function helloWorldFn () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'directives/hello-world/hello-world.html',
      controllerAs: 'ctrl',
      controller: function () {
        const ctrl = this;
        ctrl.greeting = 'Hello, World!';
      }
    }
  }
};
