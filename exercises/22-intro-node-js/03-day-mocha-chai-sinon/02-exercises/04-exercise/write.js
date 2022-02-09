const fs = require('fs');

const write = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, content);
    return 'ok';
  } catch(err) {
    return null;
  }
};

module.exports = write;
