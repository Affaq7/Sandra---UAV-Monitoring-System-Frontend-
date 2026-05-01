import fs from 'fs';
import path from 'path';

const filePath = path.join('c:', 'Users', 'Haroon Traders', 'Downloads', 'holographic-vision-update-main', 'public', 'uav.html');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/10,\s*22,\s*40/g, 'var(--rgb-card)');
content = content.replace(/6,\s*12,\s*26/g, 'var(--rgb-panel)');

const rootVars = `  :root {
    --rgb-void: 2, 5, 16;
    --rgb-panel: 6, 12, 26;
    --rgb-card: 10, 22, 40;`;
content = content.replace('  :root {', rootVars);

const lightModeVars = `
  body.light-mode {
    --bg-void: #f1f5f9;
    --bg-deep: #e2e8f0;
    --bg-surface: #ffffff;
    --rgb-void: 241, 245, 249;
    --rgb-panel: 255, 255, 255;
    --rgb-card: 255, 255, 255;
    --bg-glass: rgba(0,0,0,0.04);
    --bg-glass-hover: rgba(0,0,0,0.08);
    --border-glass: rgba(0,0,0,0.12);
    --text-primary: #0f172a;
    --text-secondary: #334155;
    --text-muted: #64748b;
    --shadow-card: 0 4px 16px rgba(0,0,0,0.05), 0 1px 0 rgba(255,255,255,1) inset;
  }
`;
content = content.replace('  body {', lightModeVars + '\n  body {');

fs.writeFileSync(filePath, content);
console.log('Replacements complete');
