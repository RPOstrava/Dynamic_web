What will be the project creation process

A simple web application that will have 2-3 buttons. Each button will change the text of the page.
The application will then be able to send output to Jenkins.

Using Docker:

The application is packaged in a Docker image.
Docker Compose for easy local launch and testing of the application.

Deploying to Docker Swarm:

Creating a Docker Swarm cluster on a local environment using Docker Desktop.
Deploying a Go application to this cluster.

Deploying to Kubernetes using Terraform:

Terraform will be used to create a Kubernetes cluster (on a local environment or using Minikube or K3s). Creating Kubernetes configurations. 

Automation using Ansible:

Ansible playbooks to automate application deployment and container management.

Jenkins CI/CD pipeline:

Jenkins will be used to automate building a Docker image, pushing it to a Docker registry, and deploying the application to the Kubernetes cluster.
Jenkins will also automatically test the application on each commit.

Using Helm:

Creating Helm charts to deploy the application to Kubernetes and managing them using Helm release.