# Shyena website refresh: research and decisions

## Typeface

- Reference: [IBM Plex on GitHub](https://github.com/IBM/plex). IBM describes the family as designed for user-interface environments and provides Sans, Serif and Mono styles under the SIL Open Font License.
- Useful pattern: a restrained serif for large editorial headings, a readable sans for body and controls, and mono only for short technical details.
- Adaptation: use IBM Plex Serif for display headings, IBM Plex Sans for navigation/body/forms, and IBM Plex Mono for small indices only. This changes the typography away from Arial and removes the previous habit of rendering ordinary labels in widely tracked uppercase mono.
- Do not copy: IBM's corporate identity or use Plex as a substitute for Shyena branding.

## Git-backed editorial CMS

- Reference: [Pages CMS](https://github.com/hunvreus/pagescms), [Pages CMS documentation](https://pagescms.org/docs/) and its [Next.js blog example](https://github.com/pagescms/nextjs-blog-template).
- Useful pattern: article files and media live in the website repository; editors use a web UI to change content, and changes remain visible in Git history.
- Adaptation: configure the repository with `.pages.yml`, put articles in `apps/web/content/posts`, and render published Markdown from Next.js server routes. Publishing requires connecting the GitHub repository to Pages CMS; there are no CMS tokens in the website runtime.
- Do not copy: the example's Tailwind theme or sample posts. The website keeps its own visual system and copy.

## Original Shyena hero

- Reference: `Shyena-Website/src/components/Hero.jsx` and `ThreeCanvas.jsx` in the sibling original site.
- Useful pattern: the original hero led with the security of hardware and operational systems and used a PCB as its central image.
- Adaptation: keep the hardware/connected-systems emphasis and make a lightweight, theme-independent circuit-board illustration in SVG. Remove unsupported assessment counts, client-retention percentages, and the generic “System Secure” indicator.
- Do not copy: unsupported claims about certifications, years of industrial work, hardware labs, customers, countries or performance.

## Design direction

Use an editorial technical identity: warm paper/ink surfaces in light mode, deep green-black surfaces in dark mode, restrained botanical green, asymmetric spacing, and a single PCB illustration as the signature image. Keep labels conversational and short. Use project-specific artwork rather than repeating one stock card motif.
