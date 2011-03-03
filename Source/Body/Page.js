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
    classes: ['page'],
    header: false
  }
});