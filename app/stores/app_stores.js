/* Single actions file - You may split it into more files next time */
var Reflux = require('reflux');
var Actions = require('../actions/app_actions.js');

var Store = Reflux.createStore({
    listenables: Actions,
    onFirstAction: function(date){
      console.log('triggered first action');
      if(date) console.log('got date parameter value: '+ date);
      this.trigger();
    },
    onSecondAction: function(){
      
    }
});

module.exports = Store;