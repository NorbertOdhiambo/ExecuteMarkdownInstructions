# Product Requirements Document (PRD)

## HOUSE OF PRAYER FOR ALL NATIONS --- THE LORD IS HERE

### Church Website --- React + Figma Make

**Document status:** Initial product/design/development brief\
**Primary audience:** Figma Make / React implementation agent, UI/UX
designer, church leadership/content editors\
**Design direction:** Warm, reverent, modern, welcoming, visually rich,
interactive, trustworthy, mobile-first

------------------------------------------------------------------------

## 1. Product Overview

Create a modern, highly informative church website for:

> **HOUSE OF PRAYER FOR ALL NATIONS**\
> **THE LORD IS HERE**\
> **HOFPAN**

The website should communicate a strong sense of **faith, prayer,
worship, community, welcome, and spiritual warmth** while still feeling
contemporary and polished.

The uploaded church logo is the primary brand reference. Use it
prominently and respectfully. The logo contains the church's visual
identity, including a red/maroon field, white typography, an open Bible,
cross, flames, and the phrase:

-   HOUSE OF PRAYER FOR ALL NATIONS
-   Isaiah 56:7
-   Ezekiel 48:35
-   THE LORD IS HERE
-   HOFPAN

The website should not feel like a generic corporate template or a basic
church information page. It should feel like a **living digital home for
the church**: inviting a first-time visitor, useful to an existing
member, and compelling enough that visitors want to explore sermons,
events, ministries, prayer, giving, and the church's story.

------------------------------------------------------------------------

## 2. Core Product Goals

### Primary goals

1.  Clearly introduce the church and its mission.
2.  Make first-time visitors feel welcomed.
3.  Make it extremely easy to:
    -   Find service times.
    -   Locate the church.
    -   Contact the church.
    -   Listen to/watch sermons.
    -   Learn about pastors and leaders.
    -   Discover ministries and events.
    -   Submit prayer requests.
    -   Give/donate.
4.  Showcase the church's spiritual life through strong photography,
    video, sermons, testimonies, and events.
5.  Create an excellent mobile experience.
6.  Establish a visual system that can grow as more church content
    becomes available.
7.  Build the UI so content can eventually be connected to a CMS,
    database, APIs, YouTube/Vimeo, Google Maps, payment provider, or
    church-management system without redesigning the front end.

### Secondary goals

-   Improve discoverability through SEO.
-   Encourage visitors to attend physically.
-   Encourage online engagement.
-   Build trust with clear leadership, beliefs, contact information, and
    transparent giving information.
-   Create a foundation for future features such as livestreaming,
    online prayer, member resources, event registration, and
    newsletters.

------------------------------------------------------------------------

# 3. Brand & Visual Direction

## 3.1 Brand personality

The design should feel:

-   Spiritual
-   Welcoming
-   Reverent
-   Hopeful
-   Powerful
-   Warm
-   Contemporary
-   Community-focused
-   Trustworthy
-   Joyful
-   International / all-nations oriented

Avoid:

-   Overly corporate SaaS aesthetics
-   Excessive gradients
-   Cold minimalist layouts
-   Excessive animation
-   Clutter
-   Dark interfaces everywhere
-   Stock-photo-heavy layouts that feel artificial
-   Decorative effects that compete with Scripture or the church message

The visual language should balance **church heritage + contemporary
digital design**.

------------------------------------------------------------------------

## 3.2 Color system

Use the logo as the primary visual reference.

### Primary colors

-   **Church Red:** `#A82626`
-   **Deep Red / Burgundy:** approximately `#7F1D1D`
-   **White:** `#FFFFFF`
-   **Black:** `#111111`
-   **Soft Off-White:** `#F8F6F3`

### Supporting neutrals

-   Light gray: `#F1F1F1`
-   Medium gray: `#6B7280`
-   Dark charcoal: `#202020`

Use red strategically for:

-   Primary CTAs
-   Active navigation
-   Donation CTA
-   Important highlights
-   Section accents
-   Hover states
-   Selected states
-   Brand moments

Do NOT make every section red.

Use white/off-white as the primary content background. Use
black/charcoal for high-contrast typography.

The overall visual rhythm should alternate between: - White / light
sections - Image-rich sections - Red feature sections - Dark/black
feature sections

------------------------------------------------------------------------

# 4. Typography

Use a sophisticated, highly readable pairing.

Suggested direction:

### Headings

A refined serif such as: - Playfair Display - Cormorant Garamond - Libre
Baskerville - or another elegant editorial serif

### Body / UI

A clean sans-serif such as: - Inter - Manrope - DM Sans - Source Sans 3

The typography should communicate **heritage and spirituality without
feeling old-fashioned**.

Use uppercase sparingly for labels and navigation.

Large hero headings should be confident and emotionally resonant.

Example:

> **A HOUSE OF PRAYER.\
> A PEOPLE OF FAITH.\
> A PLACE WHERE THE LORD IS HERE.**

------------------------------------------------------------------------

# 5. Logo Requirements

Use the uploaded church logo as the official brand mark.

### Logo usage

-   Header/navigation
-   Footer
-   Potential hero overlay
-   About/church identity section
-   Mobile menu
-   Favicon/app icon where appropriate

Do not distort the logo.

Maintain adequate clear space around it.

Where the full logo is too visually dense, create a simplified logo
treatment only if a suitable official mark becomes available. Do not
invent a new symbol that could be mistaken for the official logo.

The supplied logo should be treated as the source of truth for brand
colors and visual motifs.

------------------------------------------------------------------------

# 6. Site Architecture

Create the following primary navigation:

1.  **Home**
2.  **About**
3.  **Sermons**
4.  **Ministries**
5.  **Events**
6.  **Leadership**
7.  **Prayer**
8.  **Give**
9.  **Contact**

Header should also have a highly visible CTA:

> **PLAN A VISIT**

or, if preferred:

> **JOIN US**

Secondary links can include: - Livestream - Prayer Request - Give -
Location

### Mobile navigation

Use a polished full-screen or large slide-over mobile menu with:

-   Logo
-   Navigation links
-   Service times
-   Location
-   Give CTA
-   Contact information
-   Social links

------------------------------------------------------------------------

# 7. Homepage Requirements

The homepage is the most important page.

It should feel visually exciting from the first second while remaining
fast and accessible.

Recommended flow:

1.  Hero
2.  Quick service information
3.  Welcome / church introduction
4.  Upcoming events
5.  Latest sermon
6.  Ministries
7.  Prayer invitation
8.  Leadership / pastors
9.  Testimony or church-life section
10. Location / visit section
11. Giving
12. Newsletter / connect
13. Footer

------------------------------------------------------------------------

# 8. HERO SECTION

## 8.1 Hero concept

Create a full-width, immersive hero section with **automatic
transitioning background images**, functioning as a cinematic carousel.

The hero should automatically transition approximately every 5--7
seconds.

Use: - Church worship photography - Congregation/community imagery -
Prayer - Preaching - Worship team - Church exterior - Pastor/ministry
imagery - Community outreach

Do not use random stock images if actual church photography becomes
available.

### Carousel behavior

-   Automatic transitions.
-   Smooth crossfade rather than aggressive sliding.
-   Pause when user hovers/focuses where appropriate.
-   Manual previous/next controls.
-   Slide indicators.
-   Keyboard accessible.
-   Respect `prefers-reduced-motion`.
-   Use responsive image crops.
-   Add a dark/brand overlay so text remains readable.

### Hero content

Include:

**Eyebrow:** \> HOUSE OF PRAYER FOR ALL NATIONS

**Main headline:** \> **THE LORD IS HERE**

**Supporting copy:** \> A place of prayer, worship, faith, fellowship
and transformation.

**Primary CTA:** \> PLAN A VISIT

**Secondary CTA:** \> WATCH SERMONS

Also show concise service information if confirmed:

> Sunday Worship --- \[TIME\]\
> \[Other service\] --- \[TIME\]

All unknown details must be implemented as content placeholders rather
than invented facts.

------------------------------------------------------------------------

# 9. QUICK INFORMATION BAR

Immediately beneath the hero, provide a compact information strip
containing 3--4 cards:

### Example

**Worship With Us** Sunday --- \[TIME\]

**Find Us** \[Location\]

**Prayer** Send a Prayer Request

**Connect** \[Phone / Email\]

This section should be visually strong and mobile-scrollable.

------------------------------------------------------------------------

# 10. WELCOME / ABOUT PREVIEW

Introduce the church in a warm editorial layout.

Possible heading:

> **WELCOME TO THE HOUSE**

Content should answer:

-   Who are we?
-   What do we believe?
-   What does "House of Prayer for All Nations" mean to us?
-   What can a first-time visitor expect?
-   Who is the church for?

Include a strong image/video alongside the text.

CTA:

> **DISCOVER OUR STORY**

------------------------------------------------------------------------

# 11. SCRIPTURE / BRAND MOMENT

Create an elegant visual section using the church's biblical foundation.

Potential content:

> **"My house shall be called an house of prayer for all nations."**

Reference: \> Isaiah 56:7

Also acknowledge the logo's Ezekiel 48:35 reference:

> **"The LORD is there."**

Reference: \> Ezekiel 48:35

Use a restrained visual treatment: large typography, subtle texture,
photography or architectural imagery.

Do not overdecorate Scripture.

------------------------------------------------------------------------

# 12. LATEST SERMONS

Create a prominent sermon section.

### Heading

> **FEED YOUR FAITH**

or

> **LATEST SERMONS**

Each sermon card should support:

-   Thumbnail
-   Sermon title
-   Speaker
-   Date
-   Series
-   Scripture/reference
-   Duration
-   Video/audio indicator
-   Watch button
-   Listen button where available

### Interactions

-   Hover animation
-   Play icon
-   Quick preview if technically feasible
-   Filter by:
    -   Speaker
    -   Series
    -   Date
    -   Topic

### Sermon page

Create an individual sermon detail page containing:

-   Large video player
-   Title
-   Speaker
-   Date
-   Scripture
-   Description
-   Audio player if available
-   Related sermons
-   Share buttons

Potential future integrations: - YouTube - Vimeo - Podcast feed - Church
media API

Do not hard-code the media source architecture.

------------------------------------------------------------------------

# 13. PREVIOUS SERMONS / SERMON LIBRARY

Create a searchable archive.

Features:

-   Search
-   Pagination or infinite loading
-   Filters
-   Sort newest/oldest
-   Category/series filters
-   Speaker filters
-   Responsive cards

Empty states should be beautifully designed.

Example:

> **Looking for something specific?**\
> Search our sermon library for messages, series and Scripture topics.

------------------------------------------------------------------------

# 14. PASTORS & LEADERSHIP

Create a leadership section that feels personal and trustworthy.

### Homepage preview

Show 2--4 featured leaders with:

-   Portrait
-   Name
-   Role/title
-   Short biography
-   View profile CTA

### Leadership page

Include:

-   Senior/lead pastor
-   Associate pastors
-   Ministry leaders
-   Other leadership roles as supplied

Each profile should support:

-   Professional portrait
-   Name
-   Title
-   Biography
-   Ministry focus
-   Optional Scripture/quote
-   Optional social/contact links

Do not invent names, titles, biographies, or credentials.

Use placeholders such as:

`[PASTOR NAME]` `[ROLE]` `[BIOGRAPHY]`

until official content is supplied.

------------------------------------------------------------------------

# 15. MINISTRIES

Create a visual ministry directory.

Possible categories:

-   Children
-   Youth
-   Young Adults
-   Men's Ministry
-   Women's Ministry
-   Worship
-   Prayer
-   Outreach / Missions
-   Bible Study
-   Community Care
-   Media / Communications

These are examples only; replace them with the church's actual
ministries.

Each ministry card should include:

-   Image
-   Ministry name
-   Description
-   Age/group if applicable
-   Meeting information
-   CTA

Use filters or categories if there are many ministries.

------------------------------------------------------------------------

# 16. EVENTS

Create an engaging events experience.

Homepage: - Upcoming event cards - Featured event - Date badges -
Countdown for major events where appropriate

Events page: - Calendar/list view - Filters - Event categories - Search

Event detail page: - Event title - Date - Time - Location -
Description - Speaker - Registration CTA - Map - Add-to-calendar
functionality - Share

Use real event data once supplied.

------------------------------------------------------------------------

# 17. PRAYER REQUEST EXPERIENCE

Prayer is central to the church identity, so give it a dedicated
feature.

Possible section heading:

> **WE BELIEVE IN THE POWER OF PRAYER**

CTA:

> **REQUEST PRAYER**

Form fields: - Name - Email/phone (optional depending on policy) -
Prayer request - Preferred contact method - Consent/privacy checkbox

Provide an option:

> \[ \] Keep my request confidential

Include a confirmation state:

> **Your prayer request has been received.\
> We are standing with you in prayer.**

Do not imply guaranteed outcomes.

Ensure the form is designed with privacy and security in mind.

------------------------------------------------------------------------

# 18. DONATION / GIVING SECTION

The giving experience must be **simple, trustworthy and
straightforward**.

Do not bury the donation CTA.

## Homepage giving section

Use a visually prominent but respectful section.

Suggested headline:

> **GIVE WITH PURPOSE**

Supporting text:

> Your generosity helps support worship, ministry, outreach,
> discipleship and the work of the church.

Primary CTA:

> **GIVE NOW**

Secondary CTA:

> **LEARN ABOUT GIVING**

## Giving page

Clearly explain available giving methods.

Possible methods: - Online card/mobile payment - Bank transfer - Mobile
money - In-person giving - Other official methods

Do not invent account numbers, payment numbers, bank details or payment
providers.

Use placeholders:

`[ONLINE GIVING URL]` `[BANK NAME]` `[ACCOUNT NAME]` `[ACCOUNT NUMBER]`
`[MOBILE MONEY DETAILS]`

If the church later supplies a payment provider, make the primary CTA
connect directly to its secure checkout.

### Donation UX principles

-   Minimal friction
-   Clear amount selection
-   Custom amount
-   Frequency selection if supported
-   Secure payment messaging
-   Confirmation state
-   Receipt information where applicable
-   Never collect card details directly unless a compliant payment
    provider is integrated

------------------------------------------------------------------------

# 19. LOCATION / FIND US

Make finding the church an enjoyable, useful experience.

Create a dedicated "Find Us" section.

### Visual concept

Split layout:

**Left** - Church address - Service times - Phone - CTA: GET DIRECTIONS

**Right** - Interactive map

Possible map integration: - Google Maps - OpenStreetMap - Mapbox

Do not invent coordinates or address.

Use:

`[FULL CHURCH ADDRESS]`

### Interesting interaction

Add a "How to get here" card with: - Driving - Public transport -
Walking - Landmark information

If actual route information is supplied later, make it dynamic.

Add a large:

> **GET DIRECTIONS**

button that opens the appropriate mapping application.

------------------------------------------------------------------------

# 20. CONTACT SECTION

Create a friendly contact experience.

Include:

-   Phone
-   Email
-   Physical address
-   Service times
-   Office hours
-   Social media
-   Contact form

Contact form: - Name - Email - Phone (optional) - Subject - Message

Include a success state.

------------------------------------------------------------------------

# 21. PLAN A VISIT

This should be a dedicated high-conversion page.

Answer the visitor's practical questions:

-   Where are you?
-   When are services?
-   What should I expect?
-   Where do I park?
-   Is there children's ministry?
-   What should I wear?
-   Who can I contact?
-   Is there accessibility support?
-   How long is a service?
-   What happens after the service?

Use real church information when supplied.

Hero CTA:

> **WE'D LOVE TO WELCOME YOU**

------------------------------------------------------------------------

# 22. TESTIMONIES / STORIES

Include a visually compelling section for real stories.

Card content: - Person/photo - Short quote - Name (with permission) -
Category

Examples: - Faith - Family - Healing - Restoration - Salvation -
Community

Do not fabricate testimonials.

Use placeholders until authentic stories are provided.

------------------------------------------------------------------------

# 23. PHOTO / MEDIA GALLERY

Create an optional gallery page or homepage section.

Categories: - Worship - Prayer - Community - Outreach - Youth - Events

Features: - Masonry/grid layout - Lightbox - Keyboard support -
Captions - Lazy loading

Prioritize authentic church photography.

------------------------------------------------------------------------

# 24. LIVESTREAM

If the church streams services, create a dedicated livestream area.

When live: - Prominent LIVE badge - Video player - Current service
title - Chat/link if applicable

When offline: - Show next service - Latest recording - Subscribe/follow
CTA

The UI must gracefully handle the absence of a live stream.

------------------------------------------------------------------------

# 25. NEWSLETTER / CONNECT

Create a simple connection section.

Example:

> **STAY CONNECTED**

> Get church news, upcoming events, encouragement and ministry updates.

Fields: - Email - Optional name

CTA: \> SUBSCRIBE

Include privacy consent where necessary.

------------------------------------------------------------------------

# 26. FOOTER

Create a rich footer.

Include:

### Column 1

Church logo + short description.

### Column 2

Explore: - About - Sermons - Ministries - Events - Leadership

### Column 3

Connect: - Prayer - Give - Contact - Plan a Visit

### Column 4

Visit: - Address - Phone - Email - Service times

Bottom row: - Copyright - Privacy - Terms - Social links

Use the church's red/black/white visual identity.

------------------------------------------------------------------------

# 27. INTERACTION DESIGN

The site should be interactive but not gimmicky.

Use subtle motion for:

-   Hero image transitions
-   Scroll reveals
-   Card hover states
-   Buttons
-   Image zoom
-   Navigation transitions
-   Accordion opening
-   Modal/lightbox
-   Form feedback
-   Page transitions where appropriate

Animation guidelines: - 150--400ms for UI interactions. - Hero
transitions around 700--1200ms. - Avoid excessive parallax. - Avoid
animations that make reading difficult. - Respect
`prefers-reduced-motion`.

------------------------------------------------------------------------

# 28. HERO CAROUSEL TECHNICAL REQUIREMENTS

Recommended React architecture:

`HeroCarousel`

Data-driven slide structure:

``` js
{
  image,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  duration
}
```

Behavior: - Autoplay - Pause on hover/focus - Manual navigation -
Keyboard navigation - Accessible labels - Touch/swipe support -
Reduced-motion support - Preload the first hero image - Lazy-load
subsequent images where appropriate

Do not use a heavy carousel library unless it materially improves
accessibility and maintainability.

------------------------------------------------------------------------

# 29. RESPONSIVE DESIGN

Design mobile-first.

Breakpoints should be based on layout needs rather than arbitrary device
names.

### Mobile

-   One-column layouts
-   Large tap targets
-   Sticky or compact header
-   Swipe-friendly carousels
-   Simplified cards
-   Bottom spacing optimized for thumb navigation

### Tablet

-   Two-column content where useful
-   Larger card grids
-   Expanded navigation

### Desktop

-   Wide editorial layouts
-   Full navigation
-   Multi-column grids
-   Large photography
-   Rich hero composition

Test at: - 360px - 390px - 768px - 1024px - 1280px - 1440px+

------------------------------------------------------------------------

# 30. ACCESSIBILITY

Target WCAG 2.2 AA where practical.

Requirements: - Semantic HTML - Correct heading hierarchy - Keyboard
navigation - Visible focus states - Accessible form labels - Alt text -
Sufficient color contrast - Accessible modal behavior - Accessible
carousel controls - Reduced motion support - Screen-reader-friendly
navigation - No information conveyed by color alone

Never use the red/white palette in a way that creates poor text
contrast.

------------------------------------------------------------------------

# 31. SEO

Each page should support:

-   Unique title
-   Meta description
-   Open Graph metadata
-   Canonical URL
-   Semantic headings
-   Structured content
-   Descriptive URLs
-   Image alt text
-   Sitemap
-   Robots.txt

Recommended structured data where applicable: - Organization - Church /
LocalBusiness-style structured data where appropriate - Event -
VideoObject - BreadcrumbList

Church address and service information should be easy for search engines
to understand.

------------------------------------------------------------------------

# 32. PERFORMANCE

The website should feel fast even on mobile connections.

Requirements: - Responsive images - WebP/AVIF where supported -
Lazy-load below-the-fold images - Optimize hero images - Avoid huge
JavaScript bundles - Code splitting for large routes - Minimize
third-party scripts - Avoid autoplaying video with sound - Use
skeleton/loading states where appropriate

Target: - Excellent Lighthouse performance - Fast first contentful
paint - Fast mobile experience

------------------------------------------------------------------------

# 33. CONTENT MODEL

Build the frontend as a data-driven application.

Do not hard-code all content into visual components.

Recommended models:

### Church

``` js
{
  name,
  tagline,
  description,
  logo,
  address,
  phone,
  email,
  serviceTimes,
  socialLinks
}
```

### Sermon

``` js
{
  id,
  title,
  speaker,
  date,
  series,
  scripture,
  thumbnail,
  videoUrl,
  audioUrl,
  description
}
```

### Pastor

``` js
{
  id,
  name,
  title,
  photo,
  bio,
  ministryFocus,
  socialLinks
}
```

### Ministry

``` js
{
  id,
  name,
  description,
  image,
  audience,
  meetingInfo,
  contact
}
```

### Event

``` js
{
  id,
  title,
  date,
  startTime,
  endTime,
  location,
  image,
  description,
  registrationUrl,
  speaker
}
```

### Testimony

``` js
{
  id,
  name,
  photo,
  quote,
  story,
  category
}
```

This structure should make future CMS integration straightforward.

------------------------------------------------------------------------

# 34. REACT ARCHITECTURE

Suggested component structure:

``` text
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── MobileMenu
│   │   ├── Footer
│   │   └── PageContainer
│   │
│   ├── hero/
│   │   └── HeroCarousel
│   │
│   ├── church/
│   │   ├── ServiceTimes
│   │   ├── ChurchIntro
│   │   ├── ScriptureBlock
│   │   └── PlanVisit
│   │
│   ├── sermons/
│   │   ├── SermonCard
│   │   ├── SermonGrid
│   │   ├── SermonFilters
│   │   └── SermonPlayer
│   │
│   ├── leadership/
│   │   ├── PastorCard
│   │   └── LeadershipGrid
│   │
│   ├── ministries/
│   │   └── MinistryCard
│   │
│   ├── events/
│   │   ├── EventCard
│   │   └── EventCalendar
│   │
│   ├── giving/
│   │   └── GivingOptions
│   │
│   ├── prayer/
│   │   └── PrayerRequestForm
│   │
│   ├── contact/
│   │   └── ContactForm
│   │
│   └── ui/
│       ├── Button
│       ├── Card
│       ├── Modal
│       ├── SectionHeading
│       ├── Badge
│       └── Accordion
│
├── pages/
│   ├── Home
│   ├── About
│   ├── Sermons
│   ├── SermonDetail
│   ├── Ministries
│   ├── Events
│   ├── EventDetail
│   ├── Leadership
│   ├── Prayer
│   ├── Give
│   ├── PlanVisit
│   └── Contact
│
├── data/
├── assets/
├── hooks/
├── utils/
└── styles/
```

The exact structure may be adapted to the implementation environment.

------------------------------------------------------------------------

# 35. DESIGN SYSTEM

Create reusable design tokens.

### Spacing

Use a consistent spacing scale.

### Radius

Prefer subtle rounded corners: - Buttons: 6--10px - Cards: 10--18px -
Large media: 16--24px

Avoid making every element excessively rounded.

### Shadows

Use restrained shadows.

### Buttons

Primary: - Red background - White text

Secondary: - White/light background - Red/dark border

Dark: - Black/charcoal background - White text

Buttons should have: - Hover - Active - Focus - Disabled states.

------------------------------------------------------------------------

# 36. VISUAL COMPONENT IDEAS

Use high-quality editorial compositions rather than repetitive card
grids.

Possible layouts:

### Split-screen

Image on one side, content on the other.

### Overlapping cards

Content card partially overlaps photography.

### Full-bleed image

Text overlay with strong gradient/contrast.

### Scripture typography

Large quote typography over subtle imagery.

### Red feature band

A bold red section containing one important CTA.

### Editorial masonry

For photos/media.

### Timeline

For church history.

### Number/stat strip

Only if authentic statistics are supplied.

------------------------------------------------------------------------

# 37. CHURCH HISTORY

Create an optional About page section:

> **OUR JOURNEY**

Possible timeline: - Founding - Major milestones - Ministry expansion -
Community impact - Present mission - Future vision

Do not invent historical facts.

Use placeholders until leadership provides official history.

------------------------------------------------------------------------

# 38. FAQ

Create an FAQ section/page.

Potential questions:

-   What time are services?
-   Where are you located?
-   What should I wear?
-   Is there children's ministry?
-   Is parking available?
-   Can I request prayer?
-   How can I give?
-   How can I join a ministry?
-   How can I watch sermons?
-   How can I contact a pastor?

Populate only with verified church information.

------------------------------------------------------------------------

# 39. SOCIAL MEDIA

Create social links in header/footer and selected content sections.

Possible platforms: - Facebook - Instagram - YouTube - TikTok - X -
WhatsApp

Only display platforms for which official accounts are provided.

------------------------------------------------------------------------

# 40. STATES & EDGE CASES

Design all important states:

-   Loading
-   Empty
-   Error
-   Success
-   Offline/unavailable video
-   No upcoming events
-   No sermon results
-   Form submission success
-   Form validation error
-   Donation redirect
-   Map unavailable

Example sermon empty state:

> **No messages found**\
> Try another search or browse our latest messages.

------------------------------------------------------------------------

# 41. SECURITY & PRIVACY

For forms: - Validate client and server side. - Protect against spam. -
Never expose private API keys. - Do not store sensitive prayer/contact
data in frontend code. - Use secure backend/form provider. - Include
appropriate privacy messaging. - Use a secure payment provider for
donations.

Prayer requests may contain sensitive personal information. Treat them
accordingly.

------------------------------------------------------------------------

# 42. ANALYTICS

Design implementation points for analytics without hard-coding a
specific vendor.

Potential events: - Hero CTA click - Plan-a-visit click - Sermon play -
Sermon search - Event registration click - Prayer request submitted -
Donation CTA click - Donation completion if provider permits - Contact
form submitted - Directions clicked - Newsletter subscription

Respect privacy and applicable laws.

------------------------------------------------------------------------

# 43. CONTENT PLACEHOLDERS

Because the following information has not yet been supplied, use clearly
labeled placeholders rather than fabricated data:

-   Full physical address
-   GPS coordinates
-   Service times
-   Phone number
-   Email address
-   Social media handles
-   Pastor names
-   Pastor biographies
-   Ministry list
-   Sermon archive
-   Event schedule
-   Donation/bank/mobile-money details
-   Church history
-   Official mission/vision statement
-   Livestream URL
-   YouTube/Vimeo URLs
-   Official photography
-   Testimonials
-   Parking instructions

The implementation must make these values easy to replace.

------------------------------------------------------------------------

# 44. HOMEPAGE CONTENT PRIORITY

The visual hierarchy should prioritize:

### Priority 1

**The Lord Is Here / Welcome**

### Priority 2

**When & Where to Worship**

### Priority 3

**Plan a Visit**

### Priority 4

**Latest Sermon**

### Priority 5

**Prayer**

### Priority 6

**Events & Ministries**

### Priority 7

**Leadership**

### Priority 8

**Giving**

### Priority 9

**Contact / Connect**

------------------------------------------------------------------------

# 45. IMPORTANT UX PRINCIPLE

Every visitor should be able to answer these five questions within
roughly 10--20 seconds:

1.  **What is this place?**
2.  **Where is it?**
3.  **When do services happen?**
4.  **What is happening here?**
5.  **How do I take the next step?**

The design should make the answer to these questions obvious.

------------------------------------------------------------------------

# 46. DESIRED HOMEPAGE EXPERIENCE

A first-time visitor should experience the homepage approximately like
this:

> See beautiful worship imagery\
> ↓\
> Understand "The Lord Is Here"\
> ↓\
> Immediately see how/when to visit\
> ↓\
> Learn who the church is\
> ↓\
> Explore sermons\
> ↓\
> Discover ministries/events\
> ↓\
> See pastors and community\
> ↓\
> Find the church on a map\
> ↓\
> Request prayer / give / contact\
> ↓\
> Feel invited to visit

------------------------------------------------------------------------

# 47. COPYWRITING DIRECTION

Use confident, warm, concise copy.

Prefer: \> **COME AS YOU ARE. SEEK GOD TOGETHER.**

over: \> "We are a religious organization that provides..."

Prefer: \> **THERE IS A PLACE FOR YOU HERE.**

over: \> "Our church welcomes all members of the community."

Avoid excessive religious clichés.

Use Scripture thoughtfully and authentically.

Do not fabricate quotes attributed to pastors or church members.

------------------------------------------------------------------------

# 48. PHOTO & MEDIA DIRECTION

Preferred photography: - Real congregation - Authentic worship -
Prayer - Joyful fellowship - Families - Youth - Children where
appropriate and authorized - Pastoral ministry - Community outreach -
Church architecture - Close emotional moments

Photography should feel: - Natural - Warm - Human - Candid - High
quality

Avoid generic images that make the church look like every other church.

------------------------------------------------------------------------

# 49. MAP EXPERIENCE

The map should not be merely an embedded rectangular map.

Create a designed location card around it.

Possible interaction:

**THE LORD IS HERE**

`[Church Address]`

**Sunday Worship**\
`[Time]`

\[OPEN IN MAPS\]

Map can visually integrate with the site using the brand red as an
accent where the mapping provider allows it.

------------------------------------------------------------------------

# 50. DONATION EXPERIENCE

The giving experience should communicate:

**Trust → Clarity → Action**

Avoid: - Excessive copy - Confusing payment options - Aggressive
donation language - Fake urgency

Use: \> **Your generosity helps the ministry continue to serve, disciple
and reach people.**

Then make the giving action obvious.

------------------------------------------------------------------------

# 51. Figma Make IMPLEMENTATION GUIDANCE

When implementing in Figma Make:

1.  Treat this PRD as the product and design source of truth.
2.  Build a complete responsive React website, not only static mockups.
3.  Use reusable components.
4.  Keep content data-driven.
5.  Use the uploaded logo as the brand reference.
6.  Use placeholder content where official church data is missing.
7.  Do not invent church-specific facts.
8.  Make all navigation links functional.
9.  Create realistic interaction states.
10. Make the hero carousel actually transition.
11. Make forms visually and functionally complete.
12. Make the donation flow ready for a future payment integration.
13. Make the map section ready for a real location.
14. Make sermon content ready for YouTube/Vimeo/audio integration.
15. Ensure the UI works at mobile, tablet and desktop sizes.
16. Maintain excellent accessibility.
17. Avoid excessive animations.
18. Keep the code modular and maintainable.

------------------------------------------------------------------------

# 52. ACCEPTANCE CRITERIA

The first implementation is successful when:

### Branding

-   [ ] Official logo is used correctly.
-   [ ] Red `#A82626`, white and black form the core visual identity.
-   [ ] Typography feels premium, warm and spiritual.

### Homepage

-   [ ] Hero automatically cycles through images.
-   [ ] Hero has manual controls.
-   [ ] Hero has strong CTAs.
-   [ ] Service/location information is easy to find.
-   [ ] Latest sermons are prominent.
-   [ ] Events are discoverable.
-   [ ] Ministries are discoverable.
-   [ ] Leadership is represented.
-   [ ] Prayer is prominent.
-   [ ] Giving is easy to find.
-   [ ] Location/map is easy to use.
-   [ ] Footer contains complete navigation/contact structure.

### Functionality

-   [ ] Navigation works.
-   [ ] Mobile menu works.
-   [ ] Sermon cards link to sermon details.
-   [ ] Sermon filters/search have designed states.
-   [ ] Event pages have appropriate actions.
-   [ ] Prayer form has validation and success state.
-   [ ] Contact form has validation and success state.
-   [ ] Giving CTA is clearly wired for future payment integration.
-   [ ] Directions CTA is ready for real map data.

### Quality

-   [ ] Responsive at mobile/tablet/desktop.
-   [ ] Keyboard accessible.
-   [ ] Good contrast.
-   [ ] Reduced-motion support.
-   [ ] Optimized imagery.
-   [ ] No invented church-specific facts.
-   [ ] Loading/error/empty states are designed.

------------------------------------------------------------------------

# 53. PHASED IMPLEMENTATION PLAN

## Phase 1 --- Foundation

Build: - Design tokens - Header - Mobile navigation - Footer - Button
system - Typography - Color system - Layout system - Logo integration

## Phase 2 --- Homepage

Build: - Hero carousel - Service strip - About - Scripture - Sermons -
Ministries - Events - Prayer - Leadership - Location - Giving - Footer

## Phase 3 --- Inner pages

Build: - About - Sermons - Sermon detail - Ministries - Events - Event
detail - Leadership - Prayer - Give - Plan a Visit - Contact

## Phase 4 --- Integrations

Prepare/integrate: - Map - Video - Audio - Donation provider - Forms -
Newsletter - Social media

## Phase 5 --- Optimization

-   Accessibility audit
-   Mobile QA
-   Performance optimization
-   SEO
-   Analytics
-   Content replacement
-   Browser testing

------------------------------------------------------------------------

# 54. FUTURE FEATURES

Design the architecture so these can be added later:

-   Live streaming
-   Online giving integration
-   Member portal
-   Church management system
-   Online event registration
-   Push notifications
-   Daily devotionals
-   Bible reading plans
-   Prayer wall
-   Testimony submissions
-   Podcast
-   Online courses
-   Small groups
-   Volunteer registration
-   WhatsApp integration
-   Multilingual support
-   PWA/mobile app experience

Do not build all of these in the initial version unless specifically
requested.

------------------------------------------------------------------------

# 55. FINAL DESIGN PRINCIPLE

The website should ultimately communicate one central idea:

> **THIS IS A HOUSE OF PRAYER.\
> THIS IS A PLACE FOR ALL NATIONS.\
> THIS IS A PLACE WHERE PEOPLE CAN ENCOUNTER GOD, FIND COMMUNITY, GROW
> IN FAITH, AND KNOW THAT THE LORD IS HERE.**

The experience should be visually memorable without becoming
distracting, spiritually meaningful without becoming dated, and
technically strong enough to evolve into the church's long-term digital
platform.

------------------------------------------------------------------------

## APPENDIX A --- Initial Brand Content

**Church name:**\
HOUSE OF PRAYER FOR ALL NATIONS

**Tagline:**\
THE LORD IS HERE

**Short name:**\
HOFPAN

**Scripture references in logo:**\
Isaiah 56:7\
Ezekiel 48:35

**Primary brand color:**\
`#A82626`

**Core colors:**\
White / Red / Black

**Primary visual asset:**\
Uploaded official church logo

------------------------------------------------------------------------

## APPENDIX B --- Information Needed Before Production Launch

Replace the following placeholders with official information:

``` text
CHURCH_ADDRESS=
CHURCH_CITY=
CHURCH_COUNTRY=
GPS_LATITUDE=
GPS_LONGITUDE=

PHONE=
EMAIL=
WHATSAPP=

SUNDAY_SERVICE_TIME=
OTHER_SERVICE_TIMES=

SENIOR_PASTOR=
OTHER_PASTORS=

MISSION=
VISION=
ABOUT_TEXT=
CHURCH_HISTORY=

DONATION_URL=
BANK_DETAILS=
MOBILE_MONEY_DETAILS=

YOUTUBE_URL=
FACEBOOK_URL=
INSTAGRAM_URL=
TIKTOK_URL=
X_URL=

LIVESTREAM_URL=

MINISTRIES=
EVENTS=
SERMONS=
TESTIMONIES=
```

------------------------------------------------------------------------

## APPENDIX C --- Instruction to the Implementation Agent

**Build the experience, not just the pages.**

Use the brand identity from the uploaded logo. Make the homepage
visually compelling, particularly the hero carousel, imagery,
typography, sermon presentation, location section, leadership
presentation and giving CTA.

Favor real photography and real church content whenever supplied.

Where information is unavailable, use tasteful placeholders and make the
data easy to replace.

The final result should look like a **professional, modern church
website suitable for public launch**, rather than a wireframe, generic
template, or unfinished prototype.

# APPENDIX D --- OFFICIAL CHURCH CONTENT PROVIDED FOR INITIAL BUILD

The following information was supplied by church officials and should be
treated as **official source content for the initial website build**,
subject to the editorial/verification notes below.

## D.1 Church Leader

**Apostle Stephen Karisa Iha**

-   Born: 1981
-   Marital status: Married
-   Wife: Bahati Mataza
-   Children: 3 sons and 2 daughters

The officials supplied the following children's names: - Mary Kadzo
Stephen - Grace Bahati Stephen - Perez Stephen Karisa - Ezra Karisa
Stephen - Abishai Jasiel Stephen

### Public-profile recommendation

Do **not automatically publish the children's full names on the public
church website**. Their names are not necessary for visitors to
understand the pastor's ministry, and children are involved. Keep this
information in the content source but use only the minimum family
information needed for the public biography unless church leadership
explicitly confirms that the names should be publicly displayed and that
appropriate consent exists.

Recommended public wording:

> **Apostle Stephen Karisa Iha is married to Bahati Mataza, and together
> they are blessed with three sons and two daughters.**

If leadership specifically requests the children's names on the website,
confirm the preferred spelling and publication consent before adding
them.

------------------------------------------------------------------------

## D.2 Church History

### Beginning

> The church started on **3rd April 2005** in **Mtwapa, Mombasa**,
> meeting in a classroom.

### Expansion

> In **2007**, the church moved from the classroom to a bigger place.

### Recommended website presentation

Use a visual "Our Journey" timeline:

**2005 --- The Beginning**\
The church began on 3rd April 2005 in a classroom in Mtwapa, Mombasa.

**2007 --- A Bigger Place**\
The church moved from the classroom to a bigger place as the ministry
grew.

Do not invent additional milestones.

------------------------------------------------------------------------

## D.3 Church Activities & Community Ministry

Officials provided the following activities:

-   Feeding program every Sunday
-   Sunday School for children
-   Youth ministry
-   Outreach and rallies
-   Women's fellowships every first week of the month
-   Kindergarten school serving the community
-   Support for orphans and vulnerable children
-   Evangelistic crusades to villages, known as **"Jesus in the
    Village"**

### Recommended homepage presentation

Do not place this as one long paragraph.

Present it as an "Impact & Ministries" section with visually distinct
cards or feature blocks.

Suggested categories:

**Prayer & Worship**\
Where appropriate, connect this to the church's central identity.

**Children**\
Sunday School and community-focused kindergarten.

**Youth**\
Youth ministry and fellowship.

**Women**\
Women's fellowship held during the first week of each month.

**Community Care**\
Sunday feeding program and support for orphans and vulnerable children.

**Outreach**\
Rallies, evangelistic outreach and "Jesus in the Village" crusades.

Only use these categories as presentation groupings of the supplied
information; do not imply additional programs.

------------------------------------------------------------------------

## D.4 Mission

Official mission:

> **ALL Flesh To see Salvation of the LORD**

### Editorial display recommendation

For the website, preserve the official meaning while improving
capitalization for visual presentation:

> **ALL FLESH TO SEE THE SALVATION OF THE LORD**

Keep the original wording available in the content source if church
leadership wants the exact capitalization retained.

Recommended placement: - Homepage mission/identity section - About
page - Potential hero/supporting brand statement

------------------------------------------------------------------------

## D.5 Scripture / Ministry Theme

Officials supplied:

> Luke 3:4--6

> "As it is written in the book of the words of Esaias the prophet,
> saying, The voice of one crying in the wilderness, Prepare ye the way
> of the Lord, make his paths straight.
>
> Every valley shall be filled, and every mountain and hill shall be
> brought low; and the crooked shall be made straight, and the rough
> ways shall be made smooth;
>
> And all flesh shall see the salvation of God."

### Recommended placement

This should become a major visual Scripture section on the
About/Homepage experience because it directly reinforces the stated
mission:

**ALL FLESH TO SEE THE SALVATION OF THE LORD**

Use: - Large editorial typography - Scripture reference - A restrained
background image/texture - Strong whitespace

Avoid making the entire long passage a large hero paragraph. Present it
as an intentional Scripture feature.

### Bible-version note

The supplied wording appears to follow an older English Bible style.
Preserve the church-provided wording for now. If a formal Bible
translation/version is to be displayed, ask leadership which version
they want credited rather than silently assigning a translation.

------------------------------------------------------------------------

## D.6 Contact Information

Official contact information supplied:

**Apostle Stephen Karisa Iha**\
Email: `kkarisa810@gmail.com`\
Phone: `+254 729 870 123`

Use these as the initial church contact details unless leadership
provides separate official church-office contact information.

Recommended website locations: - Contact page - Footer - Leadership
profile - Plan a Visit section where appropriate

------------------------------------------------------------------------

## D.7 Giving / Church Account

Officials supplied:

**Account name:** Spring Of Miracles Ministry / House Of Prayer For All
Nations\
**Account number:** 1190282585415

### Important implementation requirement

Display giving information only on the dedicated **Give** page/section
and do not expose it casually throughout the website.

Provide: - Clear account name - Account number - Giving explanation -
Copy-account-number interaction - Any additional official payment method
once supplied

Do not claim a payment method is available online unless a secure
payment integration or official payment URL is supplied.

Before public launch, church leadership should verify the account name
and account number exactly as they should appear publicly.

------------------------------------------------------------------------

## D.8 Statement of Faith

Officials supplied:

> We believe in one God in 3 personality. God the Father, Son and The
> Holy Spirit. We believe in salvation through the name of Jesus Christ.
> We believe in Water Baptism, Holy Spirit baptism, speaking in tongues,
> miracles. Believe in the 2nd coming of Jesus Christ and resurrection
> of the dead. The church is the body of Christ and the bride.

### Recommended polished web presentation

Preserve the church's theological meaning while presenting it in clear
website language:

> **We believe in one God, revealed in three Persons: God the Father,
> God the Son, and God the Holy Spirit.**
>
> **We believe in salvation through the name of Jesus Christ.**
>
> **We believe in water baptism and baptism in the Holy Spirit.**
>
> **We believe in the biblical gift of speaking in tongues and in the
> power of God to perform miracles.**
>
> **We believe in the second coming of Jesus Christ and the resurrection
> of the dead.**
>
> **We believe that the Church is the body of Christ and the bride of
> Christ.**

### Important editorial rule

This polished version is a **presentation/editing recommendation**, not
a new theological statement. Church leadership should approve the final
wording before publication.

Recommended placement: - Dedicated "What We Believe" section on About
page - Optional homepage preview - FAQ/visitor experience where
appropriate

Use individual belief statements as visually scannable blocks rather
than one wall of text.

------------------------------------------------------------------------

# APPENDIX E --- CONTENT-TO-PAGE MAP

Use the supplied official content in the following initial structure.

  Content                               Primary location                Secondary location
  ------------------------------------- ------------------------------- -----------------------------
  Church name/tagline                   Header/Hero                     Footer
  Mission                               Homepage identity section       About
  Luke 3:4--6                           Homepage Scripture feature      About
  Church history                        About                           Homepage timeline preview
  Apostle biography                     Leadership                      Homepage leadership preview
  Church activities                     Ministries / Impact             Homepage
  Sunday feeding program                Ministries/Impact               Homepage
  Sunday School                         Ministries                      Homepage
  Youth ministry                        Ministries                      Homepage
  Women's fellowship                    Ministries                      Events
  Kindergarten                          Ministries / Community Impact   About
  Orphans/vulnerable children support   Community Impact                Ministries
  Jesus in the Village                  Outreach                        Events/Ministries
  Contact details                       Contact                         Footer / Leadership
  Giving account                        Give                            Homepage giving CTA
  Statement of Faith                    About / What We Believe         Homepage preview

------------------------------------------------------------------------

# APPENDIX F --- CONTENT PRIORITY

For the first public-facing design:

### Highest priority

1.  The Lord Is Here
2.  House of Prayer for All Nations
3.  Mission: All Flesh to See the Salvation of the Lord
4.  Plan a Visit / service information
5.  Prayer
6.  Latest sermons
7.  Church activities and ministries
8.  Leadership
9.  Location
10. Giving

### Strong supporting content

-   Church history
-   Luke 3:4--6
-   Statement of Faith
-   Community impact
-   Jesus in the Village

Do not overload the homepage with the full Statement of Faith or
complete church history. Use strong previews with links to the
appropriate pages.

------------------------------------------------------------------------

# APPENDIX G --- VERIFICATION ITEMS STILL NEEDED

The following information is still required before final
production/public launch:

-   Exact official church physical address
-   City/county/country formatting for the address
-   GPS/map coordinates or confirmed map location
-   Official service times
-   Additional service times if applicable
-   Separate official church phone/email if different from Apostle
    Stephen's contact
-   Official pastor photo
-   Official pastor biography approved for publication
-   Confirmation of children's-name publication/consent
-   Official ministry names and descriptions
-   Official church history wording if more detail exists
-   Official mission wording/capitalization approval
-   Final approved Statement of Faith wording
-   Giving account verification
-   Additional giving methods, if any
-   Official social media URLs
-   Sermon archive/source
-   Livestream URL, if applicable
-   Official church photography
-   Official event calendar
