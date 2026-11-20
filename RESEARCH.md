# Firefly Heating & Cooling — research and launch checks

Research snapshot: November 20, 2026. This is an independent redesign proposal, not an owner-approved replacement. Confirm each business claim with the owner before transferring the site to their domain.

## Current presence

- The WordPress sitemaps list 14 pages and 12 posts, with `/heating/` appearing in both; category and author archives add four more URLs. Some listed pages are empty WooCommerce routes or thin service posts. This redesign has 30 substantive HTML pages, not a recreated cart or empty account system.[1][2][3]
- The published site describes Columbus/Central Ohio heating, AC repair, heating system installation, heat pumps, ductless systems, filters, air scrubbers, insulation, thermostats, routine maintenance, and residential/commercial work. It advertises 24-hour emergency assistance and free estimates; these are owner-site claims, not independently verified promises.[4][5][6]
- The supplied Facebook profile identifies a Columbus Firefly Heating & Cooling page. Posts and current business details were not fully accessible without a signed-in session; this preview links to the supplied profile but does not copy Facebook endorsements.[8]
- Address conflict: the user-supplied address and Maps listing show **1190 Gabrielle Elaine Dr, Columbus, OH 43228**; the current website says **1325 Waterford Pointe Cir, Columbus, OH 43228**. The preview deliberately gives only Columbus, OH 43228 until the owner confirms the public street address.[7][9]
- In a limited unsigned Maps view, the Google profile displayed 4.9 stars but did not expose full review text or a reliable count. The original website displays Michelle B. and Autumn L. testimonials; the latter are **not labelled Google reviews** on the new site. Yahoo Local syndicates Yelp reviews and must not be conflated with Google.[4][9][10]

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

The About page includes the **original business wordmark** downloaded from the existing Firefly website: `https://fireflyheatingandcooling.com/wp-content/uploads/2024/08/Screenshot_39-removebg-preview.png`. Ask the owner to approve its continued use and supply a vector/hi-res original. It is not a verified logo license for third parties.[4]

Other photographs are locally stored from Unsplash, which permits commercial use without required attribution under its published license.[11] They are illustrative **stock images, not Firefly projects or technicians**:

- `hero-home.jpg` — `https://images.unsplash.com/photo-1618221195710-dd6b41faaea6`
- `home-comfort.jpg` — `https://images.unsplash.com/photo-1586023492125-27b2c045efd7`
- `outdoor-ac.jpg` — `https://images.unsplash.com/photo-1700124113583-81aa99ea2aa2`
- `heat-pump.jpg` — `https://images.unsplash.com/photo-1776860150305-108ed577d7d4`
- `filter.jpg` (thermostat image) — `https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3`

## Before owner approval / full launch

1. Confirm the correct street address and service area; update footer, `HVACBusiness` schema and contact page together.
2. Confirm emergency availability, exact services, whether AC installation and commercial service are actively offered, and any licenses/insurance before stating them as fact.
3. Ask permission to use the existing wordmark and customer quotes, and substitute actual crew/project photographs if available.
4. Confirm current Google reviews with direct access before adding a Google badge or a review aggregate; do not use self-serving `aggregateRating` schema.
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
