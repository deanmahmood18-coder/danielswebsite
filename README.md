# Daniel Stoican Raj - Sponsor Site

Premium sponsor-focused promotional website for an amateur boxer preparing to turn pro.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy (Vercel)

```bash
npm install
npm run build
```

Then deploy with the Vercel CLI or connect the repo in the Vercel dashboard.

## TODO

- Replace placeholder images and YouTube embed ID.
- Replace `https://example.com` with the live domain in metadata and sitemap.
- Swap the placeholder PDF at `public/media-kit/Daniel_Stoican_Raj_Media_Kit.pdf` for the real media kit.
- Configure SMTP for the contact API route (Nodemailer).
- Update training environment and team details (coach, gym, location).
- Add real sponsor logos once confirmed.

## Email configuration (SMTP)

Set these environment variables locally and in Vercel:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `SMTP_TO`
