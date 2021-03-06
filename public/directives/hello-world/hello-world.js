module.exports = function (myApp) {
  myApp.directive('helloWorld', helloWorldFn);

  function helloWorldFn () {
    require('./hello-world.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./hello-world.html'),
      controllerAs: 'ctrl',
      controller: function () {
        const ctrl = this;
        ctrl.greeting = 'Hello, World!';
      }
    }
  }
};
