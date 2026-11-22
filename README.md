# Firefly Heating & Cooling — independent website redesign preview

30 generated static HTML pages, responsive CSS, small progressive-enhancement JavaScript, **31 distinct in-page HVAC-related images**, descriptive metadata, JSON-LD `HVACBusiness`/`Service`/`WebPage`/FAQ markup, and a sitemap. Five photos come from Firefly’s publicly visible Facebook material, six assets from its original website, and the remaining illustrations/photos are distinct relevant stock. The preview is **not** affiliated with or approved by the business yet. See [RESEARCH.md](RESEARCH.md) for source notes and address/review caveats; see [ASSETS.md](ASSETS.md) for per-image provenance.

The trade-site refresh uses a full-width split hero, a larger sticky header with an always-visible tap-to-call control, bigger call/request actions, and a brighter HVAC-blue/orange palette. It adopts conversion patterns from the supplied examples without copying their brand or adding unverified licensing, pricing, financing, warranty, or response-time claims. The hero's 4.9/5 and 27-review figures are **user-supplied, not independently verified** and labelled accordingly on the page.

## Put the preview on GitHub Pages (short version)

1. Open the repo **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**; set **main /docs** and Save. The preview is generated in `docs/` and needs no workflow permissions.
3. Once the deployment succeeds, visit `https://andrianventures.github.io/firefly-heating-cooling-redesign/`.

GitHub Pages is public and **cannot run a form backend**. This preview intentionally uses `noindex,nofollow` to avoid competing with Firefly's existing domain.

### Form behavior

On GitHub Pages or any other static host, the contact form validates fields and opens a prepared **SMS draft** addressed to (614) 363-9941; the visitor **must press Send in their messaging app**. A Copy button is included when the device cannot open SMS. The website does **not** itself deliver a message in this mode. Do not claim otherwise in a sales demo. The form only switches to automatic delivery when it detects the included first-party Node server at `/api/form-status`.

For automatic, first-party submission without a third-party form service, deploy the same `docs/` directory together with `server.mjs` to a **Node.js-capable HTTPS host**:

```bash
FIREFLY_BASE=https://your-final-domain.example/ python3 docs/build.py
FIREFLY_ADMIN_PASSWORD='a-unique-secret-at-least-16-characters' FIREFLY_DATA_DIR=/private/writable/firefly PORT=8080 HOST=127.0.0.1 node server.mjs
```

Use a persistent writable private directory **outside the public web root**, set a strong password as an environment secret, reverse-proxy HTTPS to the Node port, and keep the password out of the repository. The owner inbox is `https://your-final-domain.example/owner/inbox` (HTTP Basic Auth, username can be `owner`; password is the environment secret). Forms write to the local private `enquiries.jsonl` file with no external integration; no email notification is sent. Arrange backup/retention and HTTPS with the owner before real use. **Do not launch with the example secret.**

`FIREFLY_BASE` controls canonicals, Open Graph URLs, schema IDs, sitemap and asset paths. The default build targets the GitHub preview and adds `noindex,nofollow`; a final-domain build enables indexing for public pages but keeps draft privacy/accessibility pages noindexed pending owner review. Never point this preview's canonical metadata at a domain the owner has not connected.

### Development

```bash
FIREFLY_BASE=http://127.0.0.1:8080/ python3 docs/build.py
FIREFLY_ADMIN_PASSWORD='local-test-secret-only-123456' PORT=8080 node server.mjs
```

`docs/build.py` is the editable source for page text and metadata. Commit the regenerated `docs/` pages after changes. Main HTML/CSS/JS remains static and can be hosted on any static host; the optional server only handles delivery and the inbox.

## Owner approval checklist

- Confirm public street address: user/Maps supply 1190 Gabrielle Elaine Dr, while the current website displays 1325 Waterford Pointe Cir. The preview does not publish either street address.
- Confirm exact service offerings, 24-hour availability and free-estimate terms; verify the supplied 4.9/5 and 27 Google-review figures against the live listing. No individual Google review text was accessible for this preview.
- Approve use of original business wordmark, website/Facebook images and customer testimonials; substitute owner-supplied originals or additional crew/project photos when available.
- Review draft privacy wording and decide on data retention before enabling the inbox for real customers.
- When transferring to the original business domain, plan 301 redirects for old service slugs and remove obsolete WooCommerce URLs safely, then submit the final sitemap.
