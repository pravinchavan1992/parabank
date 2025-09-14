ParaBank E2E Test Automation Framework
This project is a comprehensive end-to-end (E2E) test automation framework for the ParaBank online banking application, built using Playwright. It covers a range of both UI and API test scenarios to ensure the application's core functionalities are working correctly.

Project Structure
The framework is organized into a modular and maintainable structure:

package.json: Manages project dependencies and test scripts.

playwright.config.js: The main Playwright configuration file, defining test directories, the base URL, and other settings.

tests/: This directory contains the test scripts.

parabank.spec.js: Contains all the UI test scenarios in a single, serial execution to ensure dependencies between steps (e.g., user creation and login) are handled correctly.

parabank.api.spec.js: Focuses on the API test scenarios, specifically for finding and validating transactions.

pages/: This directory contains the Page Object Model (POM) files.

parabank.page.js: Encapsulates all the locators and actions for the ParaBank application's web pages, promoting code reusability and readability.

data/: (Not used in this version but a good practice) A directory to store test data, such as usernames and passwords.

utils/: (Not used in this version but a good practice) A directory for utility functions.

Technologies Used
Playwright: The primary test automation framework.

JavaScript: The programming language for writing tests.

Node.js: The runtime environment.

npm: For dependency management.

@faker-js/faker: A library used to generate unique and realistic fake data for user registration.

Getting Started
Follow these steps to set up and run the framework on your local machine.

Prerequisites
Node.js (version 18 or higher recommended) installed on your system.

Installation
Clone the repository:

git clone [https://github.com/pravinchavan1992/parabank.git](https://github.com/pravinchavan1992/parabank.git)
cd parabank

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

Running the Tests
You can run the entire test suite or specific parts using the following npm scripts:

Run all tests (UI and API):

npm test

Run only UI tests:

npm run test:ui

Run only API tests:

npm run test:api

After the test execution, an HTML report will be generated. You can view it by running:

npx playwright show-report

Contributing
We welcome contributions! Please feel free to open an issue or submit a pull request if you find any bugs or have suggestions for improvements.

Disclaimer: This is a test automation project for a demo application and is not intended for real-world use.
