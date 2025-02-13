Feature: Invalid username validation (in progress)
    
  Scenario: User enters a invalid username

    Given I am on the new account project representative page
    When the user enters "Invalid_user_name..123" in the username field    
    Then the username validation message should display "⚠️ Invalid character present."

  