const app = angular.module('travelApp', []);

app.controller('MyController', ['$http', function($http){
  const controller = this;

  this.createTravel = function(){
    $http({
      method:'POST',
      url:'/travel',
      data: {
        location: this.location,
        url: this.url
      }
    }). then(function(response){
      controller.getTravel();
    }, function(){
      console.log('error');
    });
  };

  this.deleteTravel = function(travel){
    $http({
      method:'DELETE',
      url: '/travel/' + travel._id
    }).then(
      function(response){
        controller.getTravel();
      },
      function(error){

      }
    );
  }


  this.getTravel = function(travel){
    $http({
      method: 'GET',
      url:'/travel',
    }).then(function(response){
      controller.travel = response.data
    }, function(){
      console.log('error');
    });
  };
this.getTravel();

this.editTravel = function(travel){
  $http({
    method: 'PUT',
    url:'/travel/' + travel._id,
    data:{
      location: this.updatedLocation,
      url: this.updatedUrl
    }
  }).then(function(response){
    controller.getTravel();
  })
}
this.indexofEditFormToShow = 1;














}]); //closes app.controller
