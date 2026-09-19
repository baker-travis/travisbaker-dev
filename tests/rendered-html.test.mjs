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
  const manifest = JSON.parse(packageJson);
  const dependencyNames = Object.keys({
    ...manifest.dependencies,
    ...manifest.devDependencies,
  }).join("\n");
  assert.doesNotMatch(
    dependencyNames,
    /^(vinext|drizzle-orm|drizzle-kit|@cloudflare\/vite-plugin)$/m,
  );
  await assert.rejects(access(previewRoot));
  await assert.rejects(access(new URL("public/_sites-preview", templateRoot)));
  await assert.rejects(access(new URL("../.openai/hosting.json", import.meta.url)));
  await assert.rejects(access(new URL("../drizzle", import.meta.url)));
});

test("offers a persistent and accessible system, light, or dark theme", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /prefers-color-scheme: dark/);
  assert.match(layout, /localStorage\.getItem\("portfolio-theme"\)/);
  assert.match(page, /<span className="visually-hidden">Color theme<\/span>/);
  assert.match(page, /<option value="system">System<\/option>/);
  assert.match(page, /colorScheme\.addEventListener\("change", followSystemTheme\)/);
  assert.match(page, /themePreferenceRef\.current !== "system"/);
  assert.match(page, /localStorage\.removeItem\("portfolio-theme"\)/);
  assert.match(page, /localStorage\.setItem\("portfolio-theme", selectedPreference\)/);
  assert.doesNotMatch(page, /localStorage\.setItem\("portfolio-theme", theme\)/);
});
