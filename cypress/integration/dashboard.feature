@regression
Feature: Dashboard Feature

  Background:
    Given user is on login page
    When user enters username and password
    And clicks on login button



  Scenario: Open Dashboard
    Given user is on dashboard page
    And click on start accepting orders
    Then welcome to store accordion should open
