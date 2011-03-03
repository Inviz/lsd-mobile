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
  Extends: LSD.Mobile.Body,
  
  Stateful: Object.subset(LSD.States.Known, ['hidden']),
  
  options: {
    classes: ['page', 'dialog'],
  },
  
  hidden: true
});