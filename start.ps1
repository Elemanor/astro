# PowerShell script to start Astro dev server
Write-Host "Starting Astro development server..." -ForegroundColor Green

# Set environment variable to skip version check
$env:ASTRO_SKIP_VERSION_CHECK = "true"

# Try to use Node 22 if available
$node22Path = Get-Command node -ErrorAction SilentlyContinue | Where-Object { $_.Version -like "22.*" }

if ($node22Path) {
    Write-Host "Using Node.js 22" -ForegroundColor Yellow
    & $node22Path.Source dev-server.js
} else {
    Write-Host "Using default Node.js version" -ForegroundColor Yellow
    node dev-server.js
}