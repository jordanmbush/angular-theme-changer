angular.module("themechanger").component('app', {
  templateUrl: 'templates/app.html',
  controller: function() {
    this.allowEdit = true;
    this.fontColor = 'black';
    this.fontSize = 14;
  },
  controllerAs: 'myCtrl',
});
