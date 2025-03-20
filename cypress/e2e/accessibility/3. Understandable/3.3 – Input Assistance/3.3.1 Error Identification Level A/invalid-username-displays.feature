Feature: Username validation: invalid (in progress)

  Scenario: The user enters invalid username "abc" on viewport size 1920×1080

    Given I am on the new account project representative page
    And   The viewport size is 1920×1080
    When  The user enters "abc" in the username field    
    Then  The username validation message should display "⚠️ The username must between 4 and 10 characters long."
    
  
  