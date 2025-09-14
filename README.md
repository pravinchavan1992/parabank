# ParaBank E2E Test Automation Framework

This project is a comprehensive **end-to-end (E2E) test automation framework** for the ParaBank online banking application, built using **Playwright**. It covers both **UI and API test scenarios** to ensure the application's core functionalities are working correctly.

---

## Project Structure

The framework is organized into a **modular and maintainable structure**:

parabank/
├─ package.json # Manages project dependencies and test scripts
├─ playwright.config.js # Main Playwright configuration (test directories, base URL, etc.)
├─ tests/ # Test scripts
│ ├─ parabank.spec.js # UI test scenarios (serial execution for dependent steps)
│ └─ parabank.api.spec.js # API test scenarios (finding and validating transactions)
├─ pages/ # Page Object Model (POM) files
│ └─ parabank.page.js # Encapsulates locators and actions for ParaBank pages
├─ data/ # Test data (not used in this version, good practice)
└─ utils/ # Utility functions (not used in this version, good practice)
