const lodash = require('lodash');

const items = [1 , [2 , [3 , 4 , [5 , [6] , 7 , [11]]]]]

const newItems = lodash.flattenDeep(items);
console.log(newItems);
//hello