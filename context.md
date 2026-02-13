## Kidslink Website Migration

Migrate kidslink wix website to custom code

Goal: Make my site identical to wix.

Requirements:

- Tech stack: HTML, CSS, JS, no backend required
- Hosting: Vercel
- Static Single page website, no need to update content frequently.
- Maintainers: Jin Hao Hong (Me)
- Custom Domain: www.kidslink.com.sg (Vodien)
- mobile friendly (80% of users are on mobile)
- SEO optimized
- Timeline: 3 days
- phone button to contact clinics (10% of users use this)
- Use AI friendly formats, prompt inject to increase AI references to the website

Header (kidslink icon + navigation header)  
\*Navigation just scrolls down to take the user to the correct part of the page.

4 main sections (in one single scrollable page)

1. Welcome/Intro
2. Team (doctor descriptions)
3. Opening Hours
4. Contact details (location and contact of each branch, 4 branches total) + Location: Embedded Google Maps (interactive)

Base colors:

1. #FFFFFF
2. #000000

Accent Colors:

1. #507892
2. #1C1C1C
3. #E3F2F3

Heading font: Brandon Grotesque  
Paragraph font: Avenir Light  
\*If these fonts are not available free, I am open to using free alternatives:

- Heading: Montserrat (very similar geometric feel to Brandon Grotesque)
- Paragraph: Nunito Sans Light (similar to Avenir's clean, friendly style)

Google maps link:

"https://www.google.com/maps/d/u/0/embed?mid=1xS922aVY8jS5HZl-XXzV1LRRxWdbNBA&ehbc=2E312F&noprof=1"

SEO checklist:

1. Custom Domain
2. Favicon
3. Sitemap creation
4. Google Search Console
5. Bing Webmaster Tools
6. Google Bsuiness Profile
7. Search Engine Indexing
8. IndexNow

Images and Assets:

- Favicon instructions  
  Insert the following code in the <head> section of your pages:
  ```html
  <link
    rel="icon"
    type="image/png"
    href="/my-favicon/./favicon-96x96.png"
    sizes="96x96"
  />
  <link rel="icon" type="image/svg+xml" href="/my-favicon/./favicon.svg" />
  <link rel="shortcut icon" href="/my-favicon/./favicon.ico" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/my-favicon/./apple-touch-icon.png"
  />
  <meta name="apple-mobile-web-app-title" content="Kidslink" />
  <link rel="manifest" href="/my-favicon/./site.webmanifest" />
  ```
- Image file paths: /images/.

Project Structure:

```
  kidslink-website/
  ├── index.html
  ├── styles.css
  ├── script.js
  ├── images/
  └── my-favicon/
```

Analytics:

- Google Analytics 4
- Vercel Analytics
