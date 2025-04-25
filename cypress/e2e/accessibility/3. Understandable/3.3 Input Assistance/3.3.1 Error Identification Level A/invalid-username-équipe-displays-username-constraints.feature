Feature: Username validation: invalid username: invalid character: équipe
	Scenario: The user enters invalid username "équipe" on viewport size is <viewport>
		Given I am on the new account project representative page
		And the viewport size is <viewport>
		When the user enters "équipe" in the username field
		Then the username validation message should display
		  """
		⚠️ Invalid character present. <br>The username can only contain lowercase letters (without accents), numbers and underscores.
		  """

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
