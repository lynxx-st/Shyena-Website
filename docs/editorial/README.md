# Website journal

The journal uses [Pages CMS](https://pagescms.org/) with content stored in this repository. `.pages.yml` defines the editable `Journal` collection; article files live in `apps/web/content/posts/` and the website renders only entries with `published: true`.

## Connect the editor

1. Push this repository to GitHub.
2. Sign in to Pages CMS, install its GitHub App for the account or organization that owns the repository, and select this repository.
3. Open the `Journal` collection and create or update an article. Changes are saved to the selected GitHub branch and appear on the site after its normal deployment completes.

No CMS API key is needed by the website. GitHub repository access is required to edit content.

## Article fields

- `slug`: lowercase URL path, using letters, numbers and hyphens.
- `title`, `date`, `description`: shown in the article page and search metadata.
- `published`: set to true only when the article is ready to appear on the site and sitemap.
- `body`: Markdown. The page supports paragraphs, level-two and level-three headings, unordered lists, bold, italic, inline code and HTTP/HTTPS links.

The site escapes text when rendering and accepts only HTTP/HTTPS Markdown links. It does not currently render images, raw HTML, tables or embedded media from article bodies.
