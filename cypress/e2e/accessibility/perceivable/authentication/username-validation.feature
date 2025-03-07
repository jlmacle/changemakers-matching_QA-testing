Feature: Username validation (in progress)

  Scenario: The user enters a valid username

    Given I am on the new account project representative page
    When  The user enters "Valid_user_name_123" in the username field    
    Then  The username validation message should display "✅ The username is valid."

  Scenario: The user enters an invalid username

    Given I am on the new account project representative page
    When  The user enters "abc" in the username field    
    Then  The username validation message should display "⚠️ The username must be at least 4 characters long."
    
  
  