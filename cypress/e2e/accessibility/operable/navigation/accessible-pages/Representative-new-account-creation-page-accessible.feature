  Scenario: From the home page, the user clicks on the "New account and Login" zone, 
  opens the modal window, clicks on the "Project representative" link, 
  and arrives on the representative "New account creation" page.

    Given I am on the home page
    When the user clicks on the "New account and Login" zone   
    Then the user opens the modal window
    When the user clicks on the "Project representative" link
    Then the user arrives on the representative "New account creation" page