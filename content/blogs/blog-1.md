---
title: Building My Portfolio with Next.js
date: 2025-07-10
summary: How I built and deployed my personal website using Next.js, Tailwind and Vercel.
---

Creating a developer portfolio is one of the best ways to showcase your skills, projects, and personality to the world. In this blog, I’ll walk you through how I built my own portfolio site using **Next.js**, **Tailwind CSS**, and deployed it seamlessly with **Vercel**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Forms & Email:** EmailJS + Sonner for toasts
- **Deployment:** Vercel

---

## 🛠️ Step 1: Setting Up the Project

I started by creating a new Next.js project using the latest version and chose the **App Router** and **Tailwind CSS** during setup. After creating the project, I initialized a Git repository and connected it to GitHub.

---

## 🎨 Step 2: Configuring Tailwind CSS

Tailwind CSS came pre-configured from the Next.js setup. I made sure the `tailwind.config.js` and `globals.css` were present, then added custom theme colors like `primary` and `primary-dark` for consistent styling across the site.

---

## 🧱 Step 3: Creating the Layout

I structured the base layout using a root layout file that includes a navbar at the top, the main content in the middle, and a footer at the bottom. I also integrated the **Sonner** toast system for form feedback and applied a Google font (Inter) globally.

---

## 📇 Step 4: Pages & Components

I created a homepage that welcomes visitors and introduces myself. I also built a simple responsive Navbar and Footer using Tailwind classes. These components maintain a consistent look and feel throughout the site.

---

## 📬 Step 5: Contact Page with EmailJS

For the contact page, I used **EmailJS** to handle form submissions without needing a backend. I built a simple form for name, email, and message fields. On form submission, EmailJS sends the data to my configured email template. Toast messages from **Sonner** notify the user of success or failure.

---

## 🌍 Step 6: Domain & Deployment with Vercel

Once everything was ready, I pushed the code to GitHub and connected my repository to **Vercel** for deployment. I configured environment variables required for EmailJS and added my custom domain purchased from **Namecheap**. In Namecheap, I updated the DNS settings to point to Vercel using the `cname.vercel-dns.com` record.

---

## ✅ Final Touches

- Added a favicon to enhance the browser tab look.
- Included social icons and links in the footer and contact page.
- Used responsive design features of Tailwind to make the site mobile-friendly.
- Optimized SEO by updating metadata like title and description in layout files.

---

Feel free to fork my repo and start customizing it for your own personal brand!

**Live Site → [shaurya.space](https://shaurya.space)**

**GitHub Repo → [github.com/Shaurya8425/portfolio](https://github.com/Shaurya8425/portfolio)**
