$(document).ready(function () {
    $('#signInForm').submit(function (e) {
        e.preventDefault();
        var valid = true;

        // Validation for Username
        if ($('#username').val().trim() == '') {
            $('#usernameError').text('Username is required');
            valid = false;
        } else {
            $('#usernameError').text('');
        }

        // Validation for Password
        if ($('#password').val().trim() == '') {
            $('#passwordError').text('Password is required');
            valid = false;
        } else {
            $('#passwordError').text('');
        }

        if (valid) {
            // If form is valid, you can proceed with signing in
            // For demonstration purposes, we're just logging the data
            var username = $('#username').val().trim();
            var password = $('#password').val().trim();
            console.log("Username: " + username);
            console.log("Password: " + password);
        }
    });
});