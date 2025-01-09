# Kidstick Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 🚀 Project Description

Kidstick is a web application designed to provide an interactive and engaging platform for kids to learn and play.

### 🛠️ Setup Instructions

First, clone the repository:

```bash
git clone https://github.com/hbkabir004/KIDSTICK.git
cd kidstick-nextjs
```

Then, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### 📂 Folder Structure

```plaintext
kidstick-nextjs/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   ├── components/
│   │   ├── ActivityCarousel/
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── Blog/
│   │   │   ├── BlogCard.tsx
│   │   │   └── index.tsx
│   │   ├── ChoseForKids/
│   │   │   └── index.tsx
│   │   ├── CommingSoon/
│   │   │   ├── SocialIcon.tsx
│   │   │   └── index.tsx
│   │   ├── common/
│   │   │   └── Heading.tsx
│   │   ├── ContactUs/
│   │   │   └── index.tsx
│   │   ├── Event/
│   │   │   ├── EventCard.tsx
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── FAQ/
│   │   │   ├── FaqAccordion.tsx
│   │   │   └── index.tsx
│   │   ├── Footer/
│   │   │   └── index.tsx
│   │   ├── Gallery/
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── Hero/
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── ImageCollage/
│   │   │   └── index.tsx
│   │   ├── JoinKidstick/
│   │   │   └── index.tsx
│   │   ├── MakeChildrenLife/
│   │   │   └── index.tsx
│   │   ├── NavBar/
│   │   │   └── index.tsx
│   │   ├── Offer/
│   │   │   ├── GoldCard.tsx
│   │   │   ├── index.tsx
│   │   │   ├── OfferList.tsx
│   │   │   ├── PlatinumCard.tsx
│   │   │   └── SilverCard.tsx
│   │   ├── OurApproach/
│   │   │   └── index.tsx
│   │   ├── Product/
│   │   │   └── ProductCard.tsx
│   │   ├── Services/
│   │   │   ├── index.tsx
│   │   │   └── ServiceCard.tsx
│   │   ├── Shop/
│   │   │   ├── index.tsx
│   │   │   └── ProductCard.tsx
│   │   ├── Statistics/
│   │   │   ├── index.css
│   │   │   ├── index.tsx
│   │   │   └── StatCounter.tsx
│   │   ├── Teacher/
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── Testimonial/
│   │   │   ├── index.css
│   │   │   ├── index.tsx
│   │   │   └── TestimonialCard.tsx
│   │   ├── withAnimation.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── fonts/
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── service/
│   │   └── page.tsx
├── node_modules/
├── public/
│   ├── images/
│   │   ├── activities/
│   │   │   ├── 01.jpg
│   │   │   ├── 02.jpg
│   │   │   ├── 03.jpg
│   │   │   ├── 04.jpg
│   │   │   ├── banner-shape.png
│   │   │   └── bg-circle.png
│   │   ├── blogs/
│   │   │   ├── apple-live.png
│   │   │   └── pink-rainbow.png
│   │   ├── contact-us/
│   │   │   ├── bg-circle.png
│   │   │   ├── design-rotate.png
│   │   │   ├── kid01.jpg
│   │   │   ├── kid02.jpg
│   │   │   ├── pen.png
│   │   │   └── pencil.png
│   │   ├── faq/
│   │   │   ├── app-store.png
│   │   │   ├── bg-faq.png
│   │   │   ├── playstore.png
│   │   │   └── support.jpg
│   │   ├── footer/
│   │   │   ├── applepay.jpg
│   │   │   ├── backpack.png
│   │   │   ├── Email_Icon.png
│   │   │   ├── gpay.jpg
│   │   │   ├── Home_Icon.png
│   │   │   ├── logo.png
│   │   │   ├── mastercard.jpg
│   │   │   ├── paypal.jpg
│   │   │   ├── Phone_Icon.png
│   │   │   ├── visa.jpg
│   │   │   └── bg-footer.png
│   │   ├── hero/
│   │   │   ├── bg-grass.png
│   │   │   ├── grass.png
│   │   │   ├── planet.png
│   │   │   ├── pulse.png
│   │   │   ├── rainbow.png
│   │   │   ├── raising-hands.png
│   │   │   ├── stars.png
│   │   │   ├── sun.png
│   │   │   └── tiger.png
│   │   ├── image-collage/
│   │   │   ├── 01.png
│   │   │   ├── 02.png
│   │   │   ├── 03.png
│   │   │   ├── 04.png
│   │   │   └── 05.png
│   │   ├── join-kidstick/
│   │   │   ├── bird.png
│   │   │   ├── cloud.png
│   │   │   ├── color-start.png
│   │   │   ├── grass.png
│   │   │   └── smilingkids.png
│   │   ├── make-children/
│   │   │   ├── bg-make-children.png
│   │   │   └── girl.png
│   │   ├── offer/
│   │   │   ├── bg-gold.png
│   │   │   ├── bg-platinum.png
│   │   │   ├── bg-silver.png
│   │   │   ├── bullet.png
│   │   │   ├── dotted-banner.png
│   │   │   ├── gold-badge.png
│   │   │   ├── orange-star.png
│   │   │   ├── platinum-badge.png
│   │   │   ├── rubiks_cube.png
│   │   │   ├── star-badge.png
│   │   │   └── sunflower.png
│   │   ├── our-approach/
│   │   │   ├── bg-approach.png
│   │   │   ├── bg-group-img.png
│   │   │   ├── green-star.png
│   │   │   ├── image_4.jpg
│   │   │   ├── image_5.jpg
│   │   │   ├── image_6.jpg
│   │   │   ├── image_7.jpg
│   │   │   ├── orange-star.png
│   │   │   ├── top-left.png
│   │   │   ├── top-right.png
│   │   │   └── circle.png
│   │   ├── our-gallery/
│   │   │   ├── 01.jpg
│   │   │   ├── 02.jpg
│   │   │   └── bg-gallery.png
│   │   ├── products/
│   │   │   ├── design-rotate.png
│   │   │   └── left-side.png
│   │   ├── services/
│   │   │   └── bg-services.png
│   │   ├── stats/
│   │   │   ├── ameba.png
│   │   │   ├── bg-stat.png
│   │   │   ├── fish.png
│   │   │   └── octopus.png
│   │   ├── teachers/
│   │   │   ├── 01.jpg
│   │   │   ├── 02.jpg
│   │   │   ├── 03.jpg
│   │   │   ├── design-rotate.png
│   │   │   ├── oval.png
│   │   │   └── bg-teachers.png
│   │   ├── testimonials/
│   │   │   ├── bg-left.png
│   │   │   └── bg-right.png
│   │   └── badge.png
├── styles/
├── .eslintrc.json
├── .gitignore
├── .vscode/
│   └── settings.json
├── next.config.js
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
```

### 📄 API Documentation

For detailed API documentation, please refer to the [Kidstick-Server Documentation](https://github.com/hbkabir004/KIDSTICK/blob/main/kidstick-server/Readme.md).

### 🌐 Live Deployment

Check out the live deployment of this project at [https://kidstick.vercel.app](https://kidstick.vercel.app).
