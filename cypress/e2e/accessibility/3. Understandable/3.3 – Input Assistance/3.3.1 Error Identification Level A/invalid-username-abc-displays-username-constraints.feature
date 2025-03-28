Feature: Username validation: invalid username: abc
	Scenario: The user enters invalid username "abc" on viewport size <viewport>
		Given I am on the new account project representative page
		And The viewport size is <viewport>
		When The user enters "abc" in the username field
		Then The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Examples: 
		|viewport|
		|1920×1080|
		