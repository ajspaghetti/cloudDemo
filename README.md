# cloudDemo Project ReadMe

* The purpose of this project is to build a sample eCommerce site that will be deployed to a multi-cloud environment. To ensure scalabity, Docker, Kubernetes, and Terraform will be utilized.
* The domain for this demo will be app.spagno.li
* The webApp will be built using Ruby on Rails as the backend, React as the frontend, and postgreSQL as the SQL database env.


# Project Outline
1. Setting Up the Development Environment
    * Ruby on Rails and React Setup
        - Install Ruby, Rails, and Node.js (for React) on computer.
        - Create a new Rails project: rails new ecommerce --webpack=react.
        - Ensure Rails app is running locally and can create a simple React component.
    * Dockerize Application
        - Create a Dockerfile for both the Rails and React parts of application.
        - Build Docker images and test them locally.

2. Infrastructure as Code (IaC) with Terraform
    * Terraform Setup
        - Install Terraform.
        - Write Terraform scripts to define infrastructure for both AWS and Azure.
        - This should include network setup, VMs, load balancers, etc.
    * Testing Infrastructure Locally
        - Test Terraform scripts locally using Terraform CLI.

3. Kubernetes (K8s) for Container Orchestration
    * K8s Setup
        - Understand the basics of Kubernetes.
        - Create Kubernetes manifests (YAML files) for application.
        - Test setup locally using Minikube or Docker Desktop's Kubernetes feature.
    * K8s Scaling
        - Ensure Kubernetes setup includes auto-scaling based on traffic.

4. Deploying to Cloud (AWS & Azure)
    * AWS Deployment
        - Use Terraform to deploy infrastructure to AWS.
        - Deploy Docker containers to AWS using Amazon EKS (Elastic Kubernetes Service).
    * Azure Deployment
        - Similarly, use Terraform to deploy to Azure.
        - Deploy Docker containers to Azure using Azure Kubernetes Service (AKS).

5. Domain Configuration and SSL Setup
    * Subdomain Setup
        - Configure https://spagno.li to point to load balancer in the cloud (AWS/Azure).
        - Ensure you have an SSL certificate for HTTPS.

6. Continuous Integration/Continuous Deployment (CI/CD)
    * CI/CD Pipeline
        - Use tools like Jenkins, GitHub Actions, or Azure Pipelines.
        - Set up a pipeline that takes code from repository to deployment automatically.

7. Testing and Monitoring
    * Post-Deployment
        - Conduct thorough testing of application in the cloud.
        - Set up monitoring and logging (using tools like Prometheus, Grafana, or cloud-specific tools).

8. Documentation and Maintenance
    * Documentation
        - Document architecture, setup, and deployment procedures.
        - *This is crucial for maintenance and possible scaling.
    * Regular Maintenance
        - Regularly update application and infrastructure for security and performance improvements.

# Ruby on Rails Notes

# React Redux Notes

# Docker Notes

# Azure Notes

# AWS Notes

# Kubernetes Notes

# Terraform Notes

# Additional Notes
* Consider security best practices at each step, especially when deploying to the cloud and managing databases.
* Be aware of the costs associated with cloud services and Kubernetes usage.

# Learning Resources
* Ruby on Rails and React: Official documentation, online tutorials (e.g., RailsGuides, React docs).
* Docker: Docker's official documentation.
* Terraform: Terraform's official documentation and guides.
* Kubernetes: Kubernetes official documentation, online courses.
* Cloud Platforms (AWS & Azure): Official documentation and tutorials provided by AWS and Azure.


Resources:
* https://www.npmjs.com/package/react-app-rewired
