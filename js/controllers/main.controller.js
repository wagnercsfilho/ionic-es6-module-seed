export class MainCtrl{

  constructor($scope, $ionicModal, $timeout){
    var self = this;
    self.$ionicModal = $ionicModal;
    self.$timeout = $timeout;
    // Form data for the login modal
    self.loginData = {};
    self.modal;

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      self.modal = modal;
    });

  };

  // Triggered in the login modal to close it
  closeLogin() {
    var self = this;
    self.modal.hide();
  };

  // Open the login modal
  login() {
      var self = this;
      self.modal.show();
  };

  // Perform the login action when the user submits the login form
  doLogin() {
      var self = this;
      console.log('Doing login', this.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      self.$timeout(function() {
        self.closeLogin();
      }, 1000);
  };
  
}