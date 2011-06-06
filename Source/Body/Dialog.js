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
  
  options: {
    transformation: {
      name: 'slideup'
    },
    pseudos: Array.fast('fieldset'),
    classes: Array.fast('dialog'),
    events: {
      _dialog: {
        element: {
          'click:relay(.cancel)': 'cancel'
        },
        self: {
          hide: function() {
            if (LSD.document) LSD.document.back();
          }
        }
      }
    },
    has: {
      one: {
        form: {
          selector: 'form',
          as: 'invoker'
        }
      }
    }
  },
  
  getData: function() {
    return (this.form ? this.form.getData : this.parent).apply(this.form || this, arguments);
  },
  
  hidden: true
});