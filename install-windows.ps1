# PowerShell script to properly install dependencies on Windows
Write-Host "Cleaning up Linux dependencies..." -ForegroundColor Yellow
Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "package-lock.json" -Force -ErrorAction SilentlyContinue

Write-Host "Installing dependencies for Windows..." -ForegroundColor Green
# Use cmd to ensure Windows npm is used
cmd /c "npm install"

Write-Host "Installation complete!" -ForegroundColor Green
Write-Host "Run '.\start.ps1' to start the dev server" -ForegroundColor Cyan