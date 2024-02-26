function validateForm() {
    var username = document.getElementById("user").value.trim();
    var email = document.getElementById("email").value.trim();
    var age = document.getElementById("age").value.trim();
    var mobile = document.getElementById("mobile").value.trim();

    // Validation for blank inputs
    if (username === "" || email === "" || age === "" || mobile === "") {
        alert("All fields are required");
        return false;
    }

    // Validation for Username: Only alphabets allowed
    if (!username.match(/^[a-zA-Z]+$/)) {
        alert("Username should contain only alphabets");
        return false;
    }

    // Validation for Email: Valid email format required
    if (!email.includes("@")) {
        alert("Enter a valid email address");
        return false;
    }

    // Validation for Age: Exactly 2 digits allowed
    if (age.length !== 2 || isNaN(age)) {
        alert("Age should be exactly 2 digits");
        return false;
    }

    // Validation for Mobile: Exactly 10 digits allowed
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Mobile number should contain exactly 10 digits");
        return false;
    }

    return true; // Form is valid
}