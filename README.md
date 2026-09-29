# Siwei Chen Personal Homepage

A responsive academic homepage for GitHub Pages. Open `index.html` directly in a browser; no server, build step, or CDN is required.

## Files

- `index.html`: profile, publications, research, education, projects, and interests.
- `styles.css`: responsive layouts, light/dark themes, and print styles.
- `script.js`: theme preference and active section navigation.
- `cv.txt`: supplied LaTeX resume source.
- `assets/Siwei-Chen-CV.pdf`: downloadable resume compiled from that source.
- `assets/citations/`: BibTeX downloads for published papers and public preprints.
- `assets/icons/`: locally bundled Lucide icons, with their license.
- `assets/*-method.png`: original figures from the author's papers.

The legacy `style.css` is not loaded by the current page.

## Updating content

Edit the semantic HTML in `index.html`. All six publication entries are visible by default. Public preprints have arXiv, PDF, and BibTeX links; manuscripts without public links are listed without placeholder buttons. The profile photograph remains at `assets/avatar.jpg`.

The layout uses a single content column with 17px body text and 16px publication metadata. Paper figures link to their full-resolution files. On narrow screens, content wraps without reducing the body font size.

After changing the resume, rebuild the PDF and update the footer's last-updated date. All content and ordinary links remain usable without JavaScript; the theme button appears only when JavaScript is available. The supplied resume PDF predates the two September 2026 preprints; the homepage uses the verified arXiv metadata for these entries.

To rebuild the PDF using an existing LaTeX installation, create `.preview`, run the following twice to resolve page references, and copy `.preview/cv.pdf` to `assets/Siwei-Chen-CV.pdf`:

```powershell
pdflatex -interaction=nonstopmode -halt-on-error '-output-directory=.preview' cv.txt
```

## Asset sources

- COEVO paper and metadata: https://arxiv.org/abs/2609.33398
- COEVO figure: https://arxiv.org/html/2609.33398v1/COEVO.png
- BRISK-DLM paper and metadata: https://arxiv.org/abs/2609.33390
- BRISK-DLM figure: https://arxiv.org/html/2609.33390v1/figure/overview.png
- DARTS method figure: https://arxiv.org/html/2605.30859v1/method3.png
- Beyond Sight method figure: https://arxiv.org/html/2411.16824v1/method.png
- Lucide icons: https://lucide.dev/ (ISC license, bundled in `assets/icons/LICENSE`).
- Design references: https://knightnemo.github.io/ and https://pingzhitang.cv/.

## GitHub Pages

Publish the repository root through Settings > Pages > Deploy from a branch. The page uses relative asset paths, so it also works when hosted under a repository subpath.
