/**
 * Created by vyshaalnarayanam on 4/13/17.
 */

(function () {
    angular
        .module("NearBy")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.message = null;
        vm.register = register;

        function register() {
            vm.message = null;
            if (vm.user == null) {
                vm.message = "Please fill in the required fields";
                return;
            }
            if (!vm.user.username) {
                vm.message = "Please provide a username";
                return;
            }
            if (!vm.user.password || !vm.user.password2) {
                vm.message = "Please provide a password";
                return;
            }
            if (vm.user.password !== vm.user.password2) {
                vm.message = "Passwords must match";
                return;
            }
            if (!vm.user.email) {
                vm.message = "Please provide a valid email";
                return;
            }
            vm.user.roles = ["user"];


           UserService
               .register(vm.user)
               .then(function (response) {
                       var user = response.data;
                       if (user != null) {
                           UserService.setCurrentUser(user);
                           if(user.username == "admin"){
                               user.role = "admin";
                               UserService.updateUser(user._id,user)
                                   .then(function (response) {
                                   });
                           }
                           $location.url("/bizsearch");
                       }
                   },
               function () {
                   vm.message = "Username already exists";
               });
        }
    }
})();