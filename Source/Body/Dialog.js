/*
---
 
script: Body.Page.js
 
description: An in-page independent document (like iphone app page)
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Mobile.Body.Page

provides:
  - LSD.Mobile.Body.Dialog

...
*/

LSD.Mobile.Body.Dialog = new Class({
  Extends: LSD.Mobile.Body.Page,
  
  Implements: [LSD.Trait.Fieldset],
  
  options: {
    transformation: {
      name: 'slideup'
    },
    classes: Array.fast('dialog'),
    events: {
      _dialog: {
        element: {
          'click:relay(.cancel)': 'cancel'
        },
        self: {
          hide: function() {
            if (LSD.application) LSD.application.back();
          },
          'submit': function() {
            var caller = this.getCaller();
            if (caller && caller.callChain) caller.callChain(this.getData());
          },
          'cancel': function() {
            var caller = this.getCaller();
            if (caller && caller.clearChain) caller.clearChain(this.getData());
          }
        }
      }
    },
    has: {
      one: {
        'form': {
          selector: 'form',
          chain: {
            'submission': function() {
              return {action: 'send', target: this.document}
            }
          }
        }
      }
    }
  },
  
  cancel: function() {
    this.hide();
    this.fireEvent('cancel', arguments);
  },
  
  submit: function() {
    this.hide();
    this.fireEvent('submit', arguments);
  },
  
  getData: function() {
    return (this.form ? this.form.getData : this.parent).apply(this.form || this, arguments);
  },
  
  hidden: true,
  
  getCaller: function() {
    return this.options.caller && this.options.caller.call(this);
  }
});