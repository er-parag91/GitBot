const jsonfile = require('jsonfile');
const random = require('random');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';





const makeCommit = (n=5) => {
  if (n === 0) return simpleGit().push();
  const x = random.int(0, 53);
  const y = random.int(0, 6);
  const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
  console.log(DATE);
  jsonfile.writeFile(FILE_PATH, { GitBot: DATE }, () => {
    simpleGit().add(FILE_PATH).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n))
  });
}

makeCommit();