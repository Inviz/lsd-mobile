/*
---
 
script: Date.js
 
description: Date picker input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Mobile.Input
  - LSD.Mobile.Body.Dialog
  - LSD/LSD.Trait.Date
  - LSD/LSD.Mixin.Dialog

provides: 
  - LSD.Mobile.Input.Date

...
*/

LSD.Mobile.define('Input.Date', {
  Implements: [
    LSD.Trait.Date,
    LSD.Mixin.Dialog
  ],
  
  options: {
    attributes: {
      type: 'date'
    },
    events: {
      element: {
        focus: 'expand'
      },
      self: {
        focus: 'expand',
        expand: function() {
          this.callChain();
        }
      }
    },
    chain: {
      prompt: function() {
        return {action: 'dialog', target: 'datepicker'}
      },
      update: function() {
        return { 
          callback: function(date) {
            this.setDate(date);
            this.collapse();
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
  
  setDate: function(date) {
    this.parent.apply(this, arguments);
    if (date) this.element.set('value', this.formatDate(date));
    if (this.dialog) this.dialog.setDate(date);
  }
});

LSD.Mobile.define('Body.Dialog.Datepicker', {
  Extends: LSD.Mobile.Body.Dialog,
  
  Implements: LSD.Trait.Date,
  
  options: {
    classes: Array.fast('datepicker'),
    layout: {
      '::decrementor': 'Previous month',
      '::incrementor': 'Next month',
      '::table': true,
      '::closer': 'Close dialog'
    },
    has: {
      one: {
        table: {
          selector: 'table[type=calendar]',
          events: {
            set: 'selectDate'
          }
        },
        decrementor: {
          selector: 'button#decrement',
          events: {
            click: 'decrement'
          }
        },
        incrementor: {
          selector: 'button#increment',
          events: {
            click: 'increment'
          }
        },
        closer: {
          selector: 'button#closer',
          events: {
            click: 'cancel'
          }
        }
      }
    }
  },
  
  getData: function() {
    return this.date;
  },
  
  setDate: function(date) {
    this.parent.apply(this, arguments);
    this.table.setDate(date);
  },
  
  selectDate: function(date) {
    this.setDate(date);
    this.submit();
  }
})