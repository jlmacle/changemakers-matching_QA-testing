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
  Then I should arrive at the page title

  When I press the Tab key to navigate to the next focusable element - 4
  Then I should arrive at the testimonies

  When I press the Tab key to navigate to the next focusable element - 5
  Then I should arrive at the "About" link

  When I press the Tab key to navigate to the next focusable element - 6
  Then I should arrive at the "Privacy" link
