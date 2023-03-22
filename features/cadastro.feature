Feature: Register
  I as an user
  I want to register to the application
  To do orders

  Scenario: Register with no information
    Given I am on the register screen
    When I click on Register button
    Then I see "O campo nome deve ser prenchido"

  Scenario: Register with success
    Given I am on the register screen
    When I fill the name field with "Vinicius"
    And when I fill the email field with "email@gmail.com"
    And when I fill the password field with "123456"
    And I click on Register button
    Then I see "Cadastro realizado!"