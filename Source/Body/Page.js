/*
---
 
script: Body.Page.js
 
description: An in-page independent document (like iphone app page)
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - Widgets/LSD.Widget.Body.Page
  - Mobile/LSD.Mobile.Body

provides:
  - LSD.Mobile.Body.Page

...
*/

LSD.Mobile.define('Body.Page', {
  Extends: LSD.Widget.Body.Page,
  
  options: {
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
    }
  }
});