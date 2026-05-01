# Run this script from within the project folder
# Right-click on this folder > "Open in Terminal" or PowerShell, then run:
#   .\push_to_github.ps1

$projectPath = "c:\Users\Haroon Traders\Downloads\Sandra - UAV Monitoring System"

Set-Location $projectPath

# Check if git is already initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Cyan
    git init
    git branch -M main
}

# Set remote
$remoteExists = git remote 2>&1 | Select-String "origin"
if (-not $remoteExists) {
    Write-Host "Adding remote origin..." -ForegroundColor Cyan
    git remote add origin https://github.com/Affaq7/Sandra---UAV-Monitoring-System-Frontend-.git
} else {
    Write-Host "Remote already set. Updating URL..." -ForegroundColor Yellow
    git remote set-url origin https://github.com/Affaq7/Sandra---UAV-Monitoring-System-Frontend-.git
}

# Stage all files (node_modules is excluded via .gitignore)
Write-Host "Staging files..." -ForegroundColor Cyan
git add .

# Commit
Write-Host "Committing..." -ForegroundColor Cyan
git commit -m "Initial commit: Sandra UAV Monitoring System frontend

Built for AHCI course - 6th Semester
Team: Affaq, Amna, and Kissa"

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host "Done! Check https://github.com/Affaq7/Sandra---UAV-Monitoring-System-Frontend-" -ForegroundColor Green
