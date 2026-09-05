# Trevor Young Reporting

Production source for the Trevor Young Reporting website.

**Brand promise:** Documenting Life. Reporting What Matters.

## Architecture
This is a dependency-free static site designed for GitHub Pages. It intentionally uses semantic HTML, shared CSS and a small JavaScript file so the first version stays fast, portable and easy to maintain.

## Expected repository
`TheTrevorYoung/trevor-young-reporting`

The pre-domain preview URL is expected to be:

`https://thetrevoryoung.github.io/trevor-young-reporting/`

## Deployment
1. Create a public repository named `trevor-young-reporting` under `TheTrevorYoung`.
2. Add this source tree to the repository on the `main` branch.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Set the source to the `main` branch and `/(root)`.
5. Push updates to `main`; GitHub Pages publishes the static files directly.
6. Verify the Pages URL.

## Tuesday custom-domain cutover
When the domain is purchased:
1. Add and verify the custom domain in GitHub Pages settings before changing DNS.
2. Configure DNS at the registrar.
3. Enable HTTPS when GitHub validates DNS. For this branch-based deployment, configure the custom domain in GitHub Pages settings; do not rely on a repository `CNAME` file as the control plane.
4. Update `robots.txt`, `sitemap.xml`, and the Open Graph image URL from the temporary GitHub Pages hostname to the new canonical domain.
5. Verify apex/www redirect policy, canonical tags, sitemap, social cards and HTTPS.

The HTML canonical link uses the current page URL at runtime, so normal page canonicals follow the host automatically. The sitemap and Open Graph image use the temporary GitHub Pages URL until the custom domain is known.

## Public-content safeguards
- No invented audience metrics
- No fabricated testimonials
- No placeholder sponsor logos
- No unverified social handles
- Newsletter and public contact collection remain disabled until real destinations exist
- Cross-brand institutional claims remain subject to the TYR publication gate

## Key files
- `index.html` — homepage
- `stories/` — editorial archive entry
- `projects/` — long-running work
- `series/` — franchise landing pages
- `about/`
- `newsletter/`
- `work-with-trevor/`
- `corrections/`
- `privacy/`
- `contact/`
- `assets/styles.css`
- `assets/app.js`
- `sitemap.xml`
- `robots.txt`

## Brand tokens
- Ink `#111111`
- Paper/Bone `#F5F2EB`
- White `#FFFFFF`
- Signal Red `#C9362B`
- Slate `#6B7280`

Signal Red is an accent, not a permanent breaking-news treatment.
