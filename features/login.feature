Feature: Search for a laptop on Tokopedia

  Scenario: Search for "laptop asus" and open the detail page
    Given I am on the Tokopedia homepage
    When I search for "laptop asus"
    And I click on the first product in the search results
    Then I should be on the detail page for that product
