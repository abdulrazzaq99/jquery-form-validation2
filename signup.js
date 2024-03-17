$(document).ready(function () {
    $('#signupForm').submit(function (e) {
        e.preventDefault();
        var valid = true;

        if ($('#name1').val().trim() == '') {
            $('#name1Error').text('First Name is required');
            valid = false;
        } else {
            $('#name1Error').text('');
        }

        if ($('#name2').val().trim() == '') {
            $('#name2Error').text('Last Name is required');
            valid = false;
        } else {
            $('#name2Error').text('');
        }

        var email1 = $('#email1').val().trim();
        var email2 = $('#email2').val().trim();
        if (email1 == '') {
            $('#email1Error').text('Email address is required');
            valid = false;
        } else if (!isValidEmail(email1)) {
            $('#email1Error').text('Enter a valid email address');
            valid = false;
        } else {
            $('#email1Error').text('');
        }
        if (email2 == '') {
            $('#email2Error').text('Confirm Email is required');
            valid = false;
        } else if (email1 != email2) {
            $('#email2Error').text('Email addresses do not match');
            valid = false;
        } else {
            $('#email2Error').text('');
        }

        var password1 = $('#password1').val().trim();
        var password2 = $('#password2').val().trim();
        if (password1 == '') {
            $('#password1Error').text('Password is required');
            valid = false;
        } else if (password1.length < 6) {
            $('#password1Error').text('Password must be at least 6 characters long');
            valid = false;
        } else {
            $('#password1Error').text('');
        }
        if (password2 == '') {
            $('#password2Error').text('Confirm Password is required');
            valid = false;
        } else if (password1 != password2) {
            $('#password2Error').text('Passwords do not match');
            valid = false;
        } else {
            $('#password2Error').text('');
        }

        if ($('#DOB').val().trim() == '') {
            $('#DOBError').text('Date of Birth is required');
            valid = false;
        } else {
            $('#DOBError').text('');
        }

        var age = parseInt($('#age').val());
        if (isNaN(age) || age <= 0) {
            $('#ageError').text('Age must be a positive number');
            valid = false;
        } else {
            $('#ageError').text('');
        }

        if ($('#city').val().trim() == '') {
            $('#cityError').text('City is required');
            valid = false;
        } else {
            $('#cityError').text('');
        }

        if (valid) {
            $('#signupForm')[0].submit();
        }
    });
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}