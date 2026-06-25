# Clarus IT Solutions — Corporate Website

A premium, fully responsive corporate website for **Clarus IT Solutions**, a company
providing enterprise IT services and business consulting while building global
business-partnership opportunities.

Built with **React 19 + Vite 8 + Tailwind CSS v4**. Frontend only — no backend
required. The enquiry form validates fully on the client and simulates submission.

## Highlights

- Enterprise-grade design: royal purple + violet palette on a soft premium aurora
  background, glassmorphism, and a polished type system (Poppins headings + logo,
  Inter body & buttons).
- Smooth scroll-reveal animations, animated stat counters, sticky scroll-spy navbar,
  auto-rotating testimonials, marquee logos, and tasteful micro-interactions.
- Fully responsive — mobile, tablet, and desktop — with an accessible mobile menu.
- Respects `prefers-reduced-motion`.
- Custom dependency-free SVG icon system (no icon library).

## Sections

Hero · About Us · IT Services · Consulting Services · Why Choose Clarus ·
Global Partnership Process · Industries We Serve · Technologies ·
Client Testimonials · Business Opportunities · Enquiry Form · Contact · Footer.

## Project structure

```
src/
  components/
    ui/            Reusable primitives: Icon, Button, Reveal, Counter, Section
    Navbar.jsx     Sticky glass nav with scroll-spy + mobile menu
    Footer.jsx     Multi-column elegant footer
    Logo.jsx       Brand mark + wordmark
    BackToTop.jsx  Floating scroll-to-top button
  sections/        One file per page section
  hooks/           useScrollReveal, useCountUp
  data/content.js  Single source of truth for all copy & lists
  index.css        Tailwind v4 theme tokens, animations, utilities
  App.jsx          Composes the page
```

Edit copy in `src/data/content.js` — most content changes need no component edits.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start dev server (HMR)
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## The enquiry form

Captures Company Name, Contact Person, Designation, Email, Phone Number, Country,
Industry, Interested Service, and Project Details. Validation runs on blur and on
submit (required fields, email & phone format, minimum project detail length),
focuses the first invalid field, and shows a success state on completion.
Wire the `onSubmit` handler in `src/sections/EnquiryForm.jsx` to a real endpoint
when a backend is available.
