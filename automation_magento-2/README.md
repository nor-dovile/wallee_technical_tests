# README

This README containst contains all the information on the process of creating e2e testing on `magento-2`. 
You will see many details on both the setup of cypress, technical explanations and the actual test scenarios.

I've organized the documentation in these pieces

- Main `README.md`, here you'll see all the prerequisites and what's required to run the tests
- `PROCESS.md`, all the tiny descriptive details of the each step

## Audience

This documentation is meant to be read by Wallee's QA recruiting team.
Requires technical knowledge on e2e, Node.js and Cypress.

## Prerequisites

- Node.js 18.x, 20.x, 22.x and above

## Installation

Install the dependencies with

```
npm ci
``` 

The only dependency appart from cypress is faker-js to generate random emails

## Run the scripts

In a terminal, open the cypress app with

```
npm run cy:open
```

On the browser select "E2E Testing".
Then select either Firefox or Chrome.
Then click on "Start E2E Testing with ...." button.
From the specs files select one of these:

- adding-products-to-cart
- checkout-process
- user-navigation


## Contributors

- [@nor-dovile](https://github.com/nor-dovile) - creator and maintainer
