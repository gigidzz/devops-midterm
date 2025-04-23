# DevOps Project

A simple Node.js application with DevOps practices implementation.

## Features

- Express web server with EJS templates
- Basic form submission and dynamic routes
- Health check endpoint
- Unit tests with Jest

## Development

To run the application locally:

```bash
# Install dependencies
npm install

# Start the server
npm start

# Run in development mode with auto-reload
npm run dev

# Run tests
npm test
```

# CI/CD and IaC Explanation
# Continuous Integration (CI)
Tool: GitHub Actions

Process: On each push, the workflow:

Runs unit tests (npm test)

Ensures code correctness and avoids broken deployments.



# Infrastructure as Code (IaC)
# Tool: Ansible

What it does:

Checks for Node.js installation

Creates required folders

Installs project dependencies automatically

Playbook can be reused on any machine to set up the project instantly.



# curently working on making it work
# Continuous Deployment (Simulated)
# Simulated Blue-Green Deployment

Two folders (prod_deploy_blue/ and prod_deploy_green/)

One is active (serving users), and the other is updated

You manually switch the active folder to simulate zero-downtime deployments

# Rollback

If the new version fails, switch back to the old folder

This provides a basic but effective rollback mechanism

# Workflow Diagram
Dev pushes code → GitHub

GitHub Actions triggers CI

If tests pass → run Ansible locally to simulate CD

Copy app to prod_deploy_green or prod_deploy_blue

Manual folder switch = Blue-Green switch

Manual rollback = revert folder switch

