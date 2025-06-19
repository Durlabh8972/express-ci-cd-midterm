
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
git clone https://github.com/Durlabh8972/express-ci-cd-midterm
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
| `DOCKER_USERNAME` | durlabh123                             |
| `DOCKER_PASSWORD` | Dktdkt@1995                            |

---

## 🧪 Sample Endpoints

| Endpoint      | Description             |
|---------------|-------------------------|
| `/`           | Returns "Hello from CI/CD App!" |
| `/health`     | Returns `{ status: "OK" }`      |
| `/nonexistent`| Returns 404 page         |

---

## 📸 Screenshots

 ✅ #1: App running in browser (`http://localhost:3000`) 

![image](https://github.com/user-attachments/assets/3b12dfe2-e9f1-4eea-bfe2-fe7e28b3e4b6)

✅ #2:  Terminal showing `App listening at http://localhost:3000` 

![image](https://github.com/user-attachments/assets/12958888-a881-4714-b070-87520f08ef16)

✅ #3: Tests passing (4 total)

![image](https://github.com/user-attachments/assets/beede758-9bc7-486f-b5e5-e8175e11b24d)

✅ #4: Linting success

![image](https://github.com/user-attachments/assets/b04a59d2-f652-47bc-98f9-b921c30387b4)

✅ #5: Repo showing the develop branch with all files: Push the code on GIT Repo.

 ![image](https://github.com/user-attachments/assets/87294f4d-2edc-44a8-8247-a6ef6818efd8)

✅ #6: GitHub secrets added

![image](https://github.com/user-attachments/assets/191c2fb6-14c2-43ca-acfc-c855a87d77e4)


✅ #7: CI pipeline running in GitHub Actions

![image](https://github.com/user-attachments/assets/f8a0f11d-33fa-4d48-a5f1-d06c605cffa4)

![image](https://github.com/user-attachments/assets/c717c0e6-680b-4759-886c-763c1fd46b8f)

✅ #8: Logs from lint/test/build steps

![image](https://github.com/user-attachments/assets/7b916186-6fd2-4f3d-85f8-35707a36ca72)

![image](https://github.com/user-attachments/assets/4ecb80ef-7be0-40b3-951f-43e2334b90b7)

✅ #9: DockerHub repo with image

![image](https://github.com/user-attachments/assets/58562fd3-24d4-4219-aa0c-4f1bb580589c)

✅ #10: DockerHub repo with image and `dev` tag

![image](https://github.com/user-attachments/assets/27a2067a-a459-4c9a-a16c-db7b6992a2fb)

✅ #11: Manual deployment triggered

![image](https://github.com/user-attachments/assets/a6e4de4a-7399-4bf6-a02b-7b137ce1950c)

✅ #12: DockerHub repo with `latest` tag

![image](https://github.com/user-attachments/assets/389f5b21-3c16-433f-b926-df722279004a)

---

## 📬 Author

**Durlabh Tilavat**  
GitHub: [@Durlabh8972](https://github.com/Durlabh8972/express-ci-cd-midterm)  
Student ID: *[8938972]*  
Course: PROG8860 – CI/CD – Midterm Practical  
