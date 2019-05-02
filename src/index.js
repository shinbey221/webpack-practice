import _ from 'lodash'
import * as util from './util.js'

console.log(util.Nijou(2));
console.log(util.NAME);

function component(){
  const element = document.createElement('div');
  const array = ['hello', 'webpack', '!!!']
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component());
