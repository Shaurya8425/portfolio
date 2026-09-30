# byshaurya.com

Personal portfolio of **Shaurya Yadav**, a CSE undergraduate and full-stack
developer. The site brings together shipped products, experiments, technical
writing, open-source activity, and ways to get in touch.

**Live site:** [byshaurya.com](https://byshaurya.com)

## What is here

- **Home** — introduction, current interests, and selected work.
- **About** — education, experience, skills, leadership, and [resume](public/docs/shaurya-yadav-resume.pdf).
- **Projects** — detailed links for the products below.
- **Blog** — build notes and technical writing.
- **Glance** — live GitHub profile statistics and contribution activity.
- **Contact** — a server-side contact form and direct social links.

## Featured work

| Project | What it does | Stack |
| --- | --- | --- |
| [HostelMS](https://hostelms.byshaurya.com) | Manages student registration, complaints, fees, and room allocation for railway-hostel operations. | React, Hono, PostgreSQL, Render, Vercel |
| [InkFlow](https://inkflow.byshaurya.com) | A focused publishing space for writing, connecting, and sharing stories. | Node.js, React, Tailwind, Cloudflare, Vercel |
| [BGRemoveIO](http://bgremove.byshaurya.com) | Removes backgrounds and extracts signatures or text privately in the browser. | Astro, ONNX Runtime Web, TypeScript, Canvas |

Notable implementation work includes JWT and role-based workflows in HostelMS,
normalized PostgreSQL schemas and REST APIs in InkFlow, and a fully client-side
ONNX/Canvas processing pipeline in BGRemoveIO.

## Technical profile

- **Backend and data:** Node.js, Express, Hono, REST APIs, PostgreSQL, SQL optimization, relational schema design
- **Frontend:** React, Tailwind CSS, HTML, CSS
- **Languages:** JavaScript, C, C++
- **Tools and practices:** Git, GitHub, Vercel, Cloudflare, CI/CD, DSA, OOP, technical documentation

Shaurya is pursuing a **B.Tech in Computer Science at the University of
Lucknow (2022–2026)** and interned at **Northern Railway, Locomotive Workshop**
in July–August 2025. He also led a 7–8 person team building HostelMS and
helped organize the 200+ developer Zero's Arena Hackathon.

## Built with

Next.js, React, TypeScript, Tailwind CSS, Framer Motion, next-themes, React
Icons, Sonner, Remark/rehype, and React GitHub Calendar tooling.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Other useful commands:

```bash
npm run build
npm run start
```

The application code lives under [`src/app`](src/app), shared UI is in
[`components`](components), and site metadata is in [`config`](config).

### Contact form configuration

The contact form posts to `/api/contact` and sends through EmailJS. Add these
deployment-specific values to `.env.local`:

```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template can use `name`, `from_name`, `email`, `from_email`,
`reply_to`, and `message`.

## Deployment

The site is designed for deployment on [Vercel](https://vercel.com). GitHub
profile and contribution data are fetched at runtime and cached where
appropriate; the contact credentials above should be configured as production
environment variables.
