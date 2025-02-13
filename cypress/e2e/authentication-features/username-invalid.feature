Feature: Invalid username validation (in progress)
    
  Scenario: User enters a invalid username

    Given I am on the new account project representative page
    When the user enters "Invalid_user_name..123" in the username field    
    Then the username validation message should display "⚠️ Invalid character present."

  Scenario: The user enters a username longer than 20 characters 
  (cybersecurity limitations on how much data can be pushed to the system)

    Given I am on the new account project representative page
    When the user enters "Too_long_user_name_123456789" in the username field    
    Then the username validation message should display "⚠️ The username is too long."