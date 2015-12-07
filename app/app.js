/** --- externals */
import 'ionic-sdk/release/js/ionic.bundle';
import 'style/bootstrap';

/** --- pages/tabs */
import './tabs/main';

/** --- models */
import './models/record';

angular.module('app', ['ionic', 'app.main', 'app.record'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                template: require('./tabs/tabs.tmpl.html')
            })
            .state('app.main', {
              url: 'main',
              views: {
                'tab-dash': {
                  template: require('./tabs/main/main.tmpl.html'),
                  controller: 'MainCtrl as mainCtrl'
                }
              }
            })
        // $urlRouterProvider.deferIntercept();
        $urlRouterProvider.otherwise('/main');
    })
