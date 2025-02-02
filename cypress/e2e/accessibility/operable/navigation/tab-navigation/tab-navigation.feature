Feature: Tab Navigation on the Home Page

  As a user,
  I want to navigate through the home page elements using the Tab key,
  So that I can confirm that the correct elements receive focus in the expected order.

  Scenario: User tabs through elements on the home page
    Given I am on the home page
    And I focus on the element with id "#newAccountOrLogin-button"
    
    When I press the Tab key to navigate to the next focusable element
    Then I should find that the focused element has the id "homePageTitle-link"

    When I press the Tab key a 2nd time
    Then I should arrive at a first element with the id "testimonies"

    When I press the Tab key a 3rd time
    Then I should arrive at a second element with the id "about-link"

    When I press the Tab key a 4th time
    Then I should arrive at a third element with the id "privacy-link"
