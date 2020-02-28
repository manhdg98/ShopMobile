function Controller($http, $scope,DialogService,AuthService,shareData,$cookies){
    let self = this;
    self.showModal = function(){
      DialogService.newCart();
   }
  window.onloadHeaderbar = function(){
       self.init();
  }
   self.showLogin = function () {
       DialogService.login();
          self.init();
   }
   self.showRegister = function () {
       DialogService.register();
   }
   self.init = function () {
       AuthService.getUserStatus().then(function () {
           self.getUserStatus = AuthService.isLoggedIn();
          
           
           if(self.getUserStatus){
               self.user = $cookies.get('currentUser');

               console.log();
               
               self.users = $cookies.get('currentUser').username;
               if($cookies.get('currentUser').role == 'admin'){
                   self.checkAdmin = true;
               };
           }
           else{
               self.users ='Login';
           }

       });
   }
   self.init();
   self.logouts = function () {
     AuthService.logout()
       .then(function () {
         $cookies.remove('currentUser');
         $.notify({
           icon: 'fa fa-check',
           message: 'Logout success !!!!'
         },{
            delay: 2,
            timer: 200
         });
         window.location.href='/';
       });

   };

}

app.component('headerBar', {
    templateUrl: 'app/shared/headerbar/headerbarView.html',
    controller: Controller,
    controllerAs: 'headerbarCtrl'
})
