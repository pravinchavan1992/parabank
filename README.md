# ParaBank E2E Test Automation Framework

![ParaBank Logo](https://github.com/parasoft/parabank/raw/master/src/main/webapp/images/logo.png)

This repository contains an end-to-end (E2E) test automation framework for the ParaBank online banking application, developed using [Playwright](https://playwright.dev/). The framework validates core functionalities of ParaBank through both UI and API tests.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

ParaBank is a demo online banking application provided by Parasoft. It simulates realistic banking workflows, making it ideal for practicing test automation.

This framework automates critical workflows like:

- User registration and login
- Account creation and management
- Fund transfers and transactions
- API validations for backend services

---

## Features

- **UI Automation**: Automates interactions like login, registration, and transactions.
- **API Automation**: Validates backend endpoints and data integrity.
- **Modular Test Design**: Easily maintainable and scalable test structure.
- **Parallel Execution**: Supports running tests in parallel to reduce execution time.
- **Detailed Reporting**: Generates comprehensive test reports.

---

## Project Structure

parabank/

├── package.json # Project dependencies and scripts           

├── playwright.config.js # Playwright configuration

├── tests/ # Test scripts

├── utils/ # Utility functions

└── README.md # Project documentation



---

## Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [npm](https://www.npmjs.com/)
- [Playwright](https://playwright.dev/)

---

## Setup and Installation

1. **Clone the repository:**

```bash
git clone https://github.com/pravinchavan1992/parabank.git
cd parabank```



