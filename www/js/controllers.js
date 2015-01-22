angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('RequestCtrl', function($scope,$ionicModal) {

    $ionicModal.fromTemplateUrl('templates/send.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  // $scope.map = {center: {latitude: 23.1550519, longitude: 72.66679909999999 }, zoom: 15 };
  //       $scope.options = {scrollwheel: false};
  //       $scope.circles = [
  //           {
  //               id: 1,
  //               center: {
  //                   latitude: 23.1550519,
  //                   longitude: 72.66679909999999
  //               },
  //               radius: 200,
  //               stroke: {
  //                   color: '#08B21F',
  //                   weight: 2,
  //                   opacity: 1
  //               },
  //               fill: {
  //                   color: '#08B21F',
  //                   opacity: 0.5
  //               },
  //               geodesic: true, // optional: defaults to false
  //               draggable: false, // optional: defaults to false
  //               clickable: true, // optional: defaults to true
  //               editable: true, // optional: defaults to false
  //               visible: true // optional: defaults to true
  //           }
  //       ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

})
.controller('HomeCtrl', function($scope) {
  $scope.show = false;

})
.controller('BrowseCtrl',function  ($scope) {
  
});