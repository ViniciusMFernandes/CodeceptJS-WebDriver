const { I } = inject();

Given('I am on the register screen', () => {
    I.amOnPage('/')
    I.waitForText('Cadastro', 10)
    I.click('Cadastro')
    I.waitForText('Cadastro de usuário', 10)
  });

  When('I click on Register button', () => {
    I.click('#btnRegister')
  });  
  
  When('I fill the name field with {string}', (name) => {
    I.fillField('#user', name)
  });
  
  When('when I fill the email field with {string}', (email) => {
    I.fillField('#email', email)
  });

  When('when I fill the password field with {string}', (password) => {
    I.fillField('#password', password)
  });

  When('I see {string}', (message) => {
    I.see(message)
  });
  
