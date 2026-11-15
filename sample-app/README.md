# Sample Application for GitLab CI/CD

A simple Node.js Express application used to demonstrate GitLab CI/CD pipelines.

## 🚀 Quick Start

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the application**
   ```bash
   npm start
   ```

3. **Access the application**
   Open http://localhost:3000 in your browser

### Docker

1. **Build the image**
   ```bash
   docker build -t gitlab-sample-app .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 -e IMAGE_NAME="Local Docker" gitlab-sample-app
   ```

## 📁 Project Structure

```
sample-app/
├── server.js              # Express server
├── package.json           # Node.js dependencies
├── Dockerfile             # Docker configuration
├── .gitlab-ci.yml         # GitLab CI/CD pipeline
├── public/
│   └── index.html         # Frontend interface
└── README.md             # This file
```

## 🔧 Environment Variables

- `PORT`: Server port (default: 3000)
- `IMAGE_NAME`: Name of the Docker image running the app
- `NODE_ENV`: Environment (development/production)

## 📊 API Endpoints

- `GET /`: Serves the frontend
- `GET /api/image`: Returns image information
- `GET /health`: Health check endpoint

## 🐳 GitLab CI/CD Pipeline

The pipeline includes the following stages:

1. **install**: Install Node.js dependencies
2. **build**: Build the application
3. **test**: Run tests (placeholder)
4. **build_push_gitlab**: Build and push Docker image to GitLab Registry
5. **deploy**: Deploy to Kubernetes (manual trigger)

## 🔐 Required GitLab Variables

Configure these in GitLab (Settings > CI/CD > Variables):

- `CI_REGISTRY_USER`: GitLab username
- `CI_REGISTRY_PASSWORD`: GitLab password/access token
- `KUBE_CONTEXT`: Kubernetes context for deployment

## 📝 Notes

- This is a demonstration application
- Modify the pipeline according to your needs
- Always test in development before production deployment
