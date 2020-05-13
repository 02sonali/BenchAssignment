var validateLogin = function(username, password) {
    let returnValue = true;
    if(username === "" || password ==="") {
        toggleErrorMessage("block", "none");
        returnValue = false;
    } else if(username !== "admin" || password !=="admin"){
        toggleErrorMessage("none", "block");
        returnValue = false;
    } else {
        toggleErrorMessage("none", "none");
        redirectToDashboardPage.redirect();
    }
    return returnValue;
}

var toggleErrorMessage = function(errorMsgVal, invalidMsgVal) {
    if(document.getElementById("error-msg") &&  document.getElementById("invalid-msg")) {
        document.getElementById("error-msg").style.display= errorMsgVal; 
        document.getElementById("invalid-msg").style.display= invalidMsgVal;
    }
}

var redirectToDashboardPage = {
    redirect : function() {
        let currentLocation = window.location.href;
        let locationArr = currentLocation.split('/');
        locationArr.pop();
        let newLocation = locationArr.join('/') + '/dashboard.html';
        window.location.href = newLocation; 
    }
}