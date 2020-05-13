app.controller('postsCtrl', function($scope, $http, apiService) {
  window.apps = this;
  let self = this;
  this.list = [];
  self.page = 1;
  self.comment = "";

  angular.element(document).ready(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
        $('body').removeClass('loading');
      }
    });
  });
  apiService.getDisplayPost()
    .then(function(post) {
      $scope.data = post.data;
      // console.log('post', post.data);
    });

  $scope.addComment = function(comment){
    
  }
});
