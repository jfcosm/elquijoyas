const fs = require('fs');
const path = require('path');

const assets = [
  {
    source: path.join(__dirname, '..', 'assets', 'base64', 'anillo-amatista.base64'),
    target: path.join(__dirname, '..', 'public', 'assets', 'images', 'anillo-amatista.png'),
    description: 'Imagen principal del anillo amatista para hero y metadatos'
  }
];

for (const asset of assets) {
  const base64Content = fs.readFileSync(asset.source, 'utf8').replace(/\s+/g, '');
  const buffer = Buffer.from(base64Content, 'base64');
  fs.mkdirSync(path.dirname(asset.target), { recursive: true });
  fs.writeFileSync(asset.target, buffer);
  console.log(`✅ ${asset.description} regenerada en ${path.relative(process.cwd(), asset.target)}`);
}
