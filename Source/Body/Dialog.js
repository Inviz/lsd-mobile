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
  Includes: [
    LSD.Mobile.Body.Page,
    LSD.Trait.Fieldset
  ],
  
  options: {
    classes: Array.fast('dialog'),
    pseudos: Array.fast('submittable'),
    nodeType: 1,
    element: {
      tag: 'section'
    },
    transformation: {
      name: 'pop'
    },
    events: {
      _dialog: {
        element: {
          'click:relay(.cancel)': 'cancel'
        },
        self: {
          hide: function() {
            if (LSD.application) LSD.application.back();
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
              return {name: 'send', target: this.document}
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
  
  hidden: true
});