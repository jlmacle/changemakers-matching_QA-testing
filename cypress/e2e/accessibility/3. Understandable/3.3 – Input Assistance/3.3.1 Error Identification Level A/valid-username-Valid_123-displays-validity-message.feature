Feature: Username validation: valid username: Valid_123
	Scenario: The user enters valid username "Valid_123" on viewport size <viewport>
		Given I am on the new account project representative page
		And The viewport size is <viewport>
		When The user enters "Valid_123" in the username field
		Then The username validation message should display "✅ The username is valid."

	Examples:
    	|viewport|       
    	|1920×1080|
    	|1366×768|   
      