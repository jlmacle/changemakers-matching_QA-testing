Feature: Tab Navigation: Home page

Scenario: Tab Navigation on the Home Page

  As a user,
  I want to navigate through the home page elements using the Tab key,
  So that I can confirm that the correct elements receive focus in the expected order.

  Given I am on the home page

  When  I press the Tab key to navigate to the next focusable element
  Then  I should arrive at the "Skip To New Content" feature

  When I press the Tab key to navigate to the next focusable element
  Then I should arrive at the "New account - Login" button

  When I press the Tab key to navigate to the next focusable element
  Then I should arrive at the page title - home page

  When I press the Tab key to navigate to the next focusable element
  Then I should arrive at the testimonies

  When I press the Tab key to navigate to the next focusable element
  Then I should arrive at the "About" link

  When I press the Tab key to navigate to the next focusable element
  Then I should arrive at the "Privacy" link

