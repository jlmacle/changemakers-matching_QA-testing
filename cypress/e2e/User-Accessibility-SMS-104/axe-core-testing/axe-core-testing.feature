Feature: Axe core testing for new account project representative page

  Background:
	Given I am on the home page

  Scenario: The axe-core testing is done with a viewport size of <viewport>
	Given the viewport size is <viewport>
	When the axe-core testing is performed
	Then the axe-core testing should pass without any violations

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

