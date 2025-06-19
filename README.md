# CI/CD Midterm - Node.js Express App

## 🛠 Project Setup

```bash
git clone <your-repo-url>
cd express-ci-cd-midterm
npm install
```

## 🚀 Run App Locally

```bash
npm start
```

## ✅ Run Unit Tests

```bash
npm test
```

## 📦 Lint Check

```bash
npm run lint
```

## 🐳 Docker Build & Run

```bash
docker build -t express-ci-cd .
docker run -p 3000:3000 express-ci-cd
```

## 🔄 CI/CD Workflow

- Auto deploy to **dev** on `develop` branch push
- Manual trigger deploys to **prod**
- Docker image is built & pushed to DockerHub

## 🔐 Required GitHub Secrets

- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

## 📸 Screenshot Checklist

- CI running on push to `develop`
- Lint failure snapshot
- Test failure snapshot
- Docker image on DockerHub
- GitHub Action summary
