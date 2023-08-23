// function onSignIn(googleuser) {
//     var profile = googleUser.getBasicProfile();
//     // $("#nameGoogle").text(profile.getName());
//     // $("#emailGoogle").text(profile.getEmail());
//     // $("#imageGoogle").attr('src', profile.getImageUrl());
//     // $(".data").css("display", "block");
//     $(".g-signin2").css("display", "none");
    
// }
// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//     alert("You have been signed out successfully");
//     $(".g-signin2").css("display", "block");
//     $(".data").css("display", "none");
//     });
// }

const validation = new JustValidate("#signup");

validation
    .addField("#name", [
        {
            rule: "required"
        }
    ])
    .addField("#email", [
        {
            rule: "required"
        },
        {
            rule: "email"
        },
        {
            validator: (value) => () => {
                return fetch("validate-email.php?email=" + encodeURIComponent(value))
                       .then(function(response) {
                           return response.json();
                       })
                       .then(function(json) {
                           return json.available;
                       });
            },
            errorMessage: "email already taken"
        }
    ])
    .addField("#password", [
        {
            rule: "required"
        },
        {
            rule: "password"
        }
    ])
    .addField("#password_confirmation", [
        {
            validator: (value, fields) => {
                return value === fields["#password"].elem.value;
            },
            errorMessage: "Passwords should match"
        }
    ])
    .onSuccess((event) => {
        document.getElementById("signup").submit();
    });