
# 🚀 CI/CD Midterm – Node.js Express App

This project demonstrates a complete CI/CD pipeline using GitHub Actions to build, test, lint, and deploy a Node.js Express application. Docker images are automatically built and pushed to DockerHub with branch-based tagging.

---

## 🧱 Tech Stack

- Node.js (Express)
- Jest (Unit Testing)
- ESLint (Linting)
- Docker
- GitHub Actions
- DockerHub (Image Registry)

---

## 🛠️ Project Setup

```bash
git clone https://github.com/<your-username>/express-ci-cd-midterm.git
cd express-ci-cd-midterm
npm install
```

---

## 🚀 Run the App Locally

```bash
npm start
```

Open your browser and visit:  
👉 `http://localhost:3000` → You should see `Hello from CI/CD App!`

---

## ✅ Run Unit Tests

```bash
npm test
```

- 4 tests check root endpoint, health check, 404, and content type.
- Sample test file: `tests/app.test.js`

---

## 📦 Linting with ESLint

```bash
npm run lint
```

Ensures code quality and best practices using ESLint.

---

## 🐳 Docker Commands

### 🔨 Build Docker Image

```bash
docker build -t express-ci-cd .
```

### ▶️ Run Docker Container

```bash
docker run -p 3000:3000 express-ci-cd
```

Then open: [http://localhost:3000](http://localhost:3000)

---

## 🚦 CI/CD Pipeline

GitHub Actions automates the following stages:

| Stage       | Description                                      |
|-------------|--------------------------------------------------|
| 🛠️ Install   | Install Node dependencies                        |
| ✅ Test      | Run all Jest unit tests                          |
| 🧹 Lint      | Run ESLint to enforce code standards             |
| 🐳 Docker    | Build and push image to DockerHub                |
| 🚀 Deploy    | Auto-deploy tagged image (dev or latest)         |

---

## 🔀 Branch-Based Deployment

| Branch    | Docker Tag | Deployment Strategy     |
|-----------|-------------|--------------------------|
| `develop` | `dev`       | Auto on push             |
| `main`    | `latest`    | Manual via GitHub UI     |

---

## 🔐 Required GitHub Secrets

| Secret Name       | Description                            |
|-------------------|----------------------------------------|
| `DOCKER_USERNAME` | Your DockerHub username                |
| `DOCKER_PASSWORD` | DockerHub password or access token     |

---

## 🧪 Sample Endpoints

| Endpoint      | Description             |
|---------------|-------------------------|
| `/`           | Returns "Hello from CI/CD App!" |
| `/health`     | Returns `{ status: "OK" }`      |
| `/nonexistent`| Returns 404 page         |

---

## 📸 Screenshot Checklist

| Screenshot | Description |
|------------|-------------|
| ✅ #1       | App running in browser (`http://localhost:3000`) |
| ✅ #2       | Terminal showing `App listening at http://localhost:3000` |
| ✅ #3       | Tests passing (4 total) |
| ❌ #4       | (Optional) Test failure |
| ✅ #5       | Linting success |
| ❌ #6       | (Optional) Lint error |
| ✅ #7       | GitHub repo with `develop` branch |
| ✅ #8       | GitHub secrets added |
| ✅ #9       | CI pipeline running in GitHub Actions |
| ✅ #10      | Logs from lint/test/build steps |
| ✅ #11      | DockerHub repo with image and `dev` tag |
| ✅ #12      | Manual deployment triggered |
| ✅ #13      | DockerHub repo with `latest` tag |
| ✅ #14      | README preview in VS Code |

---

## 📬 Author

**Durlabh Tilavat**  
GitHub: [@yourusername](https://github.com/yourusername)  
Student ID: *[Your ID if needed]*  
Course: PROG8860 – CI/CD – Midterm Practical  
