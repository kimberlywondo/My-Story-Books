myApp.component('signup', {
    templateUrl: 'js/auth/signup/signup.html',
    controller: function(Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;

        this.signup = function(form) {
            this.submitted = true;

            if (form.$valid) {
                return this.Auth.signup({
                        // firstName: this.user.firstName,
                        // lastName: this.user.lastName,
                        username: this.user.username,
                        password: this.user.password
                })
                .then(() => {
                    // Account created, redirect story index
                        $state.go('storyIndex');
                })
                .catch(err => {

                   console.log(err);

                });
            }
        };
    }
});
