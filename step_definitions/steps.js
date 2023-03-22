const { I } = inject();

Given('I am on the login screen', () => {
  I.amOnPage('/')
  I.waitForText('Login', 10)
  I.click('Login')
});

When('I click on Sign in button', () => {
  I.click('#btnLogin')
});

When('I fill the email field with {string}', (email) => {
  I.waitForText('Login', 10)
  I.fillField('#user', email)  
});

When('when I fill the password field with {string}', (password) => {
  I.fillField('#password', password)
});

When('I see {string}', (message) => {
  I.see(message)
});


