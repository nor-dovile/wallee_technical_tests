## GENERAL PROCESS

### How I started setting up the project with Cypress

- I created a folder for the project "magento-2"
- I open a terminal inside the project
- I ran "npm init" and yes to the questions
- I setup the initial repository with `git init`
- I created the initial `.gitignore` to ignore the `node_modules` directory
- I added all my files and run my initial commit:
  - `git add`
  - `git commit -m "Initial commit"`

How I setup the cypress module. I follow the documentation on [Cypress doc](https://docs.cypress.io/guides/overview/why-cypress).

- I ran `npm install cypress --save-dev` to install cypress
- I added `cy:open` script to run it as `npm run cy:open`

How I ran my script.

- I ran `npm run cy:open`
- I selected "E2E Testing", then "Firefox", then "Start E2E Testing in Firefox"
- On the new tab I clicked on "Create new spec"
- I created a new spec with name "spec" and closed the window
- I clicked on newly created spec file and started running my default spect
- Cypress started running the first default test visiting `https://example.cypress.io/`
- I edited the spec file with a simple `expect(true).to.equal(true)` assertion and run it again.

Now we're ready to start testing `magento-2`

## The design of the test scenarios

The base to write test scenarios is to look at the **acceptance criteria**. So starting
from them we'll create the test scenarios and what we could consider a success test.

* [Users are able to navigate to the different pages on the website](#navigation-on-different-pages)
* [The user should be able to add products to their cart, and the cart should update automatically, displaying the correct number of items.](#cart-functions-correctly)
* [The checkout process should be completed without any errors, and the user should receive an order confirmation email upon successful checkout.](#checkout-process-confirmation)
* [The sorting function should return accurate results for valid sorting terms.](#sorting-functionality)
* [The user should be able to create an account on the checkout.](#create-account-at-checkout)
* [All menu items on the webshop should be functional and navigate to the correct page, without any errors or broken links](#items-functionality)

<div id="navigation-on-different-pages"></div>
### Users are able to navigate to the different pages on the website.

Run the `user-navigation.cy.js` test file in cypress for this test scenario.
For this part I tested the main sections: What's new, Women, Men and Gear, and made perform assertions on the title of the main section of the page.

<div id="cart-functions-correctly"></div>
### The user should be able to add products to their cart, and the cart should update automatically, displaying the correct number of items.

Run the `adding-products-to-cart.cy.js` test file in cypress for this test scenario.
For this part I tested the scenario of adding one item, then checking on the number on the cart icon, and then adding another item and see if the updates correclty.

<div id="checkout-process-confirmation"></div>
### The checkout process should be completed without any errors, and the user should receive an order confirmation email upon successful checkout.

Run the `checkout-process.cy.js` test file in cypress for this test scenario.

<div id="sorting-functionality"></div>
### The sorting function should return accurate results for valid sorting terms.

This is future work.

<div id="create-account-at-checkout"></div>
### The user should be able to create an account on the checkout.

Run the `checkout-process.cy.js` test file in cypress for this test scenario.
For this part I have to follow several steps: adding an item to the cart, go to checkout, fill up the shipping infomation form, adding a payment method and finally place the order.

<div id="items-functionality"></div>
### All menu items on the webshop should be functional and navigate to the correct page, without any errors or broken links

This is future work.
