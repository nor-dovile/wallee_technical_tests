# Test Cases:

## Navigation of the pages

Test Case ID: TC-NAVIGATE-01
Test Case Title: Verify Home Page Navigation

Description: Ensure users can navigate to the home page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Visit different pages using the navigation menu.(e.g., "Checkout", "Cart", "My Account" pages)
    3. Click on the "Demo Shop" link in the navigation menu.

Expected Result: The user is redirected to the home page, and the home page loads correctly.



Test Case ID: TC-NAVIGATE-02
Test Case Title: Verify Product Page Navigation

Description: Ensure users can navigate to a product page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on any product link from the homepage. (e.g., Shirts)

Expected Result: The user is redirected to the respective product page, and the product details are displayed correctly.



Test Case ID: TC-NAVIGATE-03
Test Case Title: Verify Category Page Navigation

Description: Ensure users can navigate to a category page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on a product link from the homepage (e.g., Laptops) 
    3. Click on the category link in the product's preview page. (e.g., Uncategorized)

Expected Result: The user is redirected to the category page, and the products in that category are displayed correctly.



Test Case ID: TC-NAVIGATE-04
Test Case Title: Verify Cart Page Navigation

Description: Ensure users can navigate to the cart page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "Cart" icon on the top right of the page or click "Cart" link in the navigation menu.

Expected Result: The user is redirected to the cart page, and the contents of the cart are displayed correctly.



Test Case ID: TC-NAVIGATE-04
Test Case Title: Verify Cart Page Navigation from the cart icon side view

Description: Ensure users can navigate to the cart page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "Cart" icon on the top right of the page or click "Cart" link in the navigation menu.

Expected Result: The user is redirected to the cart page, and the contents of the cart are displayed correctly.



Test Case ID: TC-NAVIGATE-05
Test Case Title: Verify Checkout Page Navigation

Description: Ensure users can navigate to the checkout page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Add a product from the item's list in the home page to the cart.
    3. Click on the "Proceed to Checkout" button.

Expected Result: The user is redirected to the checkout page, and the checkout process can be initiated.



Test Case ID: TC-NAVIGATE-06
Test Case Title: Verify My Account Page Navigation

Description: Ensure users can navigate to the My Account page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "My Account" link in the navigation menu.

Expected Result: The user is redirected to the My Account page, and login option is displayed.



Test Case ID: TC-NAVIGATE-07
Test Case Title: Verify Shop Menu Navigation

Description: Ensure the "Shop" menu link navigates to the main shop page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "Shop" link in the navigation menu.

Expected Result: The user is redirected to the shop page, displaying all products without errors.



Test Case ID: TC-NAVIGATE-08
Test Case Title: Verify Footer Link Navigation

Description: Ensure users can navigate using links in the footer.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Visit any other page by using the links in the navigation menu (e.g., "My Account" page).
    3. Scroll down till the bottom of the page.
    4. Click on a link "Demo Shop" in the footer.

Expected Result: The user is redirected to the homepage.



Test Case ID: TC-NAVIGATE-09
Test Case Title: Verify Breadcrumb Navigation

Description: Ensure users can use breadcrumb links to navigate.
Precondition: - 
Test Data: - 
Test Steps:
    1. Navigate to a random item's page on the main menu.
    2. Click on the breadcrumb link (e.g., Home > Category > Product).

Expected Result: The user is redirected to the respective breadcrumb page (e.g., category or home page).



Test Case ID: TC-NAVIGATE-10
Test Case Title: Verify External Link Navigation

Description: Ensure users can navigate to external links from the website.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Scroll down the page till the very end.
    3. Click on an external link "WordPress" in the footer.
   
Expected Result: The user is redirected to the external website (https://wordpress.org/), and the external site loads correctly.



Test Case ID: TC-NAVIGATE-11
Test Case Title: Verify Navigation Menu Consistency

Description: Ensure the navigation menu is consistent across all pages.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Navigate to various pages (e.g., Product, Cart, Checkout).

Expected Result: The navigation menu remains consistent and functional on all pages.


## Adding products to the cart

Test Case ID: TC-CART-01
Test Case Title: Add Single Product to Cart

Description: Ensure a single product can be added to the cart.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Select a product from the homepage or "Shop" page in the navigation menu.
    3. Click on the "Add to cart" button.

Expected Result: The product is added to the cart, and the cart icon/indicator updates to show 1 item.



Test Case ID: TC-CART-02
Test Case Title: Add Multiple Products to Cart

Description: Ensure multiple products can be added to the cart.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Select a product and click "Add to cart."
    3. Go back to the home page by clicking "Demo Shop" or "Shop" links in the navigation menu.
    4. Select a different product and click "Add to cart."
    5. 

Expected Result: Both products are added to the cart, and the cart icon/indicator updates to show 2 items.



Test Case ID: TC-CART-05
Test Case Title: Add Same Product Multiple Times

Description: Ensure the same product can be added multiple times, and the cart updates correctly.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Select a product and click "Add to cart."
    3. Navigate back from the cart page to the homepage by clicking "Demo Shop".
    4. Click "Add to Cart" for the same product again.

Expected Result: The product's quantity increases in the cart, and the cart icon/indicator updates to show the correct number of items.



Test Case ID: TC-CART-03
Test Case Title: Update Product Quantity in Cart

Description: Ensure the quantity of a product can be updated in the cart.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Select and add a product by clicking "Add to cart."
    3. Navigate to the cart page by clicking the "cart" link in the navigation menu.
    4. Change the quantity of the product in the cart by clicking "-" and "+" symbols near the product.
    5. Observe the quantity and prices in total per product and general Total and Subtotal in the Cart page.

Expected Result: The quantity and total price per product is updated accordingly (increasing/decreasing), and the Total and Subtotal price updates accordingly as well (increasing/decreasing).



Test Case ID: TC-CART-04
Test Case Title: Remove Product from Cart

Description: Ensure a product can be removed from the cart.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Select and add a product by clicking "Add to cart."
    3. Navigate to "Shop" page again
    2. Select and add a different product by clicking "Add to cart."
    3. Navigate to the cart page.
    4. Click the "Remove item" link for one product.

Expected Result: The product is removed from the cart, and the cart updates to show the correct number of remaining items.



Test Case ID: TC-CART-08
Test Case Title: Verify Cart Empty State on the "Cart" page

Description: Ensure the cart displays correctly when empty.
Precondition: - 
Test Data: - 
Test Steps:
    1. Navigate to the cart page.
    2. Remove all products from the cart by clicking "Revome item" under each of the product.

 Expected Result: The cart displays a message "Your cart is currently empty!" indicating it is empty.



Test Case ID: TC-CART-09
Test Case Title: Verify Cart Empty State on the cart icon side view

Description: Ensure the cart displays correctly when empty.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Select and add a product by clicking "Add to cart."
    3. Navigate to the "Shop" page.
    4. Click on the cart icon to expand the cart side view.
    5. Remove all products from the cart by clicking "Revome item" under each of the product.
    6. Click on the "Start Shoping" button

 Expexted Result: The cart displays a message "Your cart is currently empty!" indicating it is empty, and when clickin on the "Start Shoping" button the user is redirected to the homepage.




Test Case ID: TC-CART-06
Test Case Title: Cart Icon/Indicator Updates Correctly

Description: Ensure the cart icon/indicator updates correctly with each addition.
Precondition: - 
Test Data: - 
Test Steps:
    1. Add a product to the cart.
    2. Verify the cart icon/indicator updates.
    3. Add another product and verify the update again.

Expected Result: The cart icon/indicator correctly shows the number of items in the cart.



Test Case ID: TC-CART-07
Test Case Title: Cart Persistence After Page Reload

Description: Ensure the cart contents persist after reloading the page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Add a product to the cart, by clicking "Add to Cart".
    2. Reload the page.

Expected Result: The cart retains the product added before the page reload.



Test Case ID: TC-CART-09
Test Case Title: Verify Cart Page Layout and Functionality

Description: Ensure the cart page displays correctly and all functionalities (update, remove, proceed to checkout) work as expected.
Precondition: - 
Test Data: - 
Test Steps:
    1. Navigate to the cart page.
    2. Check the layout and elements (product list, quantities, prices, total).
    3. Test updating quantities, removing items, and clicking "Proceed to Checkout."

Expected Result: The cart page layout is correct, and all functionalities work as expected.


## Checkout processes

Test Case ID: TC-CHECKOUT-01
Test Case Title: Successful Checkout with Guest User

Description: Ensure a guest user can complete the checkout process successfully.
Precondition: The user should have at least one item in the cart.
Test Data: - 
Test Steps:
    1. Proceed to the checkout page by clicking "Proceed to Checkout" button in the cart page.
    2. Enter all required billing and shipping information.
    3. Select a payment method (e.g., Credit/Debit card).
    4. Click "Place Order" button.
    5. Complete the payment.

Expected Result: The checkout is completed successfully, an order confirmation page is displayed, and the user receives an order confirmation email.



Test Case ID: TC-CHECKOUT-02
Test Case Title: Successful Checkout with Registered User

Description: Ensure a registered user can complete the checkout process successfully.
Precondition: - 
Test Data: Username, password
Test Steps:
    1. Log in to the user account.
    2. Add a product to the cart.
    3. Proceed to the checkout page.
    4. Verify that billing and shipping information is pre-filled.
    5. Select a payment method.
    6. Complete the payment.

Expected Result: The checkout is completed successfully, an order confirmation page is displayed, and the user receives an order confirmation email.



Test Case ID: TC-CHECKOUT-03
Test Case Title: Checkout with Different Billing and Shipping Addresses

Description: Ensure the checkout process works correctly when using different billing and shipping addresses.
Precondition: - 
Test Data: - 
Test Steps:
    1. Add a product to the cart.
    2. Proceed to the checkout page.
    3. Enter a billing address.
    4. Enter a different shipping address.
    5. Select a payment method.
    6. Complete the payment.

Expected Result: The checkout is completed successfully, an order confirmation page is displayed, and the user receives an order confirmation email with the correct billing and shipping addresses.



Test Case ID: TC-CHECKOUT-04
Test Case Title: Checkout with Multiple Products

Description: Ensure the checkout process works correctly when multiple products are in the cart.
Precondition: - 
Test Data: - 
Test Steps:
    1. Add multiple products to the cart.
    2. Proceed to the checkout page.
    3. Enter all required billing and shipping information.
    4. Select a payment method.
    5. Complete the payment.

Expected Result: The checkout is completed successfully, an order confirmation page is displayed, and the user receives an order confirmation email with details of all products.



Test Case ID: TC-CHECKOUT-05
Test Case Title: Checkout with Coupon Code

Description: Ensure the checkout process works correctly when a coupon code is applied.
Precondition: User has to know exact cupon's code to use it.
Test Data: - 
Test Steps:
    1. Add a product to the cart.
    2. Proceed to the checkout page.
    3. Enter a valid coupon code.
    4. Verify the discount is applied.
    5. Enter all required billing and shipping information.
    6. Select a payment method.
    7. Complete the payment.

Expected Result: The checkout is completed successfully with the discount applied, an order confirmation page is displayed, and the user receives an order confirmation email with the discounted amount.



Test Case ID: TC-CHECKOUT-06
Test Case Title: Checkout with Invalid Payment Method

Description: Ensure appropriate error handling when an invalid payment method is used.
Precondition: - 
Test Data: - 
Test Steps:
    1. Add a product to the cart.
    2. Proceed to the checkout page.
    3. Enter all required billing and shipping information.
    4. Select an invalid payment method (e.g., wrong IBAN).
    5. Attempt to complete the payment.

Expected Result: An appropriate error message is displayed like" "The provided IBAN is not accepted. ", and the user is not able to complete the checkout.




Test Case ID: TC-CHECKOUT-07
Test Case Title: Checkout after Canceled Payment

Description: Ensure the user is redirected to the Checkout page after canceled payment.
Precondition: - User has a placed order with required fields filled up in the Checkout page.
Test Data: - 
Test Steps:
    1. Cancel the payment.
    2. .

Expected Result: The user is able to cancel the payment, he is redirected to the Checkout page with his order information and a message: "The payment is canceled as requested" is displayed.



Test Case ID: TC-CHECKOUT-07
Test Case Title: Initiate new Payment after Canceled Payment 

Description: Ensure the user is redirected to the Checkout page after canceled payment with opportunity to continue payment for the same order again.
Precondition: - User has a placed order with required fields filled up in the Checkout page.
Test Data: - 
Test Steps:
    1. Cancel the payment.
    2. Select payment method (e.g., Direct Debit (SEPA)).
    3. Agree with the privacy policy.
    4. Click on "PAY FOR ORDER" button.

Expected Result: After canceling the order, he user is redirected to the Checkout page with his order information, the message appears: "The payment is canceled as requested". 
The user is able to choose payment methods again and pay for the order.



Test Case ID: TC-CHECKOUT-07
Test Case Title: Verify payment failing if terms and conditions are not accepted

Description: Ensure the error message appears: Please read and accept the terms and conditions to proceed with your order" if the user is not accepting terms and conditions of the website.
Precondition: - User has a placed order with required fields filled up in the Checkout page.
Test Data: - 
Test Steps:
    1. Cancel the payment.
    2. Select payment method (e.g., Direct Debit (SEPA)).
    3. Don't agree with the privacy policy.
    4. Click on "PAY FOR ORDER" button.

Expected Result: After canceling the order, he user is redirected to the Checkout page with his order information, the message appears: "The payment is canceled as requested". 
After not agreeing with website terms and conditions, an appropriate error message is displayed: Please read and accept the terms and conditions to proceed with your order", and the user is not able to complete the checkout.



Test Case ID: TC-CHECKOUT-07
Test Case Title: Checkout with Required Fields Missing

Description: Ensure appropriate error handling when required fields are missing.
Precondition: - 
Test Data: - 
Test Steps:
    1. Add a product to the cart.
    2. Proceed to the checkout page.
    3. Attempt to complete the checkout without filling in all required fields.

Expected Result: Appropriate error messages are displayed for missing fields, and the user is not able to complete the checkout until all required fields are filled.



Test Case ID: TC-CHECKOUT-08
Test Case Title: Verify Order Confirmation Email

Description: Ensure the user receives an order confirmation email upon successful checkout.
Precondition: The user is in Chechout page and already has items in the cart.
Test Data: - 
Test Steps:
    1. Complete the checkout process as a guest or registered user.
    2. Check the email inbox used during the checkout.

Expected Result: An order confirmation email is received, containing all relevant order details (order number, items, prices, billing and shipping addresses).



Test Case ID: TC-CHECKOUT-09
Test Case Title: Verify Email Content and Format

Description: Ensure the order confirmation email content and format are correct.
Precondition: The user is in Chechout page and already has items in the cart.
Test Data: - 
Test Steps:
    1. Complete the checkout process.
    2. Check the order confirmation email.

Expected Result: The email is received and contains correct order details, is well-formatted, and includes the store's branding.



Test Case ID: TC-CHECKOUT-10
Test Case Title: Verify Persistence of Cart and Checkout Information

Description: Ensure cart and checkout information persist if the user navigates away and returns to the checkout page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Add products to the cart by clicking "Add to cart"
    2. Click "Proceed to checkout".
    3. Navigate to a different page on the site (e.g., "shop").
    4. Return to the checkout page by clicking "Checkout" in the navigation menu.

Expected Result: The items stays in the cart and any entered checkout information persist, allowing the user to complete the checkout without re-entering details.



Test Case ID: TC-CHECKOUT-11
Test Case Title: Verify New User Account 

Description: Ensure that the user can create an account on the checkout.
Precondition: - User should have at least one item in the cart.
Test Data: - 
Test Steps:
    1. Click on the "Checkout" link on the navigation menu.
    2. Select the option to create an account on the checkbox "Create an account?"
    3. Enter all required billing and shipping information.
    4. Select a payment method and click "Place Order"
    5. In additional Billing and Shipping window fill up your gender, Date of birth.
    6. Click "Pay" button.
    7. Navigate to "My Account" page.

Expected Result: The user is able to create an account after successful checkout and see all the information in his "My Account" page.



Test Case 1: Create Account During Checkout (Valid Data)

Description: Ensure a user can create an account during checkout with valid data.
Steps:
    1. Add a product to the cart.
    2. Proceed to the checkout page.
    3. Fill in the billing and shipping information.
    4. Select the option to create an account.
    5. Enter a valid email address and password.
    6. Complete the checkout process.

Expected Result: The account is created successfully, the order is placed, and the user receives an order confirmation email. The user can log in with the created account credentials.



Test Case 2: Create Account During Checkout (Invalid Email)

Description: Ensure appropriate error handling when an invalid email is used to create an account during checkout.
Steps:
    1. Add a product to the cart.
    2. Proceed to the checkout page.
    3. Fill in the billing and shipping information.
    4. Select the option to create an account.
    5. Enter an invalid email address (e.g., missing "@" or domain).
    6. Attempt to complete the checkout process.

Expected Result: An appropriate error message is displayed, and the user cannot proceed until a valid email address is entered.



Test Case 4: Create Account During Checkout (Existing Email)

Description: Ensure appropriate error handling when an email already associated with an existing account is used.
Steps:
    1. Add a product to the cart.
    2. Proceed to the checkout page.
    3. Select the option to create an account.
    4. Fill in the billing and shipping information.
    5. Enter an email address that is already associated with an existing account.
    6. Attempt to complete the checkout process by clicking "Place Order".

Expected Result: An error message is displayed: "An account is already registered with your email address. Please log in before proceeding.", indicating that the email is already in use, and the user is prompted to log in instead.



Test Case 6: Verify Account Creation Confirmation Email

Description: Ensure the user receives an account creation confirmation email upon creating an account during checkout.
Steps:
    1. Add a product to the cart.
    2. Proceed to the checkout page.
    3. Fill in the billing and shipping information.
    4. Select the option to create an account.
    5. Enter a valid email address and password.
    6. Complete the checkout process.
    7. Check the email inbox used for account creation.

Expected Result: The user receives an account creation confirmation email with details on how to log in and manage their account.



Test Case 7: Verify Account Login Post-Creation

Description: Ensure the user can log in with the newly created account credentials after checkout.
Precondition: User should have successfully created account during checkout (as described in previous test cases).
Steps:
    1. Log out if logged in.
    2. Navigate to "My Account" by clicking "My Account" link in the navigation menu.
    3. Enter the newly created account's email address and password.
    4. Attempt to log in.

Expected Result: The user can log in successfully with the created account credentials and access their account dashboard.


    

Test Case ID: TC-CHECKOUT-11
Test Case Title: Verify Order in User Account (for Registered Users)

Description: Ensure the order appears correctly in the user's account order history after a successful checkout.
Precondition: User should have an account in the system.
Test Data: - 
Test Steps:
    1. Log in to the user account.
    2. Complete the checkout process.
    3. Navigate to the "My Account" page.
    4. View the order history.

Expected Result: The new order appears in the order history with correct details.



Test Case ID: TC-CHECKOUT-12
Test Case Title: Verify Checkout Process with Different Payment Methods

Description: Ensure the checkout process works correctly with different payment methods (e.g., Invoice. Credit/Debit card, Direct Debit (SEPA)).
Precondition: - 
Test Data: - 
Test Steps:
    1. Add a product to the cart.
    2. Proceed to the checkout page.
    3. Select a specific payment method (e.g., Credit/Debit card).
    4. Complete the payment.
    5. Repeat steps 1-4 for other payment methods (e.g., Direct Debit (SEPA)).

Expected Result: The checkout is completed successfully with each payment method, an order confirmation page is displayed with order details and a success message: "Thank you. Your order has been received.", and the user receives an order confirmation email for each method.


## Sorting functionality

Test Case ID: TC-SORT-01
Test Case Title: Verify Default Sorting

Description: Ensure the default sorting option works as expected.
Precondition: There are products with known and distinct addition dates in the shop.
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by populiarity, sort by latest, sort by price: low to high, sort by price: high to low
    4. Check the default sorting option selected.

Expected Result: Products are sorted according to the default sorting criteria set by the website.



Test Case ID: TC-SORT-02
Test Case Title: Sort by Popularity

Description: Ensure products are sorted by popularity.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by populiarity, sort by latest, sort by price: low to high, sort by price: high to low
    2. Select the "Sort by popularity" option from the sorting dropdown.

Expected Result: Products are displayed in order of popularity, from the most popular to the least popular.



Test Case ID: TC-SORT-03
Test Case Title: Sort by Latest

Description: Ensure the "Sort by latest" sorting option correctly orders products by their addition date, with the newest products displayed first.
Precondition: There are products with known and distinct addition dates in the shop.
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by populiarity, sort by latest, sort by price: low to high, sort by price: high to low
    2. Select the "Sort by latest" option from the sorting dropdown.

Expected Result:
    Products are displayed in descending order of their addition date and the newest products are listed first.
    The sorting dropdown shows "Sort by latest" as the selected option.
    The order persists after a page refresh or navigation away and back to the home page.



Test Case ID: TC-SORT-04
Test Case Title: Sort by Price (Low to High)

Description: Ensure products are sorted by price in ascending order.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by populiarity, sort by latest, sort by price: low to high, sort by price: high to low
    2. Select the "Sort by price: low to high" option from the sorting dropdown.

Expected Result: Products are displayed in ascending order of price, from the lowest to the highest.



Test Case ID: TC-SORT-05
Test Case Title: Sort by Price (High to Low)

Description: Ensure products are sorted by price in descending order.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by populiarity, sort by latest, sort by price: low to high, sort by price: high to low
    2. Select the "Sort by price: high to low" option from the sorting dropdown.

Expected Result: Products are displayed in descending order of price, from the highest to the lowest.



Test Case ID: TC-SORT-06
Test Case Title: Validate Sorting Persistence After Page Refresh

Description: Ensure the selected sorting option persists after refreshing the page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by populiarity, sort by latest, sort by price: low to high, sort by price: high to low
    4. Select a sorting option in the dropdown list (e.g., "Sort by price: low to high").
    5. Refresh the page.

Expected Result: The selected sorting option remains applied after the page refresh.



Test Case ID: TC-SORT-07
Test Case Title: Validate Sorting Persistence After Navigation

Description: Ensure the selected sorting option persists after navigating to another page and returning.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by populiarity, sort by latest, sort by price: low to high, sort by price: high to low
    2. Select a sorting option (e.g., "Sort by price: low to high").
    3. Navigate to a different page (e.g., open random product's preview).
    4. Return to the original home page.

Expected Result: The selected sorting option remains applied when returning to the original home page.



Test Case ID: TC-SORT-08
Test Case Title: Verify Sorting Performance

Description: Ensure the sorting operation performs efficiently.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by populiarity, sort by latest, sort by price: low to high, sort by price: high to low
    3. Select various sorting options (e.g., try to select "Sort by price: low to high" firstly, after that switch to "Sort by price: high to low").

Expected Result: The sorting operation completes quickly, and products are displayed according to the selected criteria without significant delays.


## My Account functionality

Test Case ID: TC-ACCOUNT-01
Test Case Title: Verify Error message appears if wrong password is entered

Description: Ensure error message appears: " Error: The password you entered for the email address "" is incorrect. Lost your password?"
Precondition: User has an account in the website 
Test Data: Login name, Password
Test Steps:
    1. Log out if logged in.
    2. Navigate to "My Account" by clicking "My Account" link in the navigation menu.
    3. Enter email address and wrong password.
    4. Attempt to log in.

Expected Result: User is not able to connect to his account and the error message appears: "Error: The password you entered for the email address "" is incorrect. Lost your password?"



Test Case ID: TC-ACCOUNT-01
Test Case Title: Verify user is able to recover his password

Description: Ensure a link exists: "Lost your password?" under the "Log in" button
Precondition: User has an account in the website 
Test Data: Login name, Password
Test Steps:
    1. Log out if logged in.
    2. Navigate to "My Account" by clicking "My Account" link in the navigation menu.
    3. Click a link "Lost your password?"
    4. Enter your email.
    5. Click on "Reset password" button.
    6. Attempt to log in.

Expected Result: User gets a successful message on the screen: "Password reset email has been sent." after filling up the email. Lost your password?"



Test Case ID: TC-ACCOUNT-01
Test Case Title: Verify Order Page Navigation

Description: Ensure user can navigate to the order page.
Precondition: User has an account in the website and is logged in.
Test Data: Login name, Password
Test Steps:
    1. Navigate to "My Account page"
    2. Click on "Orders" link.
    3. Click on the order's number link or "View" button.
   
Expected Result: User is redirected to the orders page where he can see the history of orders.



Test Case ID: TC-ACCOUNT-01
Test Case Title: Verify Subscriptions Page Navigation

Description: Ensure user can navigate to the subscriptions page.
Precondition: User has an account in the website and is logged in.
Test Data: Login name, Password
Test Steps:
    1. Navigate to "My Account page"
    2. Click on "Subscriptions" link.
    3. Click on "Browse products" link. or if you already have a subscription: 
    4. Choose the options: Cancel, Change payment, Renew now.
   
Expected Result: User is redirected to the subscriptions page where he can see subscriptions and browse for new ones if he has no subscriptions yet.



Test Case ID: TC-ACCOUNT-01
Test Case Title: Verify Downloads Page Navigation

Description: Ensure user can navigate to the downloads page.
Precondition: User has an account in the website and is logged in.
Test Data: Login name, Password
Test Steps:
    1. Navigate to "My Account page"
    2. Click on "Downloads" link.
    3. Click on "Browse products" link.
   
Expected Result: User is redirected to the downloads page where he can see his downloads and browse for more.



Test Case ID: TC-ACCOUNT-01
Test Case Title: Verify Cupons Page Navigation

Description: Ensure user can navigate to the cupons page.
Precondition: User has an account in the website and is logged in.
Test Data: Login name, Password
Test Steps:
    1. Navigate to "My Account page"
    2. Click on "Cupons" link.
   
Expected Result: User is redirected to the cupons page where he can see all his cupons.



Test Case ID: TC-ACCOUNT-01
Test Case Title: Changing the Shipping Address

Description: User is able to change his shipping or Billing address in the system.
Precondition: User has an account in the website and is logged in.
Test Data: Login name, Password
Test Steps:
    1. Navigate to "My Account page"
    2. Click on "Addresses" link.
    3. Click on the "Edit" link under Shipping address.
    4. Enter the required fields.
    5. Click "Save address"
   
Expected Result: User is able to change the address and gets a success message: "Address changed successfully".



Test Case ID: TC-ACCOUNT-01
Test Case Title: Verify Account Details Page Navigation

Description: Ensure user can navigate to the account details page.
Precondition: User has an account in the website and is logged in.
Test Data: Login name, Password
Test Steps:
    1. Navigate to "My Account page"
    2. Click on "Account Details" link.
    3. Enter the required fields.
    4. Click on "Save changes" button.
   
Expected Result: User is redirected to the Account details page where he can edit his personal data.



Test Case 3: Password change in Account Details Page (Weak Password)

Description: Ensure appropriate error handling when a weak password is used to create an account during checkout.
Steps:
    1. Navigate to "My Account page"
    2. Click on "Account Details" link.
    3. Enter a weak password in the "New password" and "Confirm new password" fields (e.g., less than the required length, no special characters).
    4. Attempt to save the password by clicking "Save changes" button.

Expected Result: The system does not allow to save new password, the error message appears: "Weak - Please enter a stronger password.
Hint: The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )." and the user cannot proceed until a strong password is entered.



Test Case ID: TC-ACCOUNT-01
Test Case Title: Verify Log Out Page Navigation

Description: Ensure user can navigate to the Log out page.
Precondition: User has an account in the website and is logged in.
Test Data: Login name, Password
Test Steps:
    1. Navigate to "My Account page"
    2. Click on "Log out" link.
    3. Click on "Browse products" link.
   
Expected Result: User is redirected to the log out page where he can disconnect from the website.


## All the menu items are functional

Test Case 1: Verify Demo Shop Item

Description: Ensure the "Demo Shop" menu item navigates to the homepage.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "Demo Shop" menu item.

Expected Result: The user is redirected to the homepage, and the page loads without errors.



Test Case 2: Verify Shop Menu Item

Description: Ensure the "Shop" menu item navigates to the main shop page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "Shop" menu item.

Expected Result: The user is redirected to the shop page, displaying all products without errors.



Test Case 4: Verify Cart Menu Item

Description: Ensure the "Cart" menu item navigates to the cart page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "Cart" menu item on the top right of the page.

Expected Result: The user is redirected to the cart page, showing the cart contents without errors.



Test Case 5: Verify Checkout Menu Item

Description: Ensure the "Checkout" menu item navigates to the checkout page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "Checkout" menu item.

Expected Result: The user is redirected to the checkout page, and the page loads without errors.



Test Case 6: Verify My Account Menu Item

Description: Ensure the "My Account" menu item navigates to the login or account dashboard page.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "My Account" menu item.

Expected Result: The user is redirected to the login page (if not logged in) or the account dashboard (if logged in), and the page loads without errors.



Test Case 9: Verify Footer Menu Items

Description: Ensure all footer menu items navigate to the correct pages.
Precondition: - 
Test Data: - 
Test Steps:
    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Scroll down the page till the end.
    3. Click on each footer menu item one by one.

Expected Result: Each footer menu item redirects to the corresponding page (e.g., Demo Shop, WorldPress) without errors.



Test Case 10: Verify Navigation Using Breadcrumbs

Description: Ensure breadcrumb links navigate to the correct pages.
Precondition: - 
Test Data: - 
Test Steps:
    1. Open selected product's preview page (e.g., Pants)
    2. Click on the breadcrumb links one by one. (e.g., Uncategorized, Home)

Expected Result: Each breadcrumb link navigates to the corresponding page without errors.



Test Case 12: Verify Mobile Menu Functionality

Description: Ensure the mobile menu works correctly and navigates to the correct pages.
Precondition: - 
Test Data: - 
Test Steps:
    1. Open the website on a mobile device or resize the browser to mobile view.
    2. Click on the mobile menu icon to open the menu.
    3. Click on each menu item one by one.

Expected Result: Each menu item navigates to the correct page without errors, and the mobile menu opens and closes correctly.
