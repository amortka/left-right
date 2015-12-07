import angular from 'angular';
import MainController from './main.ctrl';

MainController.$inject = ['RecordSvc'];

export default angular.module('app.main', [])
  .controller('MainCtrl', MainController)
