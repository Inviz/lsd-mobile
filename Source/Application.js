/*
---
 
script: Application.js
 
description: Paged mobile application wrapper
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Application
  
provides:
  - LSD.Application.Mobile
 
...
*/

LSD.Application.Mobile = new Class({
  Extends: LSD.Application,
  
  setDocument: function() {
    this.parent.apply(this, arguments);
    if (this.loading) {
      this.setCurrentPage(this.loading);
      this.loading.element.removeClass('loading');
      delete this.loading;
    }
  },
  
  setBody: function(element) {
    var pages = Slick.search(element, "> section.page");
    if (pages.length) pages.each(this.setPage.bind(this))
    else this.setPage(element)
  },
  
  setPage: function(element) {
    var page = this.page = LSD.Application.prototype.setBody.apply(this, arguments);
    if (element.hasClass("current")) this.current = page;
    if (element.hasClass("loading")) this.loading = page;
    return page;
  },
  
  setCurrentPage: function(page, transition) {
    if (!transition) transition = 'cube';
    if (this.current) this.current.element.addClass('out').addClass(transition);
    page.addClass('current')
    page.element.addClass('in').addClass(transition);
    (function() {
      this.current.element.removeClass('out').removeClass(transition).removeClass('current')
      page.element.removeClass('in').removeClass(transition);
      this.previous = [this.current, transition];
      this.current = page;
    }).delay(750, this);
  },
  
  back: function() {
    if (this.previous) this.setCurrentPage.apply(this, this.previous);
  }
});