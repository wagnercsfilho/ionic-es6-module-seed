System.register([], function (_export) {
  'use strict';

  var MainCtrl;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      MainCtrl = (function () {
        function MainCtrl($scope, $ionicModal, $timeout) {
          _classCallCheck(this, MainCtrl);

          var self = this;
          self.$ionicModal = $ionicModal;
          self.$timeout = $timeout;
          // Form data for the login modal
          self.loginData = {};
          self.modal;

          // Create the login modal that we will use later
          $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
          }).then(function (modal) {
            self.modal = modal;
          });
        }

        _createClass(MainCtrl, [{
          key: 'closeLogin',

          // Triggered in the login modal to close it
          value: function closeLogin() {
            var self = this;
            self.modal.hide();
          }
        }, {
          key: 'login',

          // Open the login modal
          value: function login() {
            var self = this;
            self.modal.show();
          }
        }, {
          key: 'doLogin',

          // Perform the login action when the user submits the login form
          value: function doLogin() {
            var self = this;
            console.log('Doing login', this.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            self.$timeout(function () {
              self.closeLogin();
            }, 1000);
          }
        }]);

        return MainCtrl;
      })();

      _export('MainCtrl', MainCtrl);
    }
  };
});