/*
---
 
script: Body.js
 
description: Mobile body wrapper based on native body class
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Mobile
  - Native/LSD.Native.Body

provides:
  - LSD.Mobile.Body

...
*/

LSD.Mobile.Body = new Class({
  Extends: LSD.Native.Body,
  
  options: {
    element: {
      tag: 'section'
    }
  }
});