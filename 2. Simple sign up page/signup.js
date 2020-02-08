function validationEvent() {
    let firstPass = document.regForm.psw.value;
    let secondPass = document.regForm.pswRepeat.value;
    let enteredEmail = document.regForm.email.value;
    let atPosition = enteredEmail.indexOf("@");
    let dotPosition = enteredEmail.lastIndexOf(".");
    if (firstPass !== secondPass) {
        alert("Пароли должны совпадать!");
        return false;
    } else if (atPosition < 1 || dotPosition < atPosition + 2 ||
        dotPosition + 2 >= enteredEmail.length || enteredEmail.trim() == "") {
        alert("Пожалуйста, введите корректный e-mail!");
        return false;
    } else if (firstPass.length < 6) {
        alert("Пароль должен содержать как минимум 6 символов.");
        return false;
    } else if (firstPass.trim() == "" ) {
        alert("Пожалуйста, введите корректный пароль.");
        return false;
    } else {
        return true;
    }
}