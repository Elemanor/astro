#!/bin/bash

# Remove Hugo-specific files
echo "Removing Hugo files from repository..."

# Remove Hugo config files
git rm -f config.yaml config.toml hugo.yaml hugo.toml .hugo-version || true

# Remove Hugo directories
git rm -rf themes/ archetypes/ || true
git rm -rf static/ || true
git rm -rf layouts/ || true
git rm -rf content/ || true
git rm -rf data/ || true
git rm -rf resources/ || true

# Remove Hugo build files
git rm -rf public/ || true
git rm -f .hugo-build.lock || true

# Remove other Hugo-related files
git rm -f build.sh || true
git rm -f wrangler.toml || true
git rm -f cloudflare.json || true

# Remove all the SEO/competitor analysis files that are Hugo-specific
git rm -f CANNIBALIZATION_*.md || true
git rm -f COMPETITOR_*.md || true
git rm -f CONTENT_*.md || true
git rm -f DEPLOYMENT_*.md || true
git rm -f FLOOD_*.md || true
git rm -f HIGH_*.md || true
git rm -f KEYWORD_*.md || true
git rm -f NEW_*.md || true
git rm -f REMAINING_*.md || true
git rm -f SCHEMA_*.md || true
git rm -f schema-*.md || true
git rm -f seo-data.csv || true
git rm -f extract-seo-data.sh || true
git rm -f fix-internal-links.sh || true
git rm -f generate-ssl-certificate.sh || true
git rm -f deploy-schema.sh || true
git rm -f check-ssl-status.sh || true
git rm -f test-schema.js || true

# Remove HTML files that shouldn't be in source
git rm -f *.html || true

# Remove temporary files
git rm -f sitemap-temp.xml || true

echo "Hugo files removed. Committing changes..."
git add -A
git commit -m "Remove all Hugo files - converting to Astro site"
git push origin master --force

echo "Cleanup complete!"