/* Single actions file - You may split it into more files next time */

var Reflux = require('reflux');
 
var AppActions = Reflux.createActions([
  'firstAction',
  'secondAction'
]);
 
module.exports = AppActions;