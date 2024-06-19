# Test Cases:

## Navigation of the pages

**Test Case ID:** TC-NAVIGATE-01

**Test Case Title:** Verify Home Page Navigation

**Priority:** Critical

**Description:** Ensure users can navigate to the home page.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Visit different pages using the navigation menu. (e.g., "Checkout", "Cart", "My Account" pages)
    3. Click on the "Demo Shop" link in the navigation menu.

**Expected Result:**

 The user is redirected to the home page, and the home page loads correctly.

---

**Test Case ID:** TC-NAVIGATE-02

**Test Case Title:** Verify Product Page Navigation

**Priority:** Critical

**Description:** Ensure users can navigate to a product page.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on any product link from the homepage. (e.g., Shirts)

**Expected Result:**

The user is redirected to the respective product page, and the product details are displayed correctly.

---

**Test Case ID:** TC-NAVIGATE-03

**Test Case Title:** Verify Category Page Navigation

**Priority:** Low

**Description:** Ensure users can navigate to a category page.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on a product link from the homepage (e.g., Laptops) 
    3. Click on the category link on the product's preview page. (e.g., Uncategorized)

**Expected Result:**

 The user is redirected to the category page, and the products in that category are displayed correctly.

---

**Test Case ID:** TC-NAVIGATE-04

**Test Case Title:** Verify Cart Page Navigation

**Priority:** Critical

**Description:** Ensure users can navigate to the cart page.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "Cart" link in the navigation menu.

**Expected Result:**

 The user is redirected to the cart page, and the cart's contents are displayed correctly.

---

**Test Case ID:** TC-NAVIGATE-05

**Test Case Title:** Verify Cart Page Navigation from the cart icon side view

**Priority:** Medium

**Description:** Ensure users can navigate to the cart page.

**Precondition:** The user has one or more items in the cart.

**Test Data:** -

**Test Steps:**

    1. From the home page, click on the cart icon on the top right of the page.
    2. Click on the “View my cart” button.

**Expected Result:**

 The user is redirected to the cart page, and the cart's contents are displayed correctly.

---

**Test Case ID:** TC-NAVIGATE-06

**Test Case Title:** Verify Checkout Page Navigation (Cart Page)

**Priority:** Critical

**Description:** Ensure users can navigate to the checkout page from the cart page.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.

**Test Data:** -

**Test Steps:**

    1. Click on the "Proceed to Checkout" button.

**Expected Result:**

 The user is redirected to the checkout page, and the checkout process can be initiated.

---

**Test Case ID:** TC-NAVIGATE-07

**Test Case Title:** Verify Checkout Page Navigation (Cart Icon Side Page)

**Priority:** Critical

**Description:** Ensure users can navigate to the checkout page from the shopping cart icon side page.

**Precondition:** -

**Test Data:** -

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Choose the item from the item's list and click the "Add to cart” button.
    3. Go back to the homepage by clicking the “Demo Shop” link in the navigation menu.
    4. Click on the cart icon on the top right of the page.
    3. Click on the "Go to checkout" button.

**Expected Result:**

 The user is redirected to the checkout page, and the checkout process can be initiated.

---

**Test Case ID:** TC-NAVIGATE-08

**Test Case Title:** Verify My Account Page Navigation

**Priority:** Low

**Description:** Ensure users can navigate to my account page.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "My Account" link in the navigation menu.

**Expected Result:**

 The user is redirected to the My Account page, and the login option is displayed.

---

**Test Case ID:** TC-NAVIGATE-09

**Test Case Title:** Verify Shop Menu Navigation

**Priority:** Critical

**Description:** Ensure the "Shop" menu link navigates to the main shop page.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "Shop" link in the navigation menu.

**Expected Result:**

 The user is redirected to the shop page, displaying all products without errors.

---

**Test Case ID:** TC-NAVIGATE-10

**Test Case Title:** Verify Footer Link Navigation

**Priority:** Low

**Description:** Ensure users can navigate using links in the footer.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Visit any other page by using the links in the navigation menu (e.g., "My Account" page).
    3. Scroll down to the bottom of the page.
    4. Click on the link "Demo Shop" in the footer.

**Expected Result:**

 The user is redirected to the homepage.

---

**Test Case ID:** TC-NAVIGATE-11

**Test Case Title:** Verify Breadcrumb Navigation

**Priority:** Low

**Description:** Ensure users can use breadcrumb links to navigate.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Navigate to a random item's page on the main menu. (e.g., Glasses)
    3. Click on the breadcrumb link (e.g., Home > Category > Product).

**Expected Result:**

 The user is redirected to the respective breadcrumb page (e.g., category or home page).

---

**Test Case ID:** TC-NAVIGATE-12

**Test Case Title:** Verify External Link Navigation

**Priority:** Low

**Description:** Ensure users can navigate to external links from the website.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Scroll down the page till the very end.
    3. Click on an external link "WordPress" in the footer.
   
**Expected Result:**

 The user is redirected to the external website (https://wordpress.org/), and the external site loads correctly.

---

## Adding products to the cart

**Test Case ID:** TC-CART-01

**Test Case Title:** Add Single Product to Cart

**Priority:** Critical

**Description:** Ensure a single product can be added to the cart.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Click on the "Add to cart" button to select a product from the homepage or "Shop" page in the navigation menu.

**Expected Result:**

 The product is added to the cart, and the cart icon/indicator updates to show 1 item.

---

**Test Case ID:** TC-CART-02

**Test Case Title:** Add Multiple Products to Cart

**Priority:** Critical

**Description:** Ensure multiple products can be added to the cart.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Select a product and click "Add to cart"
    3. Go back to the home page by clicking the "Demo Shop" or "Shop" links in the navigation menu.
    4. Select a different product and click "Add to cart"

**Expected Result:**

 Both products are added to the cart, and the cart icon/indicator updates to show 2 items.

---

**Test Case ID:** TC-CART-03

**Test Case Title:** Add Same Product Multiple Times

**Priority:** Critical

**Description:** Ensure the same product can be added multiple times, and the cart updates correctly.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Select a product and click "Add to cart"
    3. Navigate back from the cart page to the homepage by clicking "Demo Shop".
    4. Click "Add to Cart" for the same product again.

**Expected Result:**

 The product's quantity increases in the cart.

---

**Test Case ID:** TC-CART-04

**Test Case Title:** Update Product Quantity in Cart

**Priority:** High

**Description:** Ensure the quantity of a product can be updated in the cart.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Add a product by clicking "Add to cart"
    3. Change the quantity of the product in the cart by clicking the "-" and "+" symbols near the product.
    4. Observe the quantity and prices in total per product and general total and subtotal on the cart page.

**Expected Result:**

 The quantity and "Total" price per product are updated accordingly (increasing/decreasing), and the "Total" and "Subtotal" prices are updated accordingly as well (increasing/decreasing).

---

**Test Case ID:** TC-CART-05

**Test Case Title:** Remove Product from Cart

**Priority:** Critical

**Description:** Ensure a product can be removed from the cart.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Select and add a product by clicking "Add to cart"
    3. Navigate to the "Shop" page again.
    2. Select and add a different product by clicking "Add to cart"
    3. Click the "Remove item" link for one product.

**Expected Result:**

 The product is removed from the cart, and the cart updates to show the correct number of remaining items.

---

**Test Case ID:** TC-CART-06

**Test Case Title:** Verify Cart Empty State on the Cart Page

**Priority:** Medium

**Description:** Ensure the cart displays correctly when empty.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Navigate to the cart page by clicking the "Cart" link on the navigation menu.
    3. Remove all products from the cart by clicking "Revome item" under each of the products.

 **Expected Result:**
 
  The cart displays a message "Your cart is currently empty!" indicating it is empty.

---

**Test Case ID:** TC-CART-07

**Test Case Title:** Verify Cart Empty State on the cart icon side view

**Priority:** Medium

**Description:** Ensure the cart displays correctly when empty.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Select and add a product by clicking "Add to cart"
    3. Navigate to the shop page by clicking the "Shop" link on the navigation menu.
    4. Click on the cart icon to expand the cart side view.
    5. Remove all products from the cart by clicking "Revome item" under each of the products.
    6. Click on the "Start Shopping" button.

 **Expected Result:**
 
  The cart displays a message "Your cart is currently empty!" indicating it is empty, and when clicking on the "Start Shopping" button the user is redirected to the homepage.


---

**Test Case ID:** TC-CART-08

**Test Case Title:** Cart Icon/Indicator Updates Correctly

**Priority:** High

**Description:** Ensure the cart icon/indicator updates correctly with each product's addition.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Add a product to the cart by clicking "Add to cart".
    3. Go back to the home page by clicking the "Demo Shop" or "Shop" links in the navigation menu.
    4. Observe the changes on the cart icon/indicator.
    5. Select a different product and click "Add to cart".
    6. Go back again to the home page by clicking the "Demo Shop" or "Shop" links in the navigation menu.
    7. Verify the cart icon/indicator updates.

**Expected Result:**

 The cart icon/indicator correctly shows the number of items added to the cart.

---

**Test Case ID:** TC-CART-09

**Test Case Title:** Cart Persistence After Page Reload

**Priority:** Low

**Description:** Ensure the cart contents are not changing after reloading the page.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Add a product to the cart, by clicking "Add to Cart".
    3. Reload the page.

**Expected Result:**

 The added products stay in the cart even after the page reloading.

---

## Checkout processes

**Test Case ID:** TC-CHECKOUT-01

**Test Case Title:** Successful Checkout with Guest User

**Priority:** Critical

**Description:** Ensure a guest user can complete the checkout process successfully.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.

**Test Data:** - 

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Enter all the required contact and billing information.
    3. Select a payment method (e.g., Credit/Debit card).
    4. Click the "Place Order" button.
    5. In the pop-up window complete the payment by filling in additional data (like card number, expiry date, and security code) and click the "Pay" button.

**Expected Result:**

 The checkout is completed successfully, an order confirmation page is displayed, and the user receives an order confirmation email.

---

**Test Case ID:** TC-CHECKOUT-02

**Test Case Title:** Successful Checkout with Registered User

**Priority:** Critical

**Description:** Ensure a registered user can complete the checkout process successfully.

**Precondition:** - 

**Test Data:** Email address, password

**Test Steps:**

    1. Visit my account page by clicking on the "My Account" link on the navigation menu.
    2. Log in to the user account by entering a valid email address, and password and clicking "Log in".
    3. Navigate to the shop by clicking the "Shop" link in the navigation menu.
    4. Add a product to the cart, by clicking the "Add to Cart" button.
    5. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    6. Verify that billing and shipping information is pre-filled.
    7. Select a payment method (e.g., Credit/Debit card).
    8. Click the "Place Order" button.
    9. In the pop-up window complete the payment by filling in additional data (like card number, expiry date, and security code) and click the "Pay" button.

**Expected Result:**

 The checkout is completed successfully, an order confirmation page is displayed, and the user receives an order confirmation email.

---

**Test Case ID:** TC-CHECKOUT-03

**Test Case Title:** Checkout with Different Billing and Shipping Addresses

**Priority:** Low

**Description:** Ensure the checkout process works correctly when using different billing and shipping addresses.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.

**Test Data:** -

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Enter a billing address.
    3. Enter a different shipping address.
    4. Select a payment method (e.g., Credit/Debit card).
    5. Click the "Place Order" button.
    6. In the pop-up window complete the payment by filling in additional data (like card number, expiry date, and security code) and click the "Pay" button.

**Expected Result:**

 The checkout is completed successfully, an order confirmation page is displayed, and the user receives an order confirmation email with the correct billing and shipping addresses.

---

**Test Case ID:** TC-CHECKOUT-04

**Test Case Title:** Checkout with Multiple Products

**Priority:** Critical

**Description:** Ensure the checkout process works correctly when multiple products are in the cart.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Add a product to the cart, by clicking the "Add to Cart" button.
    3. Go back to the homepage by clicking the "Demo Shop" link.
    4. Add another product to the cart, by clicking the "Add to Cart" button.
    5. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    6. Enter all the required contact and billing information.
    7. Select a payment method (e.g., Credit/Debit card).
    8. Click the "Place Order" button.
    9. In the pop-up window complete the payment by filling in additional data (like card number, expiry date, and security code) and click the "Pay" button.

**Expected Result:**

 The checkout is completed successfully, an order confirmation page is displayed, and the user receives an order confirmation email with details of all products.

---

**Test Case ID:** TC-CHECKOUT-05

**Test Case Title:** Checkout with Coupon Code (Valid)

**Priority:** Low

**Description:** Ensure the checkout process works correctly when a coupon code is applied.

**Precondition:** The user has to know the exact coupon code to use it.

**Test Data:** Coupon code

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Add a product to the cart, by clicking the "Add to Cart" button.
    3. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    4. Click on the “Add the coupon” link and enter a valid coupon code.
    5. Click on the "Apply" button and verify the discount is applied.
    6. Enter all the required contact and billing information.
    7. Select a payment method (e.g., Credit/Debit card).
    8. Click the "Place Order" button.
    9.  In the pop-up window complete the payment by filling in additional data (like card number, expiry date, and security code) and click the "Pay" button.

**Expected Result:**

 The checkout is completed successfully with the discount applied, an order confirmation page is displayed, and the user receives an order confirmation email with the discounted amount.

---

**Test Case ID:** TC-CHECKOUT-06

**Test Case Title:** Checkout with Coupon Code (Not Valid)

**Priority:** Low

**Description:** Ensure the error message appears: “Coupon … does not exist!” when the wrong coupon code is applied.

**Precondition:** The user should have at least one item in the cart and stay on the cart page

**Test Data:** Wrong coupon code.

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Click on the “Add the coupon” link and enter NOT valid coupon code.
    3. Click on the “Apply” button and verify the error code appears.

**Expected Result:**

 The error code appears: “Coupon … does not exist!” and the discount is not applied to the total sum of the order until the user enters the valid coupon code.

---

**Test Case ID:** TC-CHECKOUT-07

**Test Case Title:** Checkout with Invalid Payment Method

**Priority:** Critical

**Description:** Ensure appropriate error handling when an invalid payment method is used.

**Precondition:** The user should have at least one item in the cart and stay on the cart page

**Test Data:** -

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Enter all required contact and billing information.
    3. Select an invalid payment method (e.g., wrong IBAN).
    4. Click the "Place Order" button and attempt to complete the payment.

**Expected Result:**

 An appropriate error message is displayed like "The provided IBAN is not accepted. ", and the user cannot complete the checkout.

---

**Test Case ID:** TC-CHECKOUT-08

**Test Case Title:** Checkout with Cancel Functionality

**Priority:** Medium

**Description:** Ensure the user can cancel payment and is redirected to the Checkout page after the canceled payment.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.

**Test Data:** - 

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Enter all the required contact and billing information.
    3. Select a payment method (e.g., Credit/Debit card).
    4. Click the "Place Order" button.
    5. In the pop-up window click the "Cancel Payment" link.
    6. Observe the page

**Expected Result:**

 The user can cancel the payment, he is redirected to the Checkout page with his order, and the message: "The payment is canceled as requested" is displayed.

---

**Test Case ID:** TC-CHECKOUT-09

**Test Case Title:** Initiate new Payment after Canceled Payment 

**Priority:** Critical

**Description:** Ensure the user is redirected to the Checkout page after canceling payment with the opportunity to continue payment for the same order again.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.

**Test Data:** - 

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Enter all the required contact and billing information.
    3. Select a payment method (e.g., Credit/Debit card).
    4. Click the "Place Order" button.
    5. In the pop-up window click the "Cancel Payment" link.
    6. Select payment method (e.g., Direct Debit (SEPA)).
    7. Agree with the privacy policy.
    8. Click on the "PAY FOR ORDER" button.

**Expected Result:**

 After canceling the order, the user is redirected to the Checkout page with his order information, and the message appears: "The payment is canceled as requested". 
The user can choose payment methods again and pay for the order.

---

**Test Case ID:** TC-CHECKOUT-10

**Test Case Title:** Verify payment failing if terms and conditions are not accepted

**Priority:** High

**Description:** Ensure the error message appears: Please read and accept the terms and conditions to proceed with your order" if the user is not accepting the terms and conditions of the website.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.

**Test Data:** - 

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Enter all the required contact and billing information.
    3. Select a payment method (e.g., Credit/Debit card).
    4. Click the "Place Order" button.
    5. In the pop-up window click the "Cancel Payment" link.
    2. Select payment method (e.g., Direct Debit (SEPA)).
    3. Don't agree with the privacy policy.
    4. Click on the "PAY FOR ORDER" button.

**Expected Result:**

 After canceling the order, the user is redirected to the Checkout page with his order information, and the message appears: "The payment is canceled as requested". 
After not agreeing with the website terms and conditions, an appropriate error message is displayed: Please read and accept the terms and conditions to proceed with your order", and the user is not able to complete the checkout.

---

**Test Case ID:** TC-CHECKOUT-11

**Test Case Title:** Checkout with Required Fields Missing

**Priority:** Critical

**Description:** Ensure appropriate error handling when required fields are missing.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. Add a product to the cart, by clicking "Add to Cart".
    3. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    4. Leave the required fields empty.
    5. Select a payment method (e.g., Credit/Debit card).
    6. Click the "Place Order" button.

**Expected Result:**

 Appropriate error messages are displayed for missing fields, and the user is not able to complete the checkout until all required fields are filled.

---

**Test Case ID:** TC-CHECKOUT-12

**Test Case Title:** Verify Order Confirmation Email

**Priority:** High

**Description:** Ensure the user receives an order confirmation email upon successful checkout.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.

**Test Data:** - 

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Enter all the required contact and billing information.
    3. Select a payment method (e.g., Credit/Debit card).
    4. Click the "Place Order" button.
    5. In the pop-up window complete the payment by filling in additional data (like card number, expiry date, and security code) and click the "Pay" button.
    6. Check the email inbox used during the checkout.

**Expected Result:**

 An order confirmation email is received, well-formatted, and contains all relevant order details (order number, items, prices, billing, and shipping addresses).

---

**Test Case ID:** TC-CHECKOUT-13

**Test Case Title:** Verify Persistence of Cart and Checkout Information

**Priority:** Low

**Description:** Ensure cart and checkout information persist if the user navigates away and returns to the checkout page.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.

**Test Data:** - 

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Navigate to a different page on the site (e.g., "Shop").
    3. Return to the checkout page by clicking the "Checkout" link in the navigation menu.

**Expected Result:**

 The items stay in the cart and any entered checkout information persists, allowing the user to complete the checkout without re-entering details.

---

**Test Case ID:** TC-CHECKOUT-14

**Test Case Title:** Create Account During Checkout (Valid Data) 

**Priority:** High

**Description:** Ensure that the user can create an account on the checkout with valid data.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.

**Test Data:** - 

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Select the option to create an account on the checkbox "Create an account?"
    3. Enter the required contact and billing information.
    4. Select a payment method (e.g., Invoice) and click the "Place Order" button.
    5. In the additional billing and shipping window fill up your gender, and date of birth.
    6. Click the "Pay" button.
    7. Navigate to the "My Account" page.

**Expected Result:**

 The account is created successfully, the order is placed, and the user receives an order confirmation email. The user can log in with the created account credentials. He also can see all the information on his "My Account" page.

---

**Test Case ID:** TC-CHECKOUT-15

**Test Case Title:** Create Account During Checkout (Invalid Email)

**Priority:** High

**Description:** Ensure appropriate error handling when an invalid email is used to create an account during checkout.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.
Steps:
    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Select the option to create an account on the checkbox "Create an account?"
    3. Enter an invalid email address (e.g., missing "@" or domain).
    4. Fill up the required billing information.
    5. Select a payment method (e.g., Invoice) and attempt to complete the checkout process by clicking the "Place Order" button.

**Expected Result:**

 An appropriate error message is displayed: "Please enter a valid email address", and the user cannot proceed until a valid email address is entered.

---

**Test Case ID:** TC-CHECKOUT-16

**Test Case Title:** Create Account During Checkout (Already Existing Email)

**Priority:** High

**Description:** Ensure appropriate error handling when an email already associated with an existing account is used.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.
Steps:
    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Select the option to create an account on the checkbox "Create an account?"
    3. Enter an email address that is already associated with an existing account.
    4. Fill up the required billing information.
    5. Select a payment method (e.g., Invoice) and attempt to complete the checkout process by clicking the "Place Order" button.

**Expected Result:**

 An error message is displayed: "An account is already registered with your email address. Please log in before proceeding.", indicating that the email is already in use, and the user is suggested to log in instead.

---

**Test Case ID:** TC-CHECKOUT-17

**Test Case Title:** Verify Account Creation Confirmation Email

**Priority:** Low

**Description:** Ensure the user receives an account creation confirmation email upon creating an account during checkout.

**Precondition:** The user should have at least one item in the cart and stay on the cart page.
Steps:
    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Select the option to create an account on the checkbox "Create an account?"
    3. Enter a valid email address and password.
    4. Fill up the required contact and billing information.
    5. Select a payment method (e.g., Invoice) and click the "Place Order" button.
    6. In the additional billing and shipping window fill up your gender, and date of birth.
    7. Click the "Pay" button.
    8. Check the email inbox used for account creation.

**Expected Result:**

 The user receives an account creation confirmation email with details on how to log in and manage his account.

---    

**Test Case ID:** TC-CHECKOUT-18

**Test Case Title:** Verify Order Information in User Account (for Registered Users)

**Priority:** Low

**Description:** Ensure the order appears correctly in the user's account order history after a successful checkout.

**Precondition:** The user should have an account in the system and be logged in. Also, the user should have at least one item in the cart and stay on the cart page.

**Test Data:** - Email address, password

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Fill up the required contact and billing information.
    3. Select a payment method (e.g., Credit/Debit Card) and click the "Place Order" button.
    4. Fill up the card's data and click on the "Pay" button.
    5. Navigate to the My Account page by clicking the "My Account" button.
    6. Click the "Orders" link.
    7. View the order history.

**Expected Result:**

 The new order appears in the order history with the correct order details.

---

**Test Case ID:** TC-CHECKOUT-19

**Test Case Title:** Verify Checkout Process with Different Payment Methods

**Priority:** Critical

**Description:** Ensure the checkout process works correctly with different payment methods (e.g., Invoice. Credit/Debit card, Direct Debit (SEPA)).

**Precondition:** The user should have at least one item in the cart and stay on the cart page.

**Test Data:** - 

**Test Steps:**

    1. Proceed to the checkout page by clicking the "Proceed to Checkout" button on the cart page.
    2. Fill up the required contact and billing information.
    3. Select a payment method (e.g., Credit/Debit Card) and click the "Place Order" button.
    4. Complete the payment by following the instructions in the pop-up window and clicking "Pay".
    5. Repeat steps 1-4 for other payment methods (e.g., Direct Debit (SEPA)).

**Expected Result:**

 The checkout is completed successfully with each payment method, an order confirmation page is displayed with order details and a success message: "Thank you. Your order has been received.", and the user receives an order confirmation email for each method.

---

## Sorting functionality

**Test Case ID:** TC-SORT-01

**Test Case Title:** Verify Default Sorting

**Priority:** Medium

**Description:** Ensure the default sorting option works as expected.

**Precondition:** There are at least three products in the shop with a known sequence of the products.
**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by popularity, sort by latest, sort by price: low to high, sort by price: high to low
    4. Check the default sorting option selected.

**Expected Result:**

 Products are sorted according to the default sorting criteria set by the website.

---

**Test Case ID:** TC-SORT-02

**Test Case Title:** Sort by Popularity

**Priority:** Medium

**Description:** Ensure products are sorted by popularity.

**Precondition:** There should be at least three products in the shop with known popularity.

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by popularity, sort by latest, sort by price: low to high, sort by price: high to low
    4. Select the "Sort by popularity" option from the sorting dropdown.

**Expected Result:**

 Products are displayed in order of popularity, from the most popular to the least popular.

---

**Test Case ID:** TC-SORT-03

**Test Case Title:** Sort by Latest

**Priority:** Medium

**Description:** Ensure the "Sort by latest" sorting option correctly orders products by their addition date, with the newest products displayed first.

**Precondition:** There should be at least three items in the shop and products with known, distinct addition dates in the shop.

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by popularity, sort by latest, sort by price: low to high, sort by price: high to low
    4. Select the "Sort by latest" option from the sorting dropdown.

**Expected Result:**


    Products are displayed in descending order of their addition date and the newest products are listed first.
    The sorting dropdown shows "Sort by latest" as the selected option.
    The order persists after a page refresh or navigation away and back to the home page.

---

**Test Case ID:** TC-SORT-04

**Test Case Title:** Sort by Price (Low to High)

**Priority:** Medium

**Description:** Ensure products are sorted by price in ascending order.

**Precondition:** There should be at least three items in the shop.

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by popularity, sort by latest, sort by price: low to high, sort by price: high to low
    4. Select the "Sort by price: low to high" option from the sorting dropdown.

**Expected Result:**

 Products are displayed in ascending order of price, from the lowest to the highest.

---

**Test Case ID:** TC-SORT-05

**Test Case Title:** Sort by Price (High to Low)

**Priority:** Medium

**Description:** Ensure products are sorted by price in descending order.

**Precondition:** There should be at least three items in the shop.

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by popularity, sort by latest, sort by price: low to high, sort by price: high to low
    4. Select the "Sort by price: high to low" option from the sorting dropdown.

**Expected Result:**

 Products are displayed in descending order of price, from the highest to the lowest.

---

**Test Case ID:** TC-SORT-06

**Test Case Title:** Validate Sorting Persistence After Page Refresh

**Priority:** Low

**Description:** Ensure the selected sorting option persists after refreshing the page.

**Precondition:** There should be at least three items in the shop.

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by popularity, sort by latest, sort by price: low to high, sort by price: high to low
    4. Select a sorting option in the dropdown list (e.g., "Sort by price: low to high").
    5. Refresh the page.

**Expected Result:**

 The selected sorting option remains applied after the page refresh.

---

**Test Case ID:** TC-SORT-07

**Test Case Title:** Validate Sorting Persistence After Navigation

**Priority:** Low

**Description:** Ensure the selected sorting option persists after navigating to another page and returning back to the homepage.

**Precondition:** There should be at least three items in the shop.

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by popularity, sort by latest, sort by price: low to high, sort by price: high to low
    4. Select a sorting option (e.g., "Sort by price: low to high").
    5. Navigate to a different page (e.g., "My Account".
    6. Return to the original home page.

**Expected Result:**

 The selected sorting option remains applied when returning to the original home page.

---

**Test Case ID:** TC-SORT-08

**Test Case Title:** Verify Sorting Performance

**Priority:** Low

**Description:** Ensure the sorting operation performs efficiently.

**Precondition:** There should be at least three items in the shop.

**Test Data:** - 

**Test Steps:**

    1. Visit website homepage: https://woocommerce.showcase-wallee.com/
    2. On the main menu click on the "Default sorting" dropdown icon.
    3. Unfold the list of sorting options: default sorting, sort by popularity, sort by latest, sort by price: low to high, sort by price: high to low
    4. Select various sorting options (e.g., try to select "Sort by price: low to high" first, and after that switch to "Sort by price: high to low").

**Expected Result:**

 The sorting operation completes quickly, and products are displayed according to the selected criteria without significant delays.

---

## My Account functionality

**Test Case ID:** TC-ACCOUNT-01

**Test Case Title:** Verify the user can log in if the correct data is entered

**Priority:** Medium

**Description:** Ensure the user can log to the system if he provided the correct email and correct password.

**Precondition:** The user should successfully create an account during checkout.

**Test Data:** Email address, password

**Test Steps:**

    1. Navigate to My Account page by clicking the "My Account" link on the navigation menu.
    2. Log out if logged in by clicking the "Log out" link.
    3. Enter the correct email address and correct password.
    4. Attempt to log in.

**Expected Result:**

 The user can log in successfully with the created account credentials and access his account dashboard.
---

**Test Case ID:** TC-ACCOUNT-02

**Test Case Title:** Verify Error message appears if the wrong email is entered

**Priority:** Medium

**Description:** Ensure an error message appears: "Unknown email address. Check again or try your username." when the email is not valid.

**Precondition:** The user has an account on the website.

**Test Data:** Email address, password

**Test Steps:**

    1. Navigate to the  My Account page by clicking the "My Account" link on the navigation menu.
    2. Log out if logged in by clicking the "Log out" link.
    3. Enter a wrong email address and the correct password.
    4. Attempt to log in.

**Expected Result:**

 The user is not able to connect to his account and the error message appears: "Error: The password you entered for the email address ... is incorrect. Lost your password?"

---

**Test Case ID:** TC-ACCOUNT-03

**Test Case Title:** Verify Error message appears if the wrong password is entered

**Priority:** Medium

**Description:** Ensure the error message appears: " Error: The password you entered for the email address ... is incorrect. Lost your password?"

**Precondition:** The user has an account on the website.

**Test Data:** Email address, password

**Test Steps:**

    1. Navigate to the My Account page by clicking the "My Account" link on the navigation menu.
    2. Log out if logged in by clicking the "Log out" link.
    3. Enter the correct email address and wrong password.
    4. Attempt to log in.

**Expected Result:**

 The user is not able to connect to his account and the error message appears: "Error: The password you entered for the email address ... is incorrect. Lost your password?"

---

**Test Case ID:** TC-ACCOUNT-04

**Test Case Title:** Verify user can recover his password

**Priority:** Low

**Description:** Ensure the link exists: "Lost your password?" under the "Log in" button

**Precondition:** The user has an account on the website.

**Test Data:** Email address

**Test Steps:**

    1. Log out if logged in by clicking the "Log out" link.
    2. Navigate to the My Account page by clicking the "My Account" link on the navigation menu.
    3. Click the link "Lost your password?"
    4. Enter your email.
    5. Click on the "Reset password" button.
    6. Check the email and change the password there.
    7. Attempt to log in.

**Expected Result:**

 After clicking the "Lost your password?" link, the user gets a successful message on the screen: "Password reset email has been sent." when he fills up his email address. When the user checks his email, he gets a magic link, where he can change his password and log in afterwards.

---

**Test Case ID:** TC-ACCOUNT-05

**Test Case Title:** Verify Order Page Navigation

**Priority:** Low

**Description:** Ensure the user can navigate to the order page.

**Precondition:** The user has an account on the website and is logged in.

**Test Data:** Email address, password

**Test Steps:**

    1. Navigate to the My Account page by clicking the "My Account" link on the navigation menu.
    2. Click on the "Orders" link.
    3. Click on the order's number link or "View" button.
   
**Expected Result:**

 The user is redirected to the orders page where he can see the history of his orders.

---

**Test Case ID:** TC-ACCOUNT-06

**Test Case Title:** Verify Subscriptions Page Navigation

**Priority:** Low

**Description:** Ensure the user can navigate to the subscriptions page.

**Precondition:** The user has an account on the website and is logged in.

**Test Data:** Email address, password

**Test Steps:**

    1. Navigate to the My Account page by clicking the "My Account" link on the navigation menu.
    2. Click on the "Subscriptions" link.
    3. Click on the "Browse products" link or if you already have a subscription: 
    4. Choose the options: Cancel, Change payment, Renew now.
   
**Expected Result:**

 The user is redirected to the subscriptions page where he can see subscriptions and browse for new ones if he has no subscriptions yet.

---

**Test Case ID:** TC-ACCOUNT-07

**Test Case Title:** Verify Downloads Page Navigation

**Priority:** Low

**Description:** Ensure the user can navigate to the downloads page.

**Precondition:** The user has an account on the website and is logged in.

**Test Data:** Email address, password

**Test Steps:**

    1. Navigate to the My Account page by clicking the "My Account" link on the navigation menu.
    2. Click on the "Downloads" link.
    3. Click on the "Browse products" link.
   
**Expected Result:**

 The user is redirected to the downloads page where he can see his downloads and browse for more.

---

**Test Case ID:** TC-ACCOUNT-08

**Test Case Title:** Verify Coupons Page Navigation

**Priority:** Low

**Description:** Ensure the user can navigate to the coupons page.

**Precondition:** The user has an account on the website and is logged in.

**Test Data:** Email address, password

**Test Steps:**

    1. Navigate to the My Account page by clicking the "My Account" link on the navigation menu.
    2. Click on the "Coupons" link.
   
**Expected Result:**

 The user is redirected to the coupons page where he can see all his coupons.

---

**Test Case ID:** TC-ACCOUNT-09

**Test Case Title:** Changing the Shipping Address

**Priority:** Low

**Description:** The user can change his shipping or billing address in the system.

**Precondition:** The user has an account on the website and is logged in.

**Test Data:** Email address, password

**Test Steps:**

    1. Navigate to the My Account page by clicking the "My Account" link on the navigation menu.
    2. Click on the "Addresses" link.
    3. Click on the "Edit" link under shipping address.
    4. Enter the required fields.
    5. Click "Save address"
   
**Expected Result:**

 the user can change the address and gets a success message: "Address changed successfully".

---

**Test Case ID:** TC-ACCOUNT-10

**Test Case Title:** Verify Account Details Page Navigation

**Priority:** Low

**Description:** Ensure the user can navigate to the account details page.

**Precondition:** The user has an account on the website and is logged in.

**Test Data:** Email address, password

**Test Steps:**

    1. Navigate to the My Account page by clicking the "My Account" link on the navigation menu.
    2. Click on the "Account Details" link.
    3. Enter the required fields.
    4. Click on the "Save changes" button.
   
**Expected Result:**

 The user is redirected to the Account details page where he can edit his data.

---

**Test Case ID:** TC-ACCOUNT-11

**Test Case Title:** Password Change in Account Details Page (Strong Password)

**Priority:** Medium

**Description:** Ensure the user can change his password to the strong one.

**Precondition:** The user has an account on the website and is logged in.

**Test Data:** Email address, password

Steps:
    1. Navigate to the My Account page by clicking the "My Account" link on the navigation menu.
    2. Click on the "Account Details" link.
    3. Enter a strong password in the "New password" and "Confirm new password" fields (e.g., use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).).
    4. Attempt to save the password by clicking "Save changes" button.

**Expected Result:**

 The user is allowed to save a new strong password.

---

**Test Case ID:** TC-ACCOUNT-12

**Test Case Title:** Password Change in Account Details Page (Weak Password)

**Priority:** Low

**Description:** Ensure appropriate error handling when a weak password is used to change the password.

**Precondition:** The user has an account on the website and is logged in.

**Test Data:** Email address, password

Steps:
    1. Navigate to the My Account page by clicking the "My Account" link on the navigation menu.
    2. Click on the "Account Details" link.
    3. Enter a weak password in the "New password" and "Confirm new password" fields (e.g., less than the required length, no special characters).
    4. Attempt to save the password by clicking the "Save changes" button.

**Expected Result:**

 The user is not allowed to save the new password, the error message appears: "Weak - Please enter a stronger password.
Hint: The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )." and the user cannot proceed until a strong password is entered.

---

**Test Case ID:** TC-ACCOUNT-13

**Test Case Title:** Verify Log Out Page Navigation

**Priority:** Low

**Description:** Ensure the user can navigate to the Logout page.

**Precondition:** The user has an account on the website and is logged in.

**Test Data:** Login name, Password

**Test Steps:**

    1. Navigate to the My Account page by clicking the "My Account" link on the navigation menu.
    2. Click on the "Log out" link.
   
**Expected Result:**

 The user is redirected to the log-out page where he can disconnect from the website.

---

## All the menu items are functional

**Test Case ID:** TC-HOMEPAGE-08

**Test Case Title:** Verify Navigation Using Breadcrumbs

**Priority:** Low

**Description:** Ensure breadcrumb links navigate to the correct pages.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Open the selected product's preview page (e.g., Pants)
    2. Click on the breadcrumb links one by one. (e.g., Uncategorized, Home)

**Expected Result:**

 Each breadcrumb link navigates to the corresponding page without errors.

---

**Test Case ID:** TC-HOMEPAGE-09

**Test Case Title:** Verify Mobile Menu Functionality

**Priority:** Medium

**Description:** Ensure the mobile menu works correctly and navigates to the correct pages.

**Precondition:** - 

**Test Data:** - 

**Test Steps:**

    1. Open the website on a mobile device or resize the browser to mobile view.
    2. Click on the mobile menu icon to open the menu.
    3. Click on each menu item one by one.

**Expected Result:**

 Each menu item navigates to the correct page without errors, and the mobile menu opens and closes correctly.
