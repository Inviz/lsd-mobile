/*
---
 
script: Mobile.js
 
description: Mobile LSD definition
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Type
 
provides: 
  - LSD.Mobile
 
...
*/

new LSD.Type('Mobile');

// Inject mobile widgets into default widget pool
LSD.Element.pool.splice(1, 0, LSD.Mobile);