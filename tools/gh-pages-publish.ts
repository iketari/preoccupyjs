const { cd, exec, echo, touch, mkdir, cp, rm } = require('shelljs');
const { readFileSync } = require('fs');
const url = require('url');

let repoUrl;
let pkg = JSON.parse(readFileSync('package.json') as any);
if (typeof pkg.repository === 'object') {
  if (!pkg.repository.hasOwnProperty('url')) {
    throw new Error('URL does not exist in repository section');
  }
  repoUrl = pkg.repository.url;
} else {
  repoUrl = pkg.repository;
}

let parsedUrl = url.parse(repoUrl);
let repository = (parsedUrl.host || '') + (parsedUrl.path || '');
let ghToken = process.env.GH_TOKEN;

rm('-rf', 'temp')
mkdir('temp');
echo('Copying demo SPA...');
cp('-r', 'test-spa/dist/*', 'temp/demo');
echo('Copying docs...');
cp('-r', 'docs', 'temp');
echo('Copying coverage...');
cp('-r', 'coverage', 'temp');
cd('temp');
echo('Initiasing git repo...');
exec('git init');
exec('git add .');
exec('git config user.name "Artsiom Mezin"');
exec('git config user.email "artsiom.mezin@behavox.com"');
exec('git commit -m "docs(docs): update gh-pages"');
echo('Deploying...');
exec(`git push --force --quiet "https://${ghToken}@${repository}" master:gh-pages`);
echo('All deployed!');
