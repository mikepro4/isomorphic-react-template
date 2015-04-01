'use strict';

var HomePageRouterMixin = {
  selectHomePage: function (user) {
    if (user.mode === "enterprise") {
      this.transitionTo('enterprise')
    } else if (user.mode === "exchange") {
      this.transitionTo('exchange')
    } else {
      this.transitionTo('index')
    }
  }
}

module.exports = HomePageRouterMixin;