window.showAlert = function(message) {
    alert(message);
}

//window.emailRegistration = function(message) {
//    const result = prompt(message);
//    if (result === '' || result === null)
//        return 'Please provide an email';

//    const returnMessage = 'Hi ' + result.split('@')[0] + ' your email: ' + result + ' has been accepted.';
//    return returnMessage;
//}

window.getCalData = function(promptText, defaultValue) {
    return prompt(promptText, defaultValue);
};
