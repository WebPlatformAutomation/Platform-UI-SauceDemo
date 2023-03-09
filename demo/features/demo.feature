Feature: Platform-UI Automation Demo

  @id-1
  Scenario: Log into SauceDemo
    Given I sign into Demo
     Then I should see the header and footer