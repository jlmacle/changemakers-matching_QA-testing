Feature: Username validation: invalid username: too long: 01234567890
	Scenario: The user enters invalid username "01234567890" on viewport size is <viewport>
		Given I am on the new account project representative page
		And The viewport size is <viewport>
		When The user enters "01234567890" in the username field
		Then The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Examples: 
		|	viewport	|
		|	1920×1080	|
		|	1366×768	|
		|	1536×864	|
		|	1280×720	|
		|	360×800		|
		|	390×844		|
		|	393×873		|
		|	412×915		|
		|	768×1024	|
		|	1280×800	|
		|	800×1280	|
		|	820×1180	|