#Architecture

<img width="1332" height="800" alt="Architecture" src="https://github.com/user-attachments/assets/912f1303-8df0-4331-b57c-938bf3e9dd5f" />

# GitLab CI/CD to EKS Deployment Project

A complete demonstration of deploying a Node.js application to Amazon EKS (Elastic Kubernetes Service) using GitLab CI/CD pipeline with Docker containerization.

## Project Overview

This project showcases a complete DevOps workflow:
- **Application**: Simple Node.js Express server with a web frontend
- **Containerization**: Docker image creation and management
- **CI/CD**: GitLab pipeline for automated building and deployment
- **Infrastructure**: Kubernetes deployment on AWS EKS
- **Registry**: GitLab Container Registry for image storage

## Project Structure

```
02-Demos/
├── 02-git-basics/              # Git integration with GitLab
│   ├── adding-files-server.md
│   └── adding-files-local.md
├── 03-pipeline-basics/        # Pipeline fundamentals
│   ├── understanding-pipeline.md
│   ├── pipeline-editor.md
│   ├── jobs-stage-format.md
│   ├── multiple-jobs-stages.md
│   ├── understanding-needs.md
│   ├── job-components.md
│   ├── linux-commands.md
│   ├── external-script.md
│   └── multiline-commands.md
├── 04-runners/                # GitLab Runner configuration
│   ├── default-runner.md
│   ├── self-managed-shell.md
│   └── self-managed-docker.md
├── 05-artifacts-variables/    # Artifacts and variables management
│   ├── artifacts.md
│   ├── variables.md
│   ├── project-variables.md
│   ├── file-variable.md
│   ├── predefined-variables.md
│   ├── skipping-jobs.md
│   └── manual-trigger.md
├── 06-rules-workflows/        # Pipeline rules and workflows
│   ├── rules-only.md
│   ├── workflow-keyword.md
│   ├── merge-requests.md
│   ├── scheduling.md
│   └── handling-failure.md
├── 07-docker-build/           # Docker image building and pushing
│   ├── running-locally.md
│   ├── dockerfile.md
│   ├── building-gitlab.md
│   ├── building-docker-images.md
│   ├── pushing-dockerhub.md
│   ├── versioning-docker.md
│   └── gitlab-registry.md
├── 08-kubernetes-deployment/  # Kubernetes deployment with EKS
│   ├── launch-eks.md
│   ├── gitlab-agent.md
│   ├── docker-registry-secret.md
│   ├── deployment-service.md
│   └── deploy-eks.md
└── sample-app/                # Sample Node.js application for testing
    ├── server.js
    ├── package.json
    ├── Dockerfile
    ├── .gitlab-ci.yml
    ├── .dockerignore
    ├── README.md
    ├── public/
    │   └── index.html
    └── k8s/
        ├── deployment.yaml
        └── service.yaml
```

## Application Details

### Node.js Application
- **Framework**: Express.js
- **Port**: 3000
- **Features**: 
  - Serves static HTML frontend
  - REST API endpoint (`/api/image`) to display Docker image name
  - Environment variable support for image name

### Files
- `server.js`: Express server with API endpoint
- `package.json`: Node.js dependencies and scripts
- `public/index.html`: Frontend with gradient styling and image display
- `Dockerfile`: Multi-stage Docker build configuration
- `.gitlab-ci.yml`: GitLab CI/CD pipeline definition
- `deployment.yaml`: Kubernetes deployment manifest
- `service.yaml`: Kubernetes service manifest (LoadBalancer)

## Prerequisites

- Node.js (v22 or later)
- Docker
- GitLab account with Container Registry enabled
- AWS account with EKS cluster
- kubectl configured for EKS access
- GitLab Agent installed in Kubernetes cluster

## Local Development

### 1. Clone and Setup
```bash
git clone <repository-url>
cd gitlab-node-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm start
```
Access the application at `http://localhost:3000`

## Docker Build

### Build Image
```bash
docker build -t gitlab-node-app:latest .
```

### Run Container
```bash
docker run -p 3000:3000 -e IMAGE_NAME=gitlab-node-app:latest gitlab-node-app:latest
```

## GitLab CI/CD Pipeline

### Pipeline Stages
1. **install**: Installs Node.js dependencies
2. **build_push_gitlab**: Builds Docker image and pushes to GitLab Container Registry
3. **deploy**: Deploys to EKS using kubectl

### Required Variables
Set these in GitLab CI/CD variables:
- `CI_REGISTRY_USER`: GitLab registry username
- `CI_REGISTRY_PASSWORD`: GitLab registry password (Personal Access Token)
- `KUBE_CONTEXT`: Kubernetes context name for EKS cluster

### Pipeline Execution
The pipeline automatically triggers on push to the repository:
- Builds Docker image with unique tag using `$CI_PIPELINE_IID`
- Pushes to GitLab Container Registry
- Updates Kubernetes deployment with new image
- Applies deployment and service manifests

## Kubernetes Deployment

### Prerequisites
1. Create Docker registry secret in Kubernetes:
```bash
kubectl create secret docker-registry gitlab-registry-secret \
  --docker-server=registry.gitlab.com \
  --docker-username=<username> \
  --docker-password=<password>
```

2. Configure GitLab Agent in your EKS cluster

### Deployment Manifests
- **deployment.yaml**: Defines 2 replicas with image pull secret
- **service.yaml**: LoadBalancer service with NLB type for internet-facing access

### Manual Deployment
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

## Architecture

```
GitLab Push → CI/CD Pipeline → Docker Build → GitLab Registry → EKS Deployment → LoadBalancer → Users
```

## Features

- **Automated CI/CD**: Complete pipeline from code to deployment
- **Image Versioning**: Unique image tags for each pipeline run
- **Kubernetes High Availability**: 2 replicas with LoadBalancer
- **GitLab Registry Integration**: Secure private container registry
- **Environment Variables**: Dynamic image name display in application
- **AWS NLB**: Network Load Balancer for optimal performance

## Troubleshooting

### Pipeline Failures
- Check GitLab CI/CD variables are correctly set
- Verify GitLab Container Registry permissions
- Ensure kubectl context is properly configured

### Deployment Issues
- Verify GitLab Agent is connected to EKS cluster
- Check Docker registry secret exists in Kubernetes
- Validate image pull permissions

### Access Issues
- Check LoadBalancer status: `kubectl get svc`
- Verify security groups allow traffic on port 80
- Check EKS cluster health
