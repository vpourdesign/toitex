# 4 High-Priority Fixes for couvreur-montreal.html
## Copy-paste these prompts into Claude Code, one at a time

---

## PROMPT 1 — Add FAQPage Schema Markup

```
In couvreur-montreal.html, add a third <script type="application/ld+json"> block right after the existing two schema blocks (after line 98, before the Google Ads comment). It should be a FAQPage schema containing all 5 FAQ questions and their FRENCH-ONLY answers from the .faq-items section on the page. Use only the French text (the content inside <span class="fr"> tags), not the English translations.

The schema format should be:
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "question text here",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "answer text here"
      }
    }
  ]
}

Extract the actual question and answer text from the HTML — the questions are in .faq-q elements and the answers are in .faq-a-inner elements. Only include the French content (span.fr), not the English (span.en). Make sure special characters like é, è, ê are properly encoded.
```

---

## PROMPT 2 — Add Service Schemas for All 7 Services

```
In couvreur-montreal.html, the existing RoofingContractor schema (second ld+json block, starting at line 53) has a hasOfferCatalog with only 3 generic services. Replace that hasOfferCatalog with all 7 actual services listed on the page:

1. Membrane élastomère bicouche
2. Toiture TPO et EPDM
3. Réparation de corniche et parapet
4. Bardeaux d'asphalte architecturaux
5. Solins et joints d'étanchéité
6. Urgence infiltration 24/7
7. Déneigement et déglaçage de toiture

Each should be an Offer containing a Service with:
- "name": the service name + "Montréal" (e.g. "Membrane élastomère bicouche Montréal")
- "description": a one-sentence French description of the service relevant to Montreal
- "areaServed": {"@type": "City", "name": "Montréal"}
- "provider": {"@type": "RoofingContractor", "name": "Toitex"}

Keep the rest of the RoofingContractor schema unchanged.
```

---

## PROMPT 3 — Clean H1 and All Headings: Remove Hidden English from DOM

```
In couvreur-montreal.html, the H1 tag (around line 1235) currently contains both French and English spans:

<h1>
  <span class="fr" lang="fr">Couvreur à Montréal — Expert en toit plat et bardeaux</span>
  <span class="en" lang="en">Roofer in Montréal — Flat Roof and Shingles Expert</span>
</h1>

Google reads ALL text in the DOM, even if display:none via CSS. Having hidden English text in the H1 can be seen as cloaking or keyword stuffing, and it dilutes the French keyword relevance.

FIX: For the H1 specifically, keep ONLY the French span and remove the English span entirely. The English version should be handled by hreflang tags (already present) and the JavaScript language switcher (which can dynamically set the H1 content via JS if needed), rather than hidden DOM content.

Do the same cleanup for ALL h2 tags on the page — they all have the same pattern with .fr and .en spans. Remove the .en spans from every h2.

IMPORTANT: Do NOT remove the .en spans from body text paragraphs, nav items, form labels, buttons, or other elements — those are fine because they're part of the language toggle UX. Only clean the h1 and h2 tags, since those are what Google weights most heavily for SEO.

After removing the .en spans from headings, update the setLang() JavaScript function (around line 1715) to also dynamically update the h1 and h2 text content when the user switches to English, so the language toggle still works. Add a simple mapping object in JS that holds the English translations for each heading.
```

---

## PROMPT 4 — Defer Non-Critical Scripts for Page Speed

```
In couvreur-montreal.html, audit all <script> tags and optimize loading for page speed. The page currently loads scripts that block rendering.

Here's what to do:

1. The Facebook Pixel script (line ~105) — add `defer` to the inline script or move it to the bottom of <body> just before </body>. The noscript fallback can stay where it is.

2. The UTM tracking script (line ~1878, the DOMContentLoaded one) — this is already at the bottom which is good, but wrap it in requestIdleCallback so it doesn't block the main thread:
   ```
   if ('requestIdleCallback' in window) {
     requestIdleCallback(function() { /* existing code */ });
   } else {
     document.addEventListener('DOMContentLoaded', function() { /* existing code */ });
   }
   ```

3. Add a `<meta name="robots" content="index, follow">` tag in the <head> after the existing meta description tag. This is explicit SEO best practice.

4. Change the aerial Montreal photo (the <img> with alt text containing "Vue aérienne") from loading="eager" to loading="lazy" since it's below the fold.

5. The footer logo image has alt="vpourdesign" — change it to alt="Toitex Expert Couvreur" to match the business name for SEO.

Do NOT touch: Google Ads gtag (needed for conversion tracking), the ld+json schema blocks, the Google Fonts preconnect, or the main inline styles.
```

---

## After All 4 Prompts

Run this final verification prompt:

```
In couvreur-montreal.html, verify all changes are correct:
1. Count the ld+json blocks — there should be 3 (Organization+WebSite, RoofingContractor, FAQPage)
2. Validate that the FAQPage schema has exactly 5 questions with French-only content
3. Validate that the RoofingContractor schema has 7 services in hasOfferCatalog
4. Check that the H1 and all H2 tags contain only French text (no .en spans)
5. Check that setLang() JS function has heading translations for English
6. Check meta robots tag exists
7. Check aerial photo has loading="lazy"
8. Check footer logo alt text says "Toitex Expert Couvreur"
Report any issues found.
```
