/* Single actions file - You may split it into more files next time */
var Reflux = require('reflux');
var Actions = require('../actions/app_actions.js');

// TODO
// Database will hold the single source of truth about the app state
// On the server side, each request should only return a snapshot of this state.
// Client side will take over over this state, and fire actions. 
// These actions sync state between the database and the client state. 
// On reload, the server should again return to the client a snapshot of the database.

var items = [
  {id: 1, title: 'James Pattern', text: 'The night on fire.'}, 
  {id: 2, title: 'Rose Wellington', text: 'She caught the dust of the wind.'},
  {id: 3, title: 'Path Sayer', text: 'Chapter 3, the night when she disappeared.'},
  {id: 4, title: 'Avalon', text: '"Howard. Don\'t go," she said.'}
];

var activeItem = items[0];

var Store = Reflux.createStore({
    listenables: Actions,
    onCreateItem: function(item){
      items.push(item);
      this.trigger();
    },
    onRemoveItem: function(item){
      for(var i = 0; i < items.length; i++){
        if(items[i].id == item.id){
          items.splice(i, 1);
          break;
        }
      }
      this.trigger();
    },
    onUpdateItem: function(item){
      for(var i = 0; i < items.length; i++){
        if(items[i].id == item.id){
          items[i] == item;
          break;
        }
      }
      this.trigger();
    },
    onSetActiveItem: function(id){
      for(var i = 0; i < items.length; i++){
        if(items[i].id == id){
          activeItem = items[i];
          break;
        }
      }
      this.trigger(activeItem);
    },
    getItem: function(id){
      if(typeof(window) == 'undefined'){
        this.requestItemData()
      }else{
        var self = this;
        this.requestItemData(function(){
          self.saveState();
        });
      }

      for(var i = 0; i < items.length; i++){
        if(items[i].id == id){
          activeItem = items[i];
          return items[i];
        }
      }
    },
    requestItemData: function(callback){
      console.log('returning data');
      if(callback) callback();
    },
    saveState: function(){
      console.log('saving state')
    },
    getItems: function(){
      return items;
    }
  });

module.exports = Store;