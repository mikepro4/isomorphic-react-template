/* Single actions file - You may split it into more files next time */
var Reflux = require('reflux');
var Actions = require('../actions/app_actions.js');

var Store = Reflux.createStore({
    items: [],
    listenables: Actions,
    onCreateItem: function(item){
      this.items.push(item);
      this.trigger();
    },
    onRemoveItem: function(item){
      for(var i = 0; i < this.items.length; i++){
        if(this.items[i].id == this.item.id){
          this.items.splice(i, 1);
          break;
        }
      }
    },
    onUpdateItem: function(item){
      for(var i = 0; i < this.items.length; i++){
        if(this.items[i].id == this.item.id){
          this.items[i] == item;
          break;
        }
      }
    },
    onGetItem: function(id){
      for(var i = 0; i < this.items.length; i++){
        if(this.items[i].id == this.item.id){
          return this.items[i];
        }
      }
    },
    onGetItems: function(){
      return this.items;
    }
});

module.exports = Store;