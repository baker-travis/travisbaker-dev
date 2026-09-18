import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);
const previewRoot = new URL("../app/_sites-preview/", import.meta.url);

test("exports the Travis Baker portfolio", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Travis Baker — Principal Software Engineer<\/title>/i);
  assert.match(html, /I build software platforms that create lasting leverage\./);
  assert.match(html, /Selected work/);
  assert.match(html, /Composable frontend and delivery platform/);
  assert.match(html, /Résumé/);
  assert.match(html, /Bestow/);
  assert.match(html, /application\/ld\+json/);
  await access(new URL("../out/travis-baker-resume.pdf", import.meta.url));
});

test("ships portfolio metadata without starter artifacts", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Travis Baker/);
  assert.match(layout, /Travis Baker — Principal Software Engineer/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(packageJson, /vinext|drizzle|@cloudflare\/vite-plugin/);
  await assert.rejects(access(previewRoot));
  await assert.rejects(access(new URL("public/_sites-preview", templateRoot)));
  await assert.rejects(access(new URL("../.openai/hosting.json", import.meta.url)));
});
