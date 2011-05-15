/*
---
 
script: Body.js
 
description: Mobile body wrapper based on native body class
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Mobile
  - Widgets/LSD.Widget.Body

provides:
  - LSD.Mobile.Body

...
*/

LSD.Mobile.Body = new Class({
  Extends: LSD.Widget.Body,
  
  options: {
    element: {
      tag: 'section'
    }
  }
});