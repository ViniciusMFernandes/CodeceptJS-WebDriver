Feature('login');

Scenario('Login com sucesso',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'viniawp@gmail.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 5)
    
}).tag('@sucesso')

Scenario('Tentando logar digitando apenas o e-mail',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login')
    I.fillField('#user', 'viniawp@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.', 5)

}).tag('apenas e-mail')

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 5)

}).tag('sem e-mail nem senha')

Scenario('Tentando logar digitando apenas a senha',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 5)

}).tag('apenas senha')
