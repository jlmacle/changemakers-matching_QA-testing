Feature: Validation of absence of dead links (in progress)

  Scenario: FRom the hom page, the user clicks on the "About" link, and goes to the "About" page.

    Given I am on the home page
    When the user clicks on the "About" link    
    Then the user arrives to a page with the title "About us"