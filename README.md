# Automated Testing with Playwright for Kanban Web App

## About the Project

As part of the QA evaluation task (Part 2: Test Automation), I selected the following GitHub project for test automation:

**GitHub Repository:** [Kanban Task Management Web App](https://github.com/dodoburner/kanban-task-management-web-app)

This project is a web-based Kanban board that allows users to create, update, and delete boards and tasks. It has both frontend and backend components and can be run locally. I chose this project because it includes important user interactions such as form submissions, data updates, and dynamic UI changes, which are ideal for end-to-end test automation.

## Technology Used

- **Playwright**
- **TypeScript**
- **Node.js**
- **Visual Studio Code**

## How to Set Up and Run the Tests

1. Clone the repository containing my test scripts:
''bash
  git clone https://github.com/yousrahr/kanban-test-playwright.git
  cd kanban-test-playwright

2.Install project dependencies:
  npm install

3. Run all test cases:
  npx playwright test

4. To view test results in HTML report format:
   npx playwright show-report


