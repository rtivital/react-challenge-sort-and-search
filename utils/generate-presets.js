import dream from 'dreamjs';
import jsonfile from 'jsonfile';
import { v4 } from 'node-uuid';
import mkdirp from 'mkdirp';
import glob from 'glob';
import path from 'path';

const config = {
  path: './public/data.json',
  amount: 150,
  phraseLength: 10,
  images: glob.sync('./images/*.svg').map(file => path.basename(file).replace(/\.svg/g, ''))
};

dream.customType('user-image', (helper) => {
  return helper.oneOf(config.images);
});

dream.customType('user-phrase', (helper) => {
  return helper.chance.sentence({ words: config.phraseLength });
});

dream.customType('randomId', v4);

dream.schema('user', {
  id: 'randomId',
  name: 'name',
  age: 'age',
  phone: 'phone',
  image: 'user-image',
  phrase: 'user-phrase'
});


mkdirp('./public', (err) => {
  err || dream.useSchema('user')
    .generateRnd(config.amount)
    .output((error, result) => jsonfile.writeFile(config.path, result));
});
