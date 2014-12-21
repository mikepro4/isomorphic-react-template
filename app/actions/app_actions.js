/* Single actions file - You may split it into more files next time */

var Reflux = require('reflux');
 
var Actions = Reflux.createActions([
  'createItem',
  'updateItem',
  'removeItem',
  'setActiveItem'
]);
 
module.exports = Actions;