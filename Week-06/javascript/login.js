window.onload = function () {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var button = document.getElementById("button");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    email.addEventListener("blur", function() {
        validation(email);
    });

    password.addEventListener("blur", function() {
        validation(password);
    });

    email.addEventListener("focus", function() {
        reset(email);
    })

    password.addEventListener("focus", function() {
        reset(password);
    })

    function validation (valid) {
        if (valid == email) {
            if (checkOut(email)) {
                return "Incomplete email field";
            } else if (!emailExpression.test(email.value)){
                showError(email, "Please insert a valid email");
                return "Invalid email";
            } else {
                return "";
            };
        } else {
            if (checkOut(password)) {
                return "Incomplete password field";
            } else if (!formatValidation(password.value)){
                showError(password, "Please insert a valid password");
                return "Invalid password";
            } else {
                return "";
            };
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

    function showError (input, message) {
        var container = input.parentElement;
        var text = container.querySelector("p");
        text.textContent = message;
        container.className = "validation error";
    }

    function reset (input) {
        var container = input.parentElement;
        container.className = "validation";
    }

    button.addEventListener("click", function(btn){
        btn.preventDefault();
        validation(email);
        validation(password);
        if (validation(email) == "" && validation(password) == "") {
            alert("Successful login \n Email: " + email.value + "\n Password: " + password.value);
        } else {
            alert("There was a mistake. Please enter the data correctly" + "\n" + validation(email) + "\n" + validation(password));
        }
    });
};