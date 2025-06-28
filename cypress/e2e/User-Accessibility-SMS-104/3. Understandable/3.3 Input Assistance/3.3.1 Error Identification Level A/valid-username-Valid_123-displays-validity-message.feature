Feature: Username validation: valid username: Valid_123
	Scenario: The user enters valid username "Valid_123" on viewport size is <viewport>
		Given I am on the new account project representative page
		And the viewport size is <viewport>
		When the user enters "Valid_123" in the username field
		Then the username validation message should display "✅ The username is valid."


Examples:
		|	viewport	|
		# Desktop
		|	1920×1080	|
		|	1366×768	|
		|	1536×864	|
		|	1280×720	|
		# Mobile
		|	360×800	|
		|	390×844	|
		|	393×873	|
		|	412×915	|
		# Tablet
		|	768×1024	|
		|	1280×800	|
		|	800×1280	|
		|	820×1180	|
