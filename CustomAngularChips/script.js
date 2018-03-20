// Code goes here


var app = angular.module('materialChips', ['ngMaterial']).
controller('ChipsController', function($scope) {
  
  $scope.editChip = function(chip){
    chip.isEditing = true;
  }
  $scope.doneEditChip = function(chip){
    chip.isEditing = false;
  }
 
  var init = function() {
    
    $scope.xyz = [{ key: "Primefaces", isEditing: false, isRemoveable: false, isEditable: false },
    { key: "HttpSession", isEditing: false, isRemoveable: true, isEditable: true }]
    
    
  };
  init();
  
});