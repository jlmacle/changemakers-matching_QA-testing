Feature: Username validation: invalid username: abc
	Scenario: The user enters invalid username "abc" on viewport size 1920×1080
		Given	I am on the new account project representative page
		And		The viewport size is 1920×1080
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Scenario: The user enters invalid username "abc" on viewport size 1366×768
		Given	I am on the new account project representative page
		And		The viewport size is 1366×768
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Scenario: The user enters invalid username "abc" on viewport size 1536×864
		Given	I am on the new account project representative page
		And		The viewport size is 1536×864
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Scenario: The user enters invalid username "abc" on viewport size 1280×720
		Given	I am on the new account project representative page
		And		The viewport size is 1280×720
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Scenario: The user enters invalid username "abc" on viewport size 360×800
		Given	I am on the new account project representative page
		And		The viewport size is 360×800
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Scenario: The user enters invalid username "abc" on viewport size 390×844
		Given	I am on the new account project representative page
		And		The viewport size is 390×844
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Scenario: The user enters invalid username "abc" on viewport size 393×873
		Given	I am on the new account project representative page
		And		The viewport size is 393×873
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Scenario: The user enters invalid username "abc" on viewport size 412×915
		Given	I am on the new account project representative page
		And		The viewport size is 412×915
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Scenario: The user enters invalid username "abc" on viewport size 768×1024
		Given	I am on the new account project representative page
		And		The viewport size is 768×1024
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Scenario: The user enters invalid username "abc" on viewport size 1280×800
		Given	I am on the new account project representative page
		And		The viewport size is 1280×800
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Scenario: The user enters invalid username "abc" on viewport size 800×1280
		Given	I am on the new account project representative page
		And		The viewport size is 800×1280
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


	Scenario: The user enters invalid username "abc" on viewport size 820×1180
		Given	I am on the new account project representative page
		And		The viewport size is 820×1180
		When	The user enters "abc" in the username field
		Then	The username validation message should display "⚠️ The username must between 4 and 10 characters long."


