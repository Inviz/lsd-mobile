/*
---
 
script: Body.Page.js
 
description: An in-page independent document (like iphone app page)
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Mobile.Body

provides:
  - LSD.Mobile.Body.Page

...
*/

LSD.Mobile.Body.Page = new Class({
  Extends: LSD.Mobile.Body,
  
  options: {
    element: {
      tag: 'section'
    },
    layout: {
      extract: true
    },
    classes: Array.fast('page'),
    header: false,
    nodeType: 1,
    transformation: {
      name: 'fade',
      durations: {
        cube: 550,
        pop: 350,
        swap: 700,
        slide: 300,
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