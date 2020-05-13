describe("Login", function() {
   
    it("should return false when username is not present", function() {
        expect(validateLogin(' ', 'abc')).toEqual(false);
    });

    it("should return false when password is not present", function() {
        expect(validateLogin('abc', '')).toEqual(false);
    });

    it("should return false when both username and password are not present", function() {
        expect(validateLogin('', ' ')).toEqual(false);
    });

    it("should return false when username and password do not match", function() {
        expect(validateLogin('abc', 'xyz')).toEqual(false);
    });

    it("should return true when username and password match", function() {
        var spy = spyOn(redirectToDashboardPage, "redirect");
        validateLogin("admin", "admin");
        expect(spy).toHaveBeenCalled();
    });

    it("toggleErrorMessage method should toggle the error messages", function() {
        const div = document.createElement('div');
        div.innerHTML= `<span id="error-msg" style="color:red;display:none;">Please enter the required fields</span>
        <span id="invalid-msg" style="color:red;display:none;">Invalid username or password</span>`;
        document.body.appendChild(div);
        toggleErrorMessage("block", "none");
        expect(document.getElementById("error-msg").style.display).toEqual("block");
        document.body.removeChild(div)
    });
  
});