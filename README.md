# Linea-Hub Monorepo

This repository is a **Turborepo** monorepo containing a **Next.js** frontend, a **NestJS** backend, shared configurations, and infrastructure code managed with **Terraform**.

## 📂 Project Structure

```
repo-root/
├── apps/
│   ├── api/        # NestJS backend
│   ├── web/        # Next.js frontend
│
├── packages/
│   ├── eslint-config/  # Shared ESLint configuration
│   ├── tsconfig/       # Shared TypeScript configuration
│   ├── ui/             # Shared UI components (React)
│
├── infrastructure/
│   ├── terraform/      # Infrastructure as Code (Terraform)
│
├── .husky/         # Git hooks (Husky)
├── turbo.json      # Turborepo configuration
├── package.json    # Root package.json
└── README.md       # Documentation
```

## 🚀 Getting Started

### 1️⃣ Install Dependencies

Run the following command to install all dependencies for the monorepo:

```sh
npm install
```

### 2️⃣ Run Development Servers

Start both **frontend** and **backend** in parallel:

```sh
npm run dev
```

Or start them individually:

```sh
npm run dev --filter=web   # Start Next.js app
npm run dev --filter=api   # Start NestJS app
```

### 3️⃣ Build the Project

To build all packages and apps:

```sh
npm run build
```

### 4️⃣ Lint & Format Code

To lint and format the codebase:

```sh
npm run lint
npm run lint:fix
```

### 5️⃣ Generate New UI Component

To generate a new component inside the `ui` package:

```sh
cd packages/ui && npm run generate
```

### 6️⃣ Generate New Shared ts file

To generate a new component inside the `ui` package:

```sh
cd packages/shared && npm run generate
```

## 🛠 Deployment (WIP)

This project uses **Docker Compose** for local development and Terraform for infrastructure provisioning.

### Running with Docker Compose

Ensure Docker is installed, then run:

```sh
docker-compose up --build
```

### Deploying Infrastructure with Terraform

Navigate to the infrastructure folder and run:

```sh
cd infrastructure/terraform
terraform init
terraform apply
```

## ✅ Pre-commit Hooks (Husky)

This repository uses **Husky** to enforce linting and formatting before commits. Hooks are installed automatically when running `npm install`.

To manually install Husky:

```sh
npx husky install
```

## 📜 License

This project is licensed under [Apache 2.0 License](LICENSE).

---

### 🎯 Future Improvements

- Creation of the Docker Compose
- Add CI/CD pipeline
- Implement testing framework for backend and frontend
- Enhance component library in `ui` package
