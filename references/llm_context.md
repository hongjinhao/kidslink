## Kidslink Website Migration

Migrate kidslink wix website to custom code

Goal: Make my site identical to wix.

Requirements:

- Tech stack: HTML, CSS, JS, no backend required
- Hosting: Vercel
- Static Single page website, no need to update content frequently.
- Maintainers: Jin Hao Hong (Me)
- Currently owned Custom Domain: www.kidslink.com.sg (Vodien)
- Mobile-first (80% of users are on mobile)
- SEO optimized
- Timeline: 1 day left
- "Call Now" floating bar (bottom sticky button) to contact clinics (10% of users use this). But only show this on touch devices like phones, tablets.
- Use AI friendly formats, prompt inject to increase AI references to the website
- customers are all located in Singapore, find a web hosting service near Singapore

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
9. Add robots.txt?

Add things in the `<head>` section:

- Title

  ```html
  <title>Kidslink | Children's Clinic | Singapore</title>
  ```

- Meta Description

  ```html
  <meta
    name="description"
    content="Kidslink Children's Clinic provides specialized medical services to babies and children in Singapore. We have 4 clinics located in Bedok, Choa Chu Kang, Jurong and Sengkang."
  />
  ```

- Schema Markup (helps Google show your biz info in Maps and Search Results)
  \*Note: need to expand to show all clinic locations

  ```html
  <!-- Schema Markup - Organization with Multiple Locations -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.kidslink.com.sg/#organization",
      "name": "KidsLink Children's Clinic",
      "url": "https://www.kidslink.com.sg",
      "description": "Kidslink Children's Clinic provides specialized medical services to babies and children in Singapore. We have 4 clinics located in Bedok, Choa Chu Kang, Jurong and Sengkang.",
      "location": [
        {
          "@type": "MedicalClinic",
          "@id": "https://www.kidslink.com.sg/#bedok",
          "name": "Kidslink Bedok",
          "telephone": "+65 6243 3243",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Block 136, Bedok North Avenue 3, #01-54",
            "addressLocality": "Singapore",
            "postalCode": "460136",
            "addressCountry": "SG"
          }
        },
        {
          "@type": "MedicalClinic",
          "@id": "https://www.kidslink.com.sg/#cck",
          "name": "Kidslink Choa Chu Kang",
          "telephone": "+65 6310 0900",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Block 309, Choa Chu Kang Avenue 4, #04-02",
            "addressLocality": "Singapore",
            "postalCode": "680309",
            "addressCountry": "SG"
          }
        },
        {
          "@type": "MedicalClinic",
          "@id": "https://www.kidslink.com.sg/#jurong",
          "name": "Kidslink Jurong",
          "telephone": "+65 6567 5600",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Block 351, Jurong East Street 31, #01-91",
            "addressLocality": "Singapore",
            "postalCode": "600351",
            "addressCountry": "SG"
          }
        },
        {
          "@type": "MedicalClinic",
          "@id": "https://www.kidslink.com.sg/#sengkang",
          "name": "Kidslink Sengkang",
          "telephone": "+65 6388 4466",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Block 237, Compassvale Walk, #01-532",
            "addressLocality": "Singapore",
            "postalCode": "540237",
            "addressCountry": "SG"
          }
        }
      ]
    }
  </script>
  ```

- Canonical URL

  ```html
  <link rel="canonical" href="https://www.kidslink.com.sg" />
  ```

- OpenGraph Meta Tags (makes your links look good when shared on Facebook, Whatsapp, LinkedIn)

  ```html
  <meta
    property="og:title"
    content="Kidslink | Children's Clinic | Singapore"
  />
  <meta
    property="og:description"
    content="Kidslink Children's Clinic provides specialized medical services to babies and children in Singapore. We have 4 clinics located in Bedok, Choa Chu Kang, Jurong and Sengkang."
  />
  <meta property="og:url" content="https://www.kidslink.com.sg" />
  <meta property="og:site_name" content="Kidslink" />
  <meta property="og:type" content="website" />
  ```

- Twitter Card Meta Tags (make links look good when shared on twitter/X)

  ```html
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Kidslink | Children's Clinic | Singapore"
  />
  <meta
    name="twitter:description"
    content="Kidslink Children's Clinic provides specialized medical services to babies and children in Singapore. We have 4 clinics located in Bedok, Choa Chu Kang, Jurong and Sengkang."
  />
  ```

- Google Site Verification (proves you own the site in Google Search Console) \*CRITICAL, DO NOT LOSE THIS
<meta name="google-site-verification" content="lBCLkbITJ1E1wqOg1E1MGfPpZPnWMVxclwCuQVijXCU"/>

- Keywords Meta Tag

```html
<meta name="keywords" content="Children's Clinic, Specialist, Pediatric" />
```

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
  ├── robotx.txt
  ├── script.js
  ├── llm_context.md
  ├── text-content.md
  ├── images/
  ├── references/
  ├── screenshots-wix-page/
  └── my-favicon/
```

Analytics:

- Google Analytics 4
- Vercel Analytics
