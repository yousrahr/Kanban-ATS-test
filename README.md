# Automated Testing with Playwright for Kanban Web App

## About the Project

As part of the QA evaluation task (Part 2: Test Automation), I selected the following GitHub project for test automation:

**GitHub Repository:** [Kanban Task Management Web App](https://github.com/dodoburner/kanban-task-management-web-app)

This project is a web-based Kanban board that allows users to create, update, and delete boards and tasks. It has both frontend and backend components and can be run locally. I chose this project because it includes important user interactions such as form submissions, data updates, and dynamic UI changes, which are ideal for end-to-end test automation.

## Technology Used

- Playwright
- TypeScript
- Node.js
- Visual Studio Code

## How to Set Up and Run the Tests

```bash
# Clone this repository
git clone https://github.com/yousrahr/Kanban-ATS-test.git
cd Kanban-ATS-test

# Install project dependencies
npm install

# Run all test cases
npx playwright test

# View test results in HTML report format
npx playwright show-report

Assumptions and Notes
The selected Kanban application does not include authentication.

The application was tested locally as described in its official GitHub repository.

Tests were created using Playwright's code generation feature and refactored for readability and best practices.

Positive test scenarios are in kanban-test-scenarios.spec.ts.

Negative test scenarios are in negative-kanban-test-scenarios.spec.ts.
