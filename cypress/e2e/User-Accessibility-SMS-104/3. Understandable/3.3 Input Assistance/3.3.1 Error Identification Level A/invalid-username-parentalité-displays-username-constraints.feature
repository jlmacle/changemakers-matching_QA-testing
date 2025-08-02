Feature: Username validation: invalid username: invalid character: é
	Scenario: The user enters invalid username "parentalité" on viewport size is <viewport>
		Given I am on the new account project representative page
		And the viewport size is <viewport>
		When the user enters "parentalité" in the username field
		Then the username validation message should display
		  """
		⚠️ Invalid character present. <br>The username can only contain lowercase letters (without accents), numbers and underscores.
		  """

@desktop
Examples:
		|	viewport	|
		|	1920×1080	|
		|	1366×768	|
		|	1536×864	|
		|	1280×720	|

@mobile
Examples:
		|	viewport	|
		|	360×800	|
		|	390×844	|
		|	393×873	|
		|	412×915	|

@tablet
Examples:
		|	viewport	|
		|	768×1024	|
		|	1280×800	|
		|	800×1280	|
		|	820×1180	|

