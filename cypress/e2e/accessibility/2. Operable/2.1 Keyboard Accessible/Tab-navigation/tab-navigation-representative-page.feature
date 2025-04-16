Feature: Tab Navigation: Representative page 

Scenario: Tab Navigation on the Representative Page

  As a user,
  I want to navigate through the representative page elements using the Tab key,
  So that I can confirm that the correct elements receive focus in the expected order.

  Given I am on the representative page
  
  When  I press the Tab key to navigate to the next focusable element
  Then  I should arrive at the page title

  When  I press the Tab key to navigate to the next focusable element
  Then  I should arrive at the username field

  When  I press the Tab key to navigate to the next focusable element
  Then  I should arrive at the password field

  When I press the Tab key to navigate to the next focusable element
  Then I should arrive at the "About" link

  When I press the Tab key to navigate to the next focusable element
  Then I should arrive at the "Privacy" link
  


