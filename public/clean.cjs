const fs = require('fs');
const path = require('path');

const filePath = path.join('c:', 'Users', 'Haroon Traders', 'Downloads', 'holographic-vision-update-main', 'public', 'uav.html');
let content = fs.readFileSync(filePath, 'utf8');

// Remove HTML comments: <!-- ... -->
content = content.replace(/<!--[\s\S]*?-->/g, '');

// Remove CSS block comments: /* ... */
content = content.replace(/\/\*[\s\S]*?\*\//g, '');

// Remove JS line comments: // ...
// But be careful not to remove URLs like http://...
// Since there aren't many URLs, a simple approach is to use a regex that matches // except when preceded by :
content = content.replace(/(?<!:)\/\/.*$/gm, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Comments removed successfully.");
