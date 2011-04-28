/*
---
 
script: Body.Page.js
 
description: An in-page independent document (like iphone app page)
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - Native/LSD.Native.Body.Page
  - Mobile/LSD.Mobile.Body

provides:
  - LSD.Mobile.Body.Page

...
*/

LSD.Mobile.Body.Page = new Class({
  Extends: LSD.Native.Body.Page,
  
  options: {
    layout: {
      extract: true
    },
    classes: Array.fast('page'),
    header: false,
    transformation: {
      name: 'fade',
      durations: {
        cube: 550,
        pop: 350,
        swap: 700,
        slide: 250,
        fade: 500,
        slideup: 400
      }
    },
    events: {
      _application: {
        build: function() {
          var caller = this.options.caller && this.options.caller.apply(this, arguments);
          if (caller && caller.getAttribute('transition')) this.options.transformation.name = caller.getAttribute('transition');
        },
        show: function() {
          if (LSD.application) LSD.application.setCurrentPage(this)
        }
      }
    },
    states: Array.fast('hidden')
  }
});