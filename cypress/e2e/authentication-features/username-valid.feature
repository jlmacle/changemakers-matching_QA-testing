Feature: Valid username validation (in progress)

  Scenario: User enters a valid username

    Given I am on the new account project representative page
    When the user enters "validuser_123" in the username field    
    Then the username validation message should display "✅ The username is valid."
    