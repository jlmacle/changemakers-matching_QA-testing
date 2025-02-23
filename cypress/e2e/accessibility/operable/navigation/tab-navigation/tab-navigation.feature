Feature: Tab Navigation 

Scenario: Tab Navigation on the Home Page

  As a user,
  I want to navigate through the home page elements using the Tab key,
  So that I can confirm that the correct elements receive focus in the expected order.

  #Steps
  Given I am on the home page
  When a. I press the Tab key twice
  Then I should arrive at the "new account or login" button
  
  When b. I press the Tab key to navigate to the next focusable element
  Then I should arrive at the page title

  When c. I press the Tab key to navigate to the next focusable element
  Then I should arrive at the testimonies

  When d. I press the Tab key to navigate to the next focusable element
  Then I should arrive at the "About" link

  When e. I press the Tab key to navigate to the next focusable element
  Then I should arrive at the "Privacy" link


