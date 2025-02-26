Feature: Tab Navigation 


# Tab Navigation on the Home Page
# *******************************

Scenario: Tab Navigation on the Home Page

  As a user,
  I want to navigate through the home page elements using the Tab key,
  So that I can confirm that the correct elements receive focus in the expected order.

  #Steps
  Given I am on the home page
  When I press the Tab key to navigate to the next focusable element - 1
  Then I should arrive at the "Skip To New Content" feature

  When I press the Tab key to navigate to the next focusable element - 2
  Then I should arrive at the "new account or login" button

  When I press the Tab key to navigate to the next focusable element - 3
  Then I should arrive at the page title - home page

  When I press the Tab key to navigate to the next focusable element - 4
  Then I should arrive at the testimonies

  When I press the Tab key to navigate to the next focusable element - 5
  Then I should arrive at the "About" link

  When I press the Tab key to navigate to the next focusable element - 6
  Then I should arrive at the "Privacy" link


# **********************************************************************************
# **********************************************************************************

# Tab Navigation on the Representative Page
# *****************************************

Scenario: Tab Navigation on the Representative Page
  I want to navigate through the representative page elements using the Tab key,
  So that I can confirm that the correct elements receive focus in the expected order.

  #Steps
  Given I am on the representative page
  When  I press the Tab key - 1
  Then  I should arrive at the page title - representative page

  When  I press the Tab key - 2
  Then  I should arrive at the username field

  When  I press the Tab key - 3
  Then  I should arrive at the password field

  When I press the Tab key to navigate to the next focusable element - 4 - representative page
  Then I should arrive at the "About" link - representative page

  When I press the Tab key to navigate to the next focusable element - 5 - representative page
  Then I should arrive at the "Privacy" link - representative page
  


