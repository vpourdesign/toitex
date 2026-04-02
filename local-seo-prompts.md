# Local SEO Prompt System — 20 Claude Prompts for Home Services Businesses

> Built for plumbers, HVAC, lawyers, cleaners, and any local service business. Run these in order for maximum impact.

---

## Before You Start: Load Your Business Context

Paste this into Claude first. Every subsequent prompt will reference it automatically.

```
Here is everything you need to know about my business before we start any SEO work.
Reference this every time I ask you to run an audit, build a strategy, or analyze competitors.
Never ask me for this information again.

BUSINESS BASICS:
Business name: Toitex
Address: 100 Rue Prévost, Boisbriand, QC, Canada J7G 2S2
Phone: (450) 949-0900
Website: www.toitex.ca
Google Business Profile: https://share.google/7wvXLoZBwdvnh7Kfq
Years in business: 5 years
Team size: Large team

SERVICES + MARKET:
Primary service: flat roofs, toits plats
Secondary services: shingle roofs, toits en bardeaux
Service areas: Montréal, Laval
Target customer: Plex owners, commercial strip owners, Propriétaires de plex et strips commerciales
Average job value: 20,000$

SEO GOALS:
Top 5 keywords I want to rank for: toit plat, toit plat montréal, élastomère, toit élastomère, réparation toit plat
Keywords I currently rank for: [keyword 1], [keyword 2]
Keywords I should rank for but don't: [keyword 1], [keyword 2]

CURRENT STANDINGS:
Google reviews: 61 tpotal, 4.9 star rating, 5 new reviews per month
GBP monthly views: unknown
Monthly website traffic: 500
Current map pack status: [ranking for X, not ranking for Y]
Biggest SEO problem right now: young URL, no authority

COMPETITORS:
[competitor name] — [GBP URL] — [website] — [why they're beating you if you know]
[competitor name] — [GBP URL] — [website] — [why they're beating you if you know]
[competitor name] — [GBP URL] — [website] — [why they're beating you if you know]

WHAT I'VE ALREADY TRIED:
[List any SEO work already done — agency, DIY, tools used, what worked, what didn't]

HOW I WANT YOU TO WORK:
- Always prioritize quick wins over long-term plays unless I ask otherwise
- When you give me a recommendation, include impact level (high/medium/low) and time to results
- Always output competitor comparisons in spreadsheet format
- When you're unsure about something, say so — don't guess
- Never ask me for the above information again. Use it as the base for everything we do together.
```

---

## Part 1: Google Business Profile (Prompts 1–8)

### Prompt 1 — GBP Category Audit

> **Why it matters:** Wrong categories = invisible for high-intent searches. Adding one secondary category can unlock an entirely new set of map pack appearances within days.

```
Open Chrome and go to Google Maps. Search '[service] in [city]' for these 3 keywords:
[keyword1], [keyword2], [keyword3].

For each search, note which competitors show up in the Map Pack. Then open each competitor's
GBP listing and extract their primary category and all secondary categories.

Put everything in a spreadsheet. One tab per keyword. Columns: business name, primary category,
secondary categories, star rating, review count, ranking position.

Highlight any categories my competitors have that I'm missing from my GBP.

Then give me a prioritized list of categories I should add, ranked by how many top competitors
have them:
- Start with categories ALL 3 competitors share — these are non-negotiable
- End with categories only 1 competitor has — these are differentiation opportunities
```

---

### Prompt 2 — GBP Attributes Audit

> **Why it matters:** Attributes are a two-for-one play — they help you rank for more specific searches AND increase click-through rate before someone even clicks your listing.

```
Open Chrome and go to my GBP listing at [URL] and these competitors: [URL1], [URL2], [URL3].

For each listing, extract every visible attribute and tag — things like 'veteran-owned,'
'free estimates,' 'offers online appointments,' 'wheelchair accessible,' '24/7 availability,'
and any others shown.

Put everything in a spreadsheet. Columns: attribute name, my listing (yes/no),
competitor 1 (yes/no), competitor 2 (yes/no), competitor 3 (yes/no).

Highlight every attribute my competitors have that I'm missing. Then create three separate lists:

1. Attributes ALL top competitors have — table stakes, I need them immediately
2. Attributes 2 out of 3 competitors have — strong recommendations
3. Attributes only 1 competitor has — differentiation opportunities

For each missing attribute, tell me:
- Likely ranking impact (high/medium/low)
- Whether it also affects click-through rate
```

---

### Prompt 3 — Competitor Review Teardown

> **Why it matters:** Review velocity (how fast they're getting new reviews) matters more than total count. A business with 90 reviews getting 15/month is stronger than one with 200 reviews that went stale.

```
Open Chrome and go to these competitor GBP listings: [URL1], [URL2], [URL3].

For each competitor, read their last 50 reviews. Extract:
- Total review count
- Average star rating
- Reviews in the last 30 / 60 / 90 days
- Top 5 services mentioned in reviews
- Top 5 neighborhoods or cities mentioned
- Staff names mentioned (if any)
- Recurring complaints or negative themes
- Top 5 keyword phrases I should train my customers to mention in reviews,
  based on what's working for competitors
```

---

### Prompt 4 — Review Response Strategy

> **Why it matters:** Google has confirmed responding to reviews improves local ranking. 10 responses/month mentioning your service and city = 120 pieces of keyword-rich content on your GBP per year.

```
Open Chrome and go to my GBP listing at [URL] and these competitors: [URL1], [URL2], [URL3].

For each listing, analyze the last 30 review responses from the business owner. Extract:
- Total reviews vs responses (response rate %)
- Average response time
- Whether responses mention specific services or locations
- Average response length in words
- Tone (formal/casual/personal)
- How negative reviews are handled

Put this in a spreadsheet comparing my response strategy vs competitors.

Then build me a complete review response template system:
- 3 variations for 5-star reviews (include [service keyword] + [city keyword] naturally)
- 3 variations for 4-star reviews (acknowledge gap, invite return)
- 3 variations for 3-star reviews (take accountability, offer resolution)
- 3 variations for 1–2 star reviews (professional, empathetic, defuse without being defensive)

Each template: 40–80 words. Sound like a real person, not a robot.
```

---

### Prompt 5 — GBP Posts Strategy

> **Why it matters:** Consistent posting signals to Google that your business is active. Active businesses get preferred placement. Most competitors aren't posting — that's your advantage right now.

```
Open Chrome and go to my GBP listing at [URL] and these competitors: [URL1], [URL2], [URL3].

For each listing, check their GBP posts section and record:
- Total posts in the last 90 days
- Post frequency (posts per week)
- Post types used (offer/update/event/product)
- Whether posts include images and CTAs
- Topics and themes covered
- Seasonal or promotional patterns
- Estimated engagement if visible

Then build me a complete 8-week GBP posting calendar with 2–3 posts per week including:
- Seasonal service promotions
- Before-and-after project showcases
- Neighborhood-specific posts mentioning [area1], [area2], [area3]
- Review highlights
- Team spotlights
- Educational posts about common problems we solve

Requirements for each post:
- Naturally include at least one of: [keyword1], [keyword2], [keyword3]
- 100–150 words with a clear CTA
- Image description so I know exactly what photo to take

Write the full copy for weeks 1–4. Provide detailed outlines for weeks 5–8.
```

---

### Prompt 6 — Services Section Optimization

> **Why it matters:** Your services section is one of the only places on your GBP where you control the text completely. Businesses often add services to their site but forget to update their GBP — making them invisible for those searches in the map pack.

```
Open Chrome and go to my GBP listing at [URL] and these competitors: [URL1], [URL2], [URL3].

For each listing, extract the complete services section including:
- Every service listed
- Whether each service has a description
- Full text of each description
- How descriptions are structured (problem-solution, feature-benefit, keyword-heavy)
- Services that appear in every competitor's listing (non-negotiable)
- Services that appear in some but not all (opportunities)

Put this in a comparison spreadsheet.

Then audit my current services section against my website at [URL] and identify:
- Services on my site not in my GBP
- Services in my GBP with no description
- Services where my description is weaker than competitors

Finally, write optimized descriptions for all my services. Each one should:
- Be 2–3 sentences, 40–60 words
- Naturally include the primary service keyword
- Mention at least one service area from [area1], [area2], or [area3]
- Include a specific benefit or outcome the customer gets
- Sound like a real business wrote it, not an SEO tool

Core services: [service1], [service2], [service3], [service4], [service5]
```

---

### Prompt 7 — GBP Description Optimization

> **Why it matters:** 750 characters of prime real estate. Most businesses leave it blank, copy-paste their site, or keyword-stuff it. Treat it as a testable asset, not a set-and-forget field.

```
Open Chrome and go to my GBP listing at [URL] and these competitors: [URL1], [URL2], [URL3].

Extract each business's full GBP description and put them in a spreadsheet with columns:
business name, full description text, character count, primary keyword used, secondary keywords,
service areas mentioned, trust signals, unique selling points, CTA, tone.

Analyze:
- What ALL top-ranking competitors mention (non-negotiable elements)
- What no one mentions that I could own
- What I currently say that nobody else bothers to say

Then write 3 versions of an optimized GBP description (each under 750 characters):

- Version 1: Keyword-focused — maximum ranking signal
- Version 2: Conversion-focused — written to make someone pick up the phone right now
- Version 3: Trust-focused — built around experience, reviews, and local credibility

All three must include: [keyword1], [keyword2], [keyword3] and service areas [area1], [area2], [area3].
Make them sound like a human wrote them — not a marketing team.
```

---

### Prompt 8 — GBP Photo Audit

> **Why it matters:** Businesses with photos get 42% more direction requests and 35% more click-throughs. Consistency beats volume — 3–5 quality photos per week beats 50 in one day then nothing.

```
Open Chrome and go to my GBP listing at [URL] and these competitors: [URL1], [URL2], [URL3].

For each listing, analyze the photo section and record:
- Total photo count
- Estimated photos uploaded in the last 30 / 90 days
- Photo types present (team, job site, before/after, trucks, equipment, completed work)
- Photo quality (professional vs phone shots)
- Whether photos include people/faces
- Whether photos show specific neighborhoods or local landmarks
- Average photos per week based on upload frequency

Put this in a spreadsheet comparing me vs each competitor.

Then build me a specific 8-week photo upload plan including:
- Exact number of photos per week to beat the top competitor's velocity by 50%
- Specific shot list for each week (what to photograph, where, and why)
- Which weeks to prioritize before/afters vs team shots vs trucks vs completed installs
- A naming convention that includes service keywords and location names
- Instructions for geotagging photos to specific neighborhoods: [area1], [area2], [area3]

No generic office photos — every photo should be working as a ranking signal.
```

---

## Part 2: Website (Prompts 9–13)

### Prompt 9 — Keyword Gap Audit

> **Why it matters:** Finds every keyword your competitors rank for that you don't. This is where the revenue your website should be generating is hiding.

```
Open Chrome and log into my SEMrush account at semrush.com.
Go to the Keyword Gap tool and enter my domain [yourdomain.com] and these 3 competitor domains:
[competitor1.com], [competitor2.com], [competitor3.com].

Filter results to show only keywords where competitors rank in positions 1–20 but I don't rank at all.
Export this list.

Then filter down further to keywords that meet ALL of these criteria:
- Monthly search volume between 100 and 2,000 (local intent sweet spot)
- Contains at least one of: [city name], [service type], 'near me', 'emergency', 'best', 'local'
- Keyword difficulty under 40

For the top 20 keywords from that filtered list, tell me:
- Current search volume
- Keyword difficulty
- Which competitors rank for it and at what position
- Whether I have an existing page that could rank for it with optimization
- Whether I need a new page to target it

Output as a spreadsheet sorted by opportunity score (high volume + low difficulty + multiple competitors
ranking = highest priority). Add a final column 'Action Required': either 'Optimize existing page'
or 'Create new page.'
```

---

### Prompt 10 — Money Page Audit

> **Why it matters:** Most local business websites have the wrong pages ranking — or no pages ranking at all. Page 2 rankings are often one title tag change away from page 1.

```
Open Chrome and go to my Google Search Console at search.google.com/search-console.
Log in and access the property for [yourdomain.com].

Go to Search Results, set date range to last 3 months, and export all queries and pages.

For each page on my site, tell me:
- What keywords it currently ranks for
- Average position for each keyword
- Impressions and clicks for each keyword
- Whether the page is optimized for the keyword it's ranking for (or ranking accidentally)

Then identify:
- Pages ranking positions 4–15 for high-value keywords (need one optimization push to hit top 3)
- Pages with high impressions but low clicks (title and meta description problem)
- Pages with zero rankings (dead weight or untapped opportunity)
- Keywords I'm ranking for on the wrong page (cannibalization issue)

Build me a priority action list:
- Quick wins: pages to optimize this week for immediate improvement
- Medium effort: pages to rebuild over the next month
- Long term: new pages to create over the next 90 days

For each item include: current position, target position, estimated time to see improvement,
and exact on-page changes needed.
```

---

### Prompt 11 — Service + City Page Builder

> **Why it matters:** Google ranks pages, not websites. If you don't have a page specifically about [service] in [city], you will not rank for that search.

```
I need to build location-specific service pages for my website.
Primary service: [your main service]
Cities I serve: [city1], [city2], [city3], [city4], [city5]
Website: [URL]
Target keyword pattern: [service] + [city], [service] near [city], best [service] in [city]

First, open Chrome and check my website at [URL]. Tell me which city + service combination pages
already exist and which are missing.

Then for each missing combination, write a fully optimized page including:
- SEO title (under 60 characters, includes service and city)
- Meta description (under 155 characters, includes service, city, and a compelling reason to click)
- H1 heading (service and city, written naturally)
- Opening paragraph (100 words, addresses the pain point of someone in that city right now)
- Why choose us section (150 words, specific to that city with local landmarks or area challenges)
- Service details section (200 words — what's included, the process, what the customer gets)
- Social proof section (placeholder for reviews from that city)
- FAQ section (3 questions specific to customers in that city)
- CTA with phone number and 'Call now for same-day service in [city]'

For each page also give me:
- The exact URL slug
- 3 internal linking opportunities from existing pages on my site
- 2 local citations or directories where I should list this specific city + service combination
```

---

### Prompt 12 — Google Search Console Analysis

> **Why it matters:** Most businesses log into GSC, get overwhelmed, and close the tab. A jump from position 15 to position 5 is worth more than creating 10 new pages.

```
Open Chrome and log into Google Search Console at search.google.com/search-console
for my property [yourdomain.com].

Export the last 90 days of search performance data including all queries, all pages,
clicks, impressions, CTR, and average position.

Find my page 2 goldmine: every keyword where I rank between position 11 and 20 with at least
100 impressions per month. For each page 2 keyword, open the ranking page on my site and tell me:
- Is the keyword in the title tag?
- Is it in the H1?
- Is it in the first 100 words?
- How many words is the page?
- Does the page have internal links pointing to it?
- What does the current meta description say?

Then build me a 30-day optimization sprint:
- Week 1: Title tag and H1 fixes for top 10 page 2 keywords
- Week 2: Content additions for thin pages (under 500 words)
- Week 3: Internal linking fixes (exactly which pages should link to which)
- Week 4: Meta description rewrites for pages with high impressions but low CTR

For every single fix, write me the exact new copy — not instructions, the actual title tag,
H1, and meta description I should use.
```

---

### Prompt 13 — Review Sentiment Analysis

> **Why it matters:** Most businesses write their own website copy about themselves. The businesses that dominate write their copy in the language their customers actually use.

```
Open Chrome and go to these competitor GBP listings: [URL1], [URL2], [URL3].
Read through the last 100 reviews for each competitor.

Do a deep sentiment analysis across all reviews. Extract:
- Top 20 emotional words customers use most frequently (e.g. 'relieved', 'finally', 'trustworthy')
- Top 10 specific outcomes customers mention (e.g. 'fixed in one visit', 'arrived on time')
- Top 5 fears or frustrations mentioned before the service was done
- Exact phrases customers use when they recommend to others (money phrases for your website)
- Language patterns that appear in 5-star reviews but not in 3-star reviews

Then do the same analysis for my reviews at [my GBP URL].

Compare the sentiment and language between my reviews and my top competitor's reviews.
Tell me where the emotional gaps are.

Finally, use all of this data to rewrite:
- My GBP description (using the emotional language real customers use)
- My homepage headline and subheadline
- My review request script (so customers naturally use the right words and phrases)
- 3 social proof statements I can put on my website that mirror how my best customers talk about my service
```

---

## Part 3: Backlinks + Authority (Prompts 14–16)

### Prompt 14 — Competitor Backlink Audit

> **Why it matters:** 2–4 real contextual links per month compounds faster than 20 random directory submissions. This audit removes all guesswork — you know exactly who to target and what to say.

```
Open Chrome and log into my Ahrefs account at ahrefs.com.
Go to Site Explorer and enter [competitor1.com] first.

Export their full backlink profile filtered to:
- Dofollow links only
- DR of linking domain: 20 or higher
- Traffic of linking domain: 100+ monthly visits
- Link type: not sitewide (no footer or sidebar links)

Repeat for [competitor2.com] and [competitor3.com].

Find my link opportunities:
- Domains that link to ALL 3 competitors but not me (highest priority)
- Domains that link to 2 competitors but not me (medium priority)
- Domains that link to 1 competitor but not me (worth reviewing)

For each high-priority link opportunity, tell me:
- Domain name and URL
- DR of the domain
- Type of site (directory/news/blog/association/sponsor)
- How my competitor earned the link (guest post/sponsorship/citation/PR)
- My realistic chance of getting a similar link (high/medium/low)
- The exact outreach strategy I should use

Then build me a prioritized 90-day link building plan:
- Month 1: 5 easiest links (directories, citations, local associations)
- Month 2: 5 medium-effort links (local news, sponsor opportunities, guest posts)
- Month 3: 5 authority links (industry publications, local government, universities)

For every single link, include the contact method and write me the full outreach email I can send immediately.
```

---

### Prompt 15 — Local Citation Audit

> **Why it matters:** Inconsistent NAP data across directories is one of the most common local SEO killers. Fixing citations is one of the few SEO tasks where you can see real ranking improvements within 30 days.

```
My business information:
Name: [exact business name]
Address: [exact address including suite or unit if applicable]
Phone: [phone number]
Website: [URL]

Open Chrome and search for my business name across these platforms one by one:
Google Business Profile, Yelp, Bing Places, Apple Maps, Facebook, BBB, Angi, HomeAdvisor,
Thumbtack, Houzz, Yellow Pages, Manta, Foursquare, Superpages, Citysearch,
and any industry-specific directories for [your industry].

For each platform record:
- Whether my listing exists
- Business name as listed (exact)
- Address as listed (exact)
- Phone number as listed (exact)
- Website URL as listed
- Whether there are duplicate listings
- Star rating and review count if applicable

Create a spreadsheet with all findings and flag every inconsistency in red.

Then give me:
- A priority fix list showing which inconsistencies are most damaging to local rankings
- Step-by-step instructions for correcting each one
- A list of high-value directories where I have no listing and should create one immediately
- A monthly citation maintenance checklist so this problem never comes back
```

---

### Prompt 16 — Local Search Intent Mapping

> **Why it matters:** Stage 4 keywords (ready to hire) have lower volume but convert at 5–10x the rate of Stage 2 (research) keywords. Most businesses spend their SEO budget in the wrong stage.

```
I want to map my target keywords to the buyer journey so I know which ones to prioritize
for immediate revenue vs long-term traffic.

Business type: [business type]
City: [city]
Core services: [service1], [service2], [service3]

Open Chrome and log into SEMrush at semrush.com.
Pull all keywords in my niche for my service area with a search volume of 20+ per month.

Categorize every keyword into one of four stages:

Stage 1 — Problem-Unaware: Has a problem but doesn't know what it's called
  (e.g. 'water coming through ceiling', 'AC making weird noise')

Stage 2 — Problem-Aware: Knows the problem, researching solutions
  (e.g. 'how to fix a leaking roof', 'why is my AC not cooling')

Stage 3 — Solution-Aware: Comparing options and providers
  (e.g. 'plumber vs DIY pipe repair', 'how to choose an HVAC company')

Stage 4 — Ready to Hire: Wants to book someone now
  (e.g. 'emergency plumber [city]', 'HVAC repair near me')

For each stage tell me:
- Total number of keywords
- Combined monthly search volume
- Average keyword difficulty
- Top 10 keywords by search volume

Then build me a content and SEO strategy for each stage:
- Stage 4 → service pages and GBP (where the money is)
- Stage 3 → comparison and FAQ pages
- Stage 2 → educational blog content that funnels to service pages
- Stage 1 → problem-identification content that builds early trust

Finally, tell me which 5 keywords from Stage 4 I should rank for within the next 90 days
and exactly what I need to do to rank for each one.
```

---

## Part 4: Content + Tracking (Prompts 17–20)

### Prompt 17 — Content Gap Analysis

> **Why it matters:** Content that ranks for problem-awareness searches turns your website into a 24/7 sales tool. Someone searching 'why is my furnace making noise' is one step away from calling an HVAC company.

```
Open Chrome and log into SEMrush at semrush.com.
Use the Content Gap tool and enter my domain [yourdomain.com] vs:
[competitor1.com], [competitor2.com], [competitor3.com]

Filter results to find keywords where competitors have ranking content but I have nothing.
Then filter further to:
- 50–500 monthly searches (local content sweet spot)
- Contains question words (how, why, what, when, is, can, does)
- Relates to problems my service solves

Organize the top 20 content gap keywords into 3 categories:
1. Problem-awareness content (someone has a problem, doesn't know the solution — e.g. 'why is my AC not cooling')
2. Solution-comparison content (evaluating options — e.g. 'repair vs replace water heater')
3. Local service content (ready to hire — e.g. 'emergency plumber [city] cost')

For each of the top 20 keywords write:
- Suggested page title (SEO optimized)
- Suggested URL slug
- 200-word content brief including:
  - Target keyword
  - Secondary keywords to include
  - Main questions to answer
  - Word count recommendation
  - Internal links to add
  - CTA at the bottom of the page

Prioritize problem-awareness content first — it does the most work for local businesses
by answering objections before the phone call.
```

---

### Prompt 18 — Entity Optimization

> **Why it matters:** Google doesn't just rank websites — it ranks entities. Businesses with strong entity signals rank higher, appear more in AI overviews, and are more resilient to algorithm updates. Almost no local business is doing this.

```
I want to build and strengthen my business entity in Google's knowledge graph to improve
local rankings and potentially trigger a knowledge panel.

My business details:
Name: [exact business name]
Address: [full address]
Phone: [phone number]
Website: [URL]
GBP: [GBP URL]
Founded: [year]
Owner name: [your name]
Industry: [industry]

Open Chrome and do the following:

1. Check if my business has a Google Knowledge Panel by searching:
   '[business name] [city]' and '[owner name] [business name]' — report what appears

2. Check if my business exists on Wikidata by searching wikidata.org for my business name

3. Audit my schema markup at search.google.com/test/rich-results
   (enter my website URL — tell me what schema is implemented and what's missing)

4. Check brand consistency by searching my business name in quotes across Google
   (note every place my business information appears and whether NAP is consistent)

Then build me a complete entity optimization plan:
- The exact LocalBusiness schema markup I need on my homepage (write the complete JSON-LD code ready to paste)
- A list of authoritative sites where I need to create or claim a presence
  (include Wikipedia if eligible, Crunchbase, LinkedIn company page, industry associations)
- The exact anchor text and brand mentions I need to build across the web
- Instructions for getting my knowledge panel to appear if it doesn't exist yet
```

---

### Prompt 19 — Competitor GBP Posting Pattern Analysis

> **Why it matters:** GBP posting isn't just about frequency — it's about pattern. Reverse-engineering your competitors' posting patterns gives you a strategy that's already proven to work in your specific market.

```
Open Chrome and go to the GBP listings for these competitors: [URL1], [URL2], [URL3].

Do a complete forensic analysis of their GBP posting history going back as far as visible.

For each post extract:
- Exact date and time posted
- Day of the week
- Post type (offer/update/event/product)
- Word count
- Whether it includes an image
- Whether it includes a CTA button and what the CTA says
- Topic and service mentioned
- Whether it mentions a specific neighborhood or city
- Whether it includes a price or offer
- Any hashtags or special formatting used

Put all of this into a spreadsheet with one row per post.

Analyze the patterns and tell me:
- Which days of the week they post most frequently
- Whether there is a time-of-day pattern
- Which post types they use most
- Which topics are seasonal
- Which months have the highest posting frequency
- Any gaps in their posting schedule I can exploit by posting consistently when they don't

Then build me a posting strategy specifically designed to beat these competitors based on the data —
not generic advice. Include the optimal days, times, post types, and topic mix for my market.

Write the first 4 weeks of posts in full using this strategy.
```

---

### Prompt 20 — Monthly SEO Performance Report

> **Why it matters:** Most business owners track the wrong things. Calls and revenue from organic are the only numbers that actually matter. This report keeps you focused on what connects directly to your bank account.

```
Open Chrome and access these three tools:
- Google Search Console for [yourdomain.com]
- Google Business Profile insights for my listing at [GBP URL]
- Google Analytics 4 for [yourdomain.com] (if available)

Pull data for the last 30 days vs the previous 30 days for every metric below.

From Google Search Console:
- Total clicks from organic search (+ change vs previous month)
- Total impressions (+ change)
- Average CTR (+ change)
- Average position (+ change)
- Top 10 keywords by clicks this month
- Top 10 keywords that improved in position this month
- Top 10 keywords that dropped in position this month
- Pages that gained the most clicks
- Pages that lost the most clicks

From Google Business Profile:
- Total profile views
- Total search queries (branded vs discovery)
- Calls from GBP
- Direction requests
- Website clicks from GBP
- Photo views
- Review count change

From Google Analytics (if available):
- Organic traffic sessions
- Organic traffic conversion rate
- Top organic landing pages by sessions
- Bounce rate on top pages

Then build me a one-page monthly SEO report with:
- 3 wins from this month
- 3 problems that need addressing
- The single most important action for next month
- A note on whether calls from GBP went up or down

Format: readable in 5 minutes and shareable with anyone on my team.
```

---

## Execution Order

Don't run all 20 at once. Follow this schedule for maximum impact:

| Week | Prompts | Focus |
|------|---------|-------|
| 1 | Context + 1, 2 | GBP categories and attributes — fastest ranking wins |
| 2 | 3, 4, 5 | Reviews + GBP posts — velocity targets and content calendar |
| 3 | 6, 7, 8 | Services, description, photos — full GBP optimization |
| 4 | 9, 12 | Keyword gap + GSC analysis — prioritize website fixes |
| 5–6 | 10, 11, 13 | Website audit, city pages, review sentiment |
| 7–8 | 14, 15, 16 | Backlinks, citations, search intent mapping |
| 9–10 | 17, 18, 19 | Content gaps, entity optimization, posting patterns |
| 11–12 | 20 | Monthly report — measure what moved, double down on what works |

---

## Tools Referenced

| Tool | Used In |
|------|---------|
| Google Business Profile | Prompts 1–8, 19, 20 |
| Google Search Console | Prompts 10, 12, 20 |
| Google Analytics 4 | Prompt 20 |
| SEMrush | Prompts 9, 16, 17 |
| Ahrefs | Prompt 14 |
| Google Maps | Prompt 1 |
| Wikidata | Prompt 18 |
| Google Rich Results Test | Prompt 18 |

---

*System built for local home services businesses. 90 days of consistent execution on this system will outrank businesses that have been established for years.*
