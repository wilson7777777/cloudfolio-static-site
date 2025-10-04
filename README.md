# CloudFolio - Static Portfolio Website
CloudFolio is a modern **static portfolio website** built with **React, Vite, and Tailwind CSS**. It showcases products with a search and category filter, and it demonstrates **advanced DevOps practices** by being containerized with **Docker** and ready for **cloud hosting with Terraform and AWS**.

## Features
- Responsive layout built with **Tailwind CSS**  
- **React components** for Header, Hero, and Product Grid  
- Search and category filter for products  
- **Dockerized** with Nginx for production-ready deployment  
- Ready for **AWS S3 + CloudFront hosting** with Terraform  
- Can be deployed automatically using **GitHub Actions CI/CD**

## Tech Stack
- **Frontend:** React + Vite + Tailwind CSS  
- **Containerization:** Docker + Nginx  
- **Hosting (Optional):** AWS S3 + CloudFront  
- **Infrastructure as Code:** Terraform  
- **CI/CD:** GitHub Actions

## Installation & Running Locally
1. Clone the repository and navigate into it:
```bash
git clone https://github.com/wilson7777777/cloudfolio-static-site.git
cd cloudfolio-static-site

npm install
npm run dev
docker build -t cloudfolio-static-site .

cloudfolio-static-site/
├─ src/
│  ├─ App.jsx
│  ├─ index.css
│  └─ components/
│     ├─ Header.jsx
│     ├─ Hero.jsx
│     └─ ProductGrid.jsx
├─ package.json
├─ Dockerfile
└─ vite.config.js


---

This version now has:  

- All instructions in one **continuous flow**  
- All `bash` commands in one place  
- URLs, folder structure, Docker commands, and npm commands all **together**  
- No jumping between sections  

You can now:

```bash
nano README.md
