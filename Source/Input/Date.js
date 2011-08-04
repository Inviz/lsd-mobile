/*
---
 
script: Date.js
 
description: Date picker input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Mobile.Input
  - LSD.Mobile.Body.Dialog
  - LSD/LSD.Mixin.Date

provides: 
  - LSD.Mobile.Input.Date

...
*/

LSD.Mobile.Input.Date = new Class({
  options: {
    attributes: {
      type: 'date'
    },
    events: {
      self: {
        focus: 'expand'
      }
    },
    pseudos: Array.object('date'),
    states: Array.object('expanded'),
    events: {
      self: {
        setDate: function(date) {
          if (date) this.element.set('value', this.formatDate(date));
          if (this.dialog) this.dialog.setDate(date);
        }
      }
    }
  }
});