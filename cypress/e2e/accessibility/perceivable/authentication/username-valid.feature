Feature: Valid username validation (in progress)

  Scenario: The user enters a valid username

    Given I am on the new account project representative page
    When  The user enters "Valid_user_name_123" in the username field    
    Then  The username validation message should display "✅ The username is valid."
    
  
  