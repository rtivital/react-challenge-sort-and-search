const dream = require('dreamjs');
const jsonfile = require('jsonfile');
const uuid = require('node-uuid');
const mkdirp = require('mkdirp');
const glob = require('glob');
const path = require('path');


const config = {
  path: './public/data.json',
  amount: 150,
  phraseLength: 10,
  images: glob.sync('./images/*.svg').map(file => path.basename(file).replace(/\.svg/g, '')),
};

dream.customType('user-image', (helper) => helper.oneOf(config.images));
dream.customType('user-phrase', (helper) => helper.chance.sentence({ words: config.phraseLength }));
dream.customType('randomId', uuid.v4);

dream.schema('user', {
  id: 'randomId',
  name: 'name',
  age: 'age',
  phone: 'phone',
  image: 'user-image',
  phrase: 'user-phrase',
});

mkdirp('./public', (err) => {
  err || dream.useSchema('user')
    .generateRnd(config.amount)
    .output((error, result) => jsonfile.writeFile(config.path, result));
});
