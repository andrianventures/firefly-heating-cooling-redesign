# Firefly Heating & Cooling — research and launch checks

Research snapshot: November 20, 2026. This is an independent redesign proposal, not an owner-approved replacement. Confirm each business claim with the owner before transferring the site to their domain.

## Current presence

- The WordPress sitemaps list 14 pages and 12 posts, with `/heating/` appearing in both; category and author archives add four more URLs. Some listed pages are empty WooCommerce routes or thin service posts. This redesign has 30 substantive HTML pages, not a recreated cart or empty account system.[1][2][3]
- The published site describes Columbus/Central Ohio heating, AC repair, heating system installation, heat pumps, ductless systems, filters, air scrubbers, insulation, thermostats, routine maintenance, and residential/commercial work. It advertises 24-hour emergency assistance and free estimates; these are owner-site claims, not independently verified promises.[4][5][6]
- The supplied Facebook profile was publicly accessible without signing in. Its public photo grid exposed several thumbnails and a recent blower-motor post, but a complete album and all post context were not accessible. Five distinct photos from the visible public material were downloaded locally and used on relevant pages. The supplied Facebook URL is linked in the site; no Facebook endorsement is fabricated.[8]
- Address conflict: the user-supplied Google listing details give **1190 Gabrielle Elaine Dr, Columbus, OH 43228**; the current website and Facebook profile give **1325 Waterford Pointe Cir, Columbus, OH 43228**. The preview deliberately gives only Columbus, OH 43228 until the owner confirms the public street address.[7][8][9]
- The user supplied **4.9/5 and 27 Google reviews**. A limited unsigned Maps view showed 4.9 stars but did not expose full review text or an independently reliable count.[9] The redesign displays the supplied figures with a caveat and links to the Google listing, but uses **no Google review quotations** or `aggregateRating` schema. Firefly’s original website separately displays Michelle B. and Autumn L. testimonials; those are expressly labelled company-site quotes.[4] Yahoo Local syndicated a Yelp snapshot of 3.5 stars across five reviews, including two one-star reviews; that feed is not Google.[10]

## Local intent mapping

These are **content targets, not search-volume or ranking claims**. The site uses natural service/topic language rather than repetitive city stuffing:

| Candidate local search | Landing page |
|---|---|
| HVAC service Columbus OH | `/` |
| HVAC services Columbus OH | `/services/` |
| AC repair Columbus OH | `/ac-repair/` |
| emergency AC repair Columbus OH | `/emergency-hvac/` |
| 24 hour HVAC repair Columbus OH | `/emergency-hvac/` |
| AC installation Columbus OH | `/ac-installation/` |
| air conditioning service Columbus OH | `/cooling/` |
| AC tune up Columbus OH | `/ac-maintenance/` |
| heating repair Columbus OH | `/heating/` |
| furnace repair Columbus OH | `/furnace-repair/` |
| heating installation Columbus OH | `/heating-installation/` |
| heating tune up Columbus OH | `/heating-maintenance/` |
| heat pump repair Columbus OH | `/heat-pump-repair/` |
| heat pump service Columbus OH | `/heat-pumps/` |
| ductless mini split Columbus OH | `/ductless/` |
| indoor air quality Columbus OH | `/indoor-air-quality/` |
| HVAC air filters Columbus OH | `/air-filters/` |
| thermostat installation Columbus OH | `/thermostats/` |
| commercial HVAC Columbus OH | `/commercial-hvac/` |
| commercial AC repair Columbus OH | `/commercial-air-conditioning/` |
| HVAC maintenance Columbus OH | `/hvac-maintenance/` |
| HVAC near Hilliard OH | `/service-areas/` |
| HVAC near Galloway OH | `/service-areas/` |
| HVAC near Dublin OH | `/service-areas/` |
| HVAC near Westerville OH | `/service-areas/` |

The original location list includes the spellings “Powel” and “Ghana”; those were not promoted into new service-area claims. Verify service boundaries before adding individual city pages.[4]

## Imagery and rights

The redesign now assigns **31 distinct in-page assets to 31 visible placements** across 30 pages: eleven files sourced from Firefly’s existing website/Facebook (including its branded van, a blower-motor photo, a filter photo and relevant equipment graphics), and 20 topic-matched Unsplash photos. The social-share graphic derives from the business van but is not an extra in-page placement. The photo-by-photo URL and usage table is in [ASSETS.md](ASSETS.md). Do not describe every site-hosted image as a Firefly job: the original site’s AC service image looks like stock, and equipment diagrams are illustrative. Ask the owner to approve use of the original wordmark, business photos and quotations before an official launch. Unsplash permits commercial use under its published license.[4][8][11]

No generic living-room “comfort” photographs remain. Illustrative images show HVAC equipment, controls, filters, ductwork, installation or insulation; the air-scrubber page uses the original website’s airflow diagram rather than a portable room purifier. Each photo has a descriptive, provenance-aware alt attribute.

## Before owner approval / full launch

1. Confirm the correct street address and service area; update footer, `HVACBusiness` schema and contact page together.
2. Confirm emergency availability, exact services, whether AC installation and commercial service are actively offered, and any licenses/insurance before stating them as fact.
3. Ask permission to use the existing wordmark and customer quotes, and substitute actual crew/project photographs if available.
4. Confirm the current Google rating/count and review wording in the owner’s Google Business Profile before treating the supplied 4.9/27 figures as current; do not add self-serving `aggregateRating` schema.
5. Replace the preview host in canonicals, Open Graph tags, JSON-LD and sitemap with the final domain using `FIREFLY_BASE`; only then remove preview `noindex`. Review the draft privacy wording with the owner.
6. For autonomous form submissions, run the supplied Node server on a secure HTTPS host and set a strong `FIREFLY_ADMIN_PASSWORD`; GitHub Pages itself cannot run a server. Test the private inbox after deployment.

## Sources

[1] https://fireflyheatingandcooling.com/wp-sitemap.xml
[2] https://fireflyheatingandcooling.com/wp-sitemap-posts-page-1.xml
[3] https://fireflyheatingandcooling.com/wp-sitemap-posts-post-1.xml
[4] https://fireflyheatingandcooling.com
[5] https://fireflyheatingandcooling.com/hvac
[6] https://fireflyheatingandcooling.com/about-us
[7] https://fireflyheatingandcooling.com/contact-us
[8] https://www.facebook.com/profile.php?id=100089418160062
[9] https://www.google.com/maps/place?q=place_id:ChIJkeCkTIeD2wIRX5lBdad94wg
[10] https://local.yahoo.com/info-233774668-firefly-heating-cooling-columbus
[11] https://unsplash.com/license
