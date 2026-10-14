# Publishing to the Shyena journal

The journal uses [Pages CMS](https://pagescms.org/) to edit Markdown files stored in this repository. The site reads articles from `apps/web/content/posts/`; articles marked `published: true` appear on `/blog`, their own article page, and the sitemap.

## Connect Pages CMS

The repository includes the CMS configuration in `.pages.yml`. The hosted editor still needs to be connected to the GitHub repository:

1. Open [Pages CMS](https://app.pagescms.org/) and sign in with GitHub.
2. Install Pages CMS's GitHub App for the GitHub account or organization that owns `lynxx-st/Shyena-Website`. A repository administrator may be needed to approve access.
3. Select `lynxx-st/Shyena-Website`, then choose the branch you want to edit.
4. Open the **Journal** collection. It reads the fields and article location from `.pages.yml`.

The Pages CMS connection has not been verified from this repository. Once connected, the website itself needs no CMS API key: Pages CMS saves the content changes to GitHub, and the website builds from those files.

## Write and publish a post

1. In **Journal**, create a new article.
2. Set **URL slug** to lowercase words separated by hyphens, for example `reviewing-device-firmware`. The slug is also the article filename and URL (`/blog/reviewing-device-firmware`). Keep it aligned with the filename if renaming an existing post.
3. Add a clear **Title**, a publication **Date**, and a short **Summary**. The summary appears in the journal list and search metadata.
4. Write the article in **Article**. Use specific observations, explain their context, and distinguish confirmed facts from recommendations. Remove secrets, personal data, and customer details unless they are approved for publication.
5. Leave **Publish this article** off while drafting. Turn it on only when the post is ready for the public site.
6. Save to the intended branch. Review the change and, if you used a working branch, merge it into `main` through the repository's normal review flow.
7. Check the website after its build and deployment finish: open `/blog`, open the article, and confirm the title, date, summary, links, and formatting. A post marked unpublished does not appear on the site or its sitemap.

## What the editor fields mean

| Field | Use |
| --- | --- |
| URL slug | Lowercase path and filename, using letters, numbers, and single hyphens. |
| Title | The article heading and page title. |
| Publication date | The date shown to readers. |
| Summary | A concise description used on the journal card and in search metadata. |
| Publish this article | Controls public visibility. Keep off for drafts. |
| Article | Markdown content, edited with Pages CMS's rich-text editor. |

## Formatting supported on the site

The article renderer supports paragraphs, level-two and level-three headings, bulleted and numbered lists, blockquotes, bold, italic, inline code, and HTTP/HTTPS links. It does not currently render images, raw HTML, tables, or embedded media. Image uploads are disabled in the article editor to avoid publishing media that the site cannot display.

For example, the Article field can contain:

```markdown
Opening paragraph that states the problem and context.

## What we observed

Describe what was checked and what evidence supports the finding.

1. Identify the affected component.
2. Explain the condition needed to reproduce it.

> Separate what the test confirmed from what still needs verification.

Recommend a next step, with **bold emphasis** only where it helps the reader.
```

## Local editing

If you prefer to edit files directly, create a Markdown file under `apps/web/content/posts/`. Use the fields above as YAML frontmatter and set `published: false` until it is ready. Changes follow the same Git review, build, and deployment process as edits made in Pages CMS.

## CMS references

- [Pages CMS quick start](https://pagescms.org/docs/quick-start/)
- [`.pages.yml` configuration](https://pagescms.org/docs/configuration/)
- [Rich-text field options](https://pagescms.org/docs/configuration/fields/rich-text/)
