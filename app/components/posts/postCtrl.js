app.controller('postCtrl', function($scope, $http, apiService, $stateParams, $cookies) {
    var postId = $stateParams.id;
  
    angular.element(document).ready(function() {
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider) {
          $('body').removeClass('loading');
        }
      });
    });
  
  
    apiService.getPostById(postId)
      .then(function(postId) {
        $scope.data = postId.data;
      });


    $scope.addComment = function(){
        var contentValue = document.getElementById("dsc_message_6655").value;
        var content = {};
        content.cmt_content = contentValue;
        content.name = JSON.parse($cookies.get('currentUser')) ? JSON.parse($cookies.get('currentUser')).name : "anonymous";
        apiService.addComment(postId, content).then(function(response){
          apiService.getPostById(postId)
          .then(function(postId) {
            $scope.data = postId.data;
            document.getElementById("dsc_message_6655").value = "";
          });
        });
      };
  });
  