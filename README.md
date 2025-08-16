Deploying MERN Application with GitHub Actions, Terraform, and Docker on AWS

Overview

This project demonstrates how to deploy a MERN (MongoDB, Express.js, React.js, Node.js) application on AWS using GitHub Actions, Terraform, and Docker. The deployment process includes CI/CD automation, containerization, and infrastructure as code (IaC) to ensure a smooth and scalable deployment.

Technologies Used
	•	AWS (EC2, S3, IAM, VPC, Security Groups)
	•	Terraform (Infrastructure provisioning)
	•	Docker (Containerization)
	•	GitHub Actions (CI/CD pipeline)
	•	Node.js (Backend)
	•	React.js (Frontend)
	•	MongoDB (Database)

Architecture

The deployment follows a structured architecture:
	1.	Frontend (React) is containerized using Docker.
	2.	Backend (Node.js + Express) is also containerized.
	3.	MongoDB can be either self-hosted on AWS EC2 or use AWS DocumentDB/Atlas.
	4.	Infrastructure is managed using Terraform, which provisions:
	•	EC2 instances to run containers
	•	Security Groups to allow necessary traffic
	•	VPC for networking
	•	IAM roles and policies
	5.	CI/CD with GitHub Actions automates:
	•	Code build
	•	Docker image creation
	•	Image push to Docker Hub
	•	Terraform execution for infrastructure setup

Prerequisites

Before running this project, ensure you have:
	•	An AWS account with necessary IAM permissions
	•	Terraform installed (Install Terraform)
	•	Docker installed (Install Docker)
	•	A GitHub repository with GitHub Actions enabled
	•	Docker Hub account for storing images

Setup & Usage

1. Clone the Repository

git clone https://github.com/jimmyptl-jer/Deploying-MERN-Application-with-Github-Action-Terraform-and-Docker-on-AWS.git
cd Deploying-MERN-Application-with-Github-Action-Terraform-and-Docker-on-AWS

2. Configure Terraform
	•	Modify the terraform.tfvars file with your AWS credentials and desired configurations.
	•	Initialize Terraform:

terraform init
terraform plan
terraform apply -auto-approve

3. Set Up GitHub Secrets

In your GitHub repository, navigate to Settings → Secrets and Variables → Actions and add:

Secret Name	Description
AWS_ACCESS_KEY_ID	AWS IAM access key
AWS_SECRET_ACCESS_KEY	AWS IAM secret key
DOCKER_USERNAME	Docker Hub username
DOCKER_PASSWORD	Docker Hub password

4. GitHub Actions Workflow

The CI/CD pipeline will:
	•	Build the frontend and backend Docker images
	•	Push them to Docker Hub
	•	Deploy the infrastructure using Terraform
	•	SSH into EC2 and pull the latest images

To trigger the pipeline, push code to the repository:

git add .
git commit -m "Updated application"
git push origin main

5. Deploy and Access the Application
	•	Once the deployment is complete, retrieve the public IP of the EC2 instance:

terraform output

	•	Open the frontend URL in your browser:

http://<EC2_PUBLIC_IP>

CI/CD Pipeline Workflow
	1.	Trigger: On push to the main branch
	2.	Build Stage:
	•	Lint & test the code
	•	Build Docker images for frontend & backend
	3.	Push to Docker Hub
	4.	Deploy Stage:
	•	Terraform applies infrastructure changes
	•	SSH into EC2, pull images, and restart containers

Cleanup

To destroy the AWS resources and avoid unnecessary costs:

terraform destroy -auto-approve

Future Improvements
	•	Add Load Balancer (ALB) for better traffic handling
	•	Use ECS/EKS instead of EC2 for container orchestration
	•	Implement CloudWatch for monitoring and logging
	•	Secure MongoDB using AWS DocumentDB

License

This project is open-source and available under the MIT License.
