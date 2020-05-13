describe('Protractor Tests', function() {
    browser.waitForAngularEnabled(false);
    var usernameInput = element(by.id('username'));
    var passwordInput = element(by.id('password'));
    var loginButton = element(by.id('login-button'));
    beforeEach(function() {
      browser.get('http://192.168.0.103:8080/');
    });
  
    it('should have a Login heading', function() {
      var EC = protractor.ExpectedConditions;
      browser.wait(EC.textToBePresentInElement($('#heading'), 'Login'), 2000);
    });

    it('should redirect to dashboard screen on login', function() {
       usernameInput.sendKeys('admin');
       passwordInput.sendKeys('admin');
       loginButton.click();
       browser.wait(protractor.ExpectedConditions.urlContains('dashboard'), 2000);
    });

    it('should display error when username or password is empty', function() {
        usernameInput.sendKeys('');
        passwordInput.sendKeys('');
        loginButton.click();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.textToBePresentInElement($('#error-msg'), 'Please enter the required fields'), 2000);
    });

    it('should display error when username or password do not maatch', function() {
      usernameInput.sendKeys('abc');
      passwordInput.sendKeys('xyz');
      loginButton.click();
      var EC = protractor.ExpectedConditions;
      browser.wait(EC.textToBePresentInElement($('#invalid-msg'), 'Invalid username or password'), 2000);
  });
   
});