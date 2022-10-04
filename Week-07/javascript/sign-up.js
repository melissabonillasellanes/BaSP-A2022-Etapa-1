window.onload = function () {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var dni = document.getElementById("dni");
    var birthDate = document.getElementById("birthDate");
    var phoneNumber = document.getElementById("phoneNumber");
    var address = document.getElementById("address");
    var location = document.getElementById("location");
    var postalCode = document.getElementById("postalCode");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var repeatPassword = document.getElementById("repeatPassword");
    var button = document.getElementById("button");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var array = [firstName, lastName, dni, birthDate, phoneNumber, address, location, postalCode, email, password, repeatPassword];

    if (localStorage.length > 0) {
        firstName.value = localStorage.getItem("name");
        lastName.value = localStorage.getItem("lastName");
        dni.value = localStorage.getItem("dni");
        birthDate.value = dateFormat(localStorage.getItem("dob"), false);
        phoneNumber.value = localStorage.getItem("phone");
        address.value = localStorage.getItem("address");
        location.value = localStorage.getItem("city");
        postalCode.value = localStorage.getItem("zip");
        email.value = localStorage.getItem("email");
        password.value = localStorage.getItem("password");
        repeatPassword.value=localStorage.getItem("password");
    };

    array.forEach(function(element) {
        element.addEventListener("blur", function() {
            validation(element);
        });
        element.addEventListener("focus", function() {
            reset(element);
        });
    });

    function validation (valid) {
        switch(valid) {
            case firstName:
                checkFirstName();
            break;
            case lastName:
                checkLastName();
            break;
            case dni:
                checkDni();
            break;
            case birthDate:
                checkBirthDate();
            break;
            case phoneNumber:
                checkPhoneNumber();
            break;
            case address:
                checkAddress();
            break;
            case location:
                checkLocation();
            break;
            case postalCode:
                checkPostalCode();
            break;
            case email:
                checkEmail();
            break;
            case password:
                checkPassword();
            break;
            case repeatPassword:
                checkRepeatPassword();
            break;
        };
    };

    function checkOut (input) {
        if (input.value === "") {
            showError(input, "Please complete this field");
            return true;
        };
    };

    function formatValidation (string) {
        string = string.split(" ").join("");
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (Number(string[i]) == string[i]) {
                control ++;
            };
        };
        return (control !== 0);
    };

    function characterValidate (string) {
        var character = "'" + " " + '!"#$%&/()=?¡¿|¨*][_:;,.-<>{}+¬°~^`@';
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (character.includes(string[i])) {
                    control ++;
            };
        };
        return (control !== 0);
    };

    function checkFirstName () {
        if (checkOut(firstName)) {
            return "Incomplete field name \n";
        } else if (firstName.value.length < 4) {
            showError(firstName, "This field must contain at least 4 characters");
            return "invalid character numbers";
        } else if (formatValidation(firstName.value) || characterValidate((firstName.value.split(" ").join("")))) {
            showError(firstName, "Please insert a valid format. Must not contain symbols or numbers");
            return "Invalid name format";
        } else {
            return "";
        };
    };

    function checkLastName () {
        if (checkOut(lastName)) {
            return "Incomplete surname field \n";
        } else if (lastName.value.length < 4) {
            showError(lastName, "This field must contain at least 4 characters");
            return "invalid character numbers";
        } else if (formatValidation(lastName.value) || characterValidate(lastName.value.split(" ").join(""))) {
            showError(lastName, "Please insert a valid format. Must not contain symbols or numbers");
            return "Invalid last name format";
        } else {
            return "";
        };
    };

    function checkDni() {
        if (checkOut(dni)) {
            return "Incomplete ID field \n";
        } else if (dni.value.length < 8) {
            showError(dni, "This field must contain more than 7 numbers");
            return "Wrong, ID with less than 7 numbers";
        } else if (isNaN(dni.value) || characterValidate(dni.value)) {
            showError(dni, "Please enter a number");
            return "Invalid ID number";
        } else {
            return "";
        };
    };

    function checkBirthDate() {
        if(checkOut(birthDate)) {
            return "Incomplete date of birth field \n";
        } else if ((new Date(birthDate.value)) >= new Date()) {
            showError(birthDate, "The date entered is after the current date");
            return "Birth date is after the current date";
        } else {
            return "";
        };
    };

    function dateFormat (value, format) {
        var date = new Date(value);
        var dd = date.getDate() + 1;
        var mm = date.getMonth() + 1;
        var aaaa = date.getFullYear();
        if (dd < 10) {
            dd = "0" + dd;
        };
        if (mm < 10) {
            mm = "0" + mm;
        };
        if (format) {
            return mm + "/" + dd + "/" + aaaa;
        } else {
            dd = Number(dd) - 1;
            if (dd < 10) {
                dd = "0" + dd;
            };
            return aaaa + "-" + mm + "-" + dd;
        };
    };

    function checkPhoneNumber() {
        if(checkOut(phoneNumber)) {
            return "Incomplete phone number field \n";
        } else if (isNaN(phoneNumber.value) || characterValidate(phoneNumber.value)) {
            showError(phoneNumber, "Please insert only numbers");
            return "Invalid phone number";
        } else if (phoneNumber.value.length !== 10) {
            showError(phoneNumber, "This field must contain 10 numeric characters");
            return "Invalid phone number";
        } else {
            return "";
        };
    };

    function checkAddress () {
        if(checkOut(address)) {
            return "Incomplete address field \n";
        } else if (address.value.length <= 5 || address.value.trim().split(" ").length < 2) {
            showError(address, "This field must contain at least 5 characters with a space in between");
            return "Invalid address name";
        } else if (!formatValidation(address.value) || !isNaN(address.value.split(" ").join("")) || characterValidate(address.value.split(" ").join(""))) {
            showError(address, "This field must contain numbers and letters");
            return "Invalid address name";
        } else {
            return "";
        };
    };

    function checkLocation() {
        if(checkOut(location)) {
            return "Incomplete location field \n";
        } else if (location.value.length <= 4) {
            showError(location, "This field must contain at least 4 characters");
            return "Location name with less than 4 characters";
        } else if (characterValidate(location.value.split(" ").join(""))) {
            showError(location, "Please insert a valid location");
            return "Invalid location format";
        } else {
            return "";
        };
    };

    function checkPostalCode() {
        if(checkOut(postalCode)) {
            return "Incomplete postal code field \n";
        } else if (isNaN(postalCode.value) || characterValidate(postalCode.value)) {
            showError(postalCode, "Please enter a number");
            return "Invalid postal code";
        } else if (postalCode.value.length < 4 || postalCode.value.length > 5) {
            showError(postalCode, "Please enter a number between 4 and 5 digits");
            return "Invalid postal code";
        } else {
            return "";
        };
    };

    function checkEmail () {
        if (checkOut(email)) {
            return "Incomplete email field \n";
        } else if (!emailExpression.test(email.value)) {
            showError(email, "Please insert a valid email");
            return "Invalid email format";
        } else {
            return "";
        };
    };

    function checkPassword () {
        if (checkOut(password)) {
            return "Incomplete password field \n";
        } else if (password.value.length < 8) {
            showError(password, "This field must contain at least 8 characters");
            return "Password with less than 8 characters";
        } else if (!formatValidation(password.value) || !isNaN(password.value) || characterValidate(password.value)) {
            showError(password, "Please insert a valid password. It must contain numbers and letters");
            return "Invalid password format";
        } else {
            return "";
        };
    };

    function checkRepeatPassword() {
        if (checkOut(repeatPassword)) {
            return "Wrong repeat password field";
        } else if (repeatPassword.value !== password.value) {
            showError(repeatPassword, "Passwords do not match. Please login again");
            return "Passwords do not match";
        } else {
            return "";
        };
    };

    function showError (input, message) {
        var container = input.parentElement;
        var text = container.querySelector("p");
        text.textContent = message;
        container.className = "validation error";
    };

    function reset (input) {
        var container = input.parentElement;
        container.className = "validation";
    };

    function saveLocal(res) {
    Object.entries(res.data).forEach(element => {
        localStorage.setItem(element[0], element[1]);
    });
};

function displayError(res) {
    var alertError = [];
    if (res.hasOwnProperty("errors")) {
        Object.entries(res.errors).forEach(element => {
            alertError += "\n" + element[1].msg;
        });
        alert("Sorry an error occurred. Please check the following fields: " + alertError);
    } else {
        alert("Sorry an error has occurred: " + res.msg);
    };
};

    button.addEventListener("click", function(btn) {
        btn.preventDefault();
        array.forEach(function(element) {
        validation(element);
        });

        var validations = [checkFirstName(), checkLastName (), checkDni(), checkBirthDate(), checkPhoneNumber(), checkPostalCode()
        , checkAddress(), checkLocation(), checkPassword(), checkEmail (), checkRepeatPassword ()];
        var errors = [];
        for (var i=0; i < validations.length; i++) {
            if (validations[i] !== "") {
                errors += validations[i];
            };
        };
        if (errors == "") {
            alert("All information sent successfully!\n First Name: " + firstName.value + "\n Last Name: " + lastName.value +
            "\n DNI: " + dni.value + "\n Birth Date: " + birthDate.value + "\n Phone Number: "
            + phoneNumber.value + "\n Address: " + address.value + "\n Location: " + location.value + "\n Postal Code: "
            + postalCode.value + "\n Email: " + email.value + "\n Password: " + password.value);

        fetch("https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" + firstName.value  + "&lastName=" +
        lastName.value + "&dni=" + dni.value + "&dob=" + dateFormat(birthDate.value, true) + "&phone=" +
        phoneNumber.value + "&address=" + address.value + "&city=" + location.value + "&zip=" + postalCode.value
        + "&email=" + email.value + "&password=" + password.value)
        .then(function (response) {
            return response.json()
        })
        .then(function (jsonResponse) {
            if (jsonResponse.success) {
                alert("The request was successful: " + jsonResponse.msg);
                saveLocal(jsonResponse);
            } else {
            throw jsonResponse
            }
        })
        .catch(function (error) {
            displayError(error);
        });
    } else {
        alert("Sorry, the user could not be created. Please check the following fields: \n" + errors);
    };
});
};