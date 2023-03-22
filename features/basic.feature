Feature: Login
  I as an user
  I want to login to the application
  To do orders

  Scenario: Login with success
    Given I am on the login screen
    When I fill the email field with "email@gmail.com"
    And when I fill the password field with "123456"
    And I click on Sign in button
    When I see "Login realizado"

    Scenario: Login with wrong email
    Given I am on the login screen
    When I fill the email field with "email"
    And when I fill the password field with "123456"
    And I click on Sign in button
    When I see "E-mail inválido."

    Scenario: Login with wrong password
    Given I am on the login screen
    When I fill the email field with "email@gmail.com"
    And when I fill the password field with "12345"
    And I click on Sign in button
    When I see "Senha inválida."