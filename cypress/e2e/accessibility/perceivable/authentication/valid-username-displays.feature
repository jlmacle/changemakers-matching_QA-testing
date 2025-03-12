Feature: Username validation: valid  (in progress)

  Scenario: The user enters valid username "Valid_123" on viewport size 1920×1080

    Given I am on the new account project representative page
    And   The viewport size is 1920×1080
    When  The user enters "Valid_123" in the username field    
    Then  The username validation message should display "✅ The username is valid."

  
  