var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI} from './math';
import {sqrt} from './math';
import {square} from './math';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));   
