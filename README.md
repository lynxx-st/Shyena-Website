# Shyena Technologies Pvt. Ltd. website

Company website for Shyena Technologies Pvt. Ltd., built with Next.js and the NextForge monorepo modules used by this project.

## Development

Install [Bun](https://bun.sh/), copy `apps/web/.env.example` to `apps/web/.env`, and set the values needed for the features you use. `NEXT_PUBLIC_GA_MEASUREMENT_ID` is the Google Analytics 4 measurement ID; leave it empty to disable Analytics. Then run:

```sh
bun install
bun run dev
```

The site runs at `http://localhost:3001`. Build it with `bun run --filter web build` and check types with `bun run --filter web typecheck`.

## Site content

The public website lives in `apps/web`. It includes the company, services, projects, journal, contact, terms, and privacy pages. The journal is configured through `.pages.yml` and content files in `apps/web/content/posts`.

For editor setup and the blog publishing workflow, see [the journal guide](docs/editorial/README.md).

## Contact

Shyena Technologies Pvt. Ltd. — [whois@shyenasec.com](mailto:whois@shyenasec.com)
