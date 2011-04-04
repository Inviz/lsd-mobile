/*
---
 
script: Date.js
 
description: Date picker input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Mobile.Input
  - LSD/LSD.Trait.Date
  - LSD/LSD.Mixin.Dialog

provides: 
  - LSD.Mobile.Input.Date

...
*/

LSD.Mobile.Input.Date = new Class({
  Includes: [
    LSD.Mobile.Input,
    LSD.Trait.Date,
    LSD.Mixin.Dialog
  ],
  
  options: {
    attributes: {
      type: 'date'
    },
    layout: {
      calendar: {
        "button#decrement": "Back",
        "button#increment": "Forward",
        "table[type=calendar]#table": null
      }
    },
    events: {
      self: {
        expand: function() {
          this.getDialog('calendar').show();
        },
        collapse: function() {
          this.getDialog('calendar').hide();
        }
      },
      dialogs: {
        calendar: {
          expected: {
            "#decrement": {
              click: "decrement"
            }, 
            "#increment": {
              click: "increment"
            }
          }
        }
      }
    },
    states: Array.fast('expanded')
  },
  
  initialize: function() {
    this.parent.apply(this, arguments);
    this.setDate(this.getDate());
  },
  
  getRawDate: function() {
    return this.getValue();
  },
  
  setDate: function(date) {
    this.parent.apply(this, arguments);
    if (this.dialogs && this.dialogs.calendar && this.dialogs.calendar.table) this.dialogs.calendar.table.setDate(date);
  }
});