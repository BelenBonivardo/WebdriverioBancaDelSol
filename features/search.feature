Feature: Search products on the search bar 
@sanity
Scenario Outline: As a user, I want to search products successfully 

   Given I am on the login page
   When I search the product <product> 
   Then I print on console total results 


    Examples:
      |product   |                       
      |Pilas     | 
      |Colchones | 


Scenario Outline: As a user, I want to search clothing products successfully 

   Given I am on the login page
   When I search the product <product> 
   Then I print on console total results 


    Examples:
      |product   |                       
      |Zapatillas| 
      |Vestidos  |

              

