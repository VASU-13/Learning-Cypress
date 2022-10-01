
Feature: Login functionality

  Scenario: Test Login With Valid Credentials
    Given user is on login page
    When user enters username and password
    And clicks on login button
    Then user is navigated to the homepage
