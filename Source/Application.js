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
      this.loading.show();
      this.loading.element.removeClass('loading');
      delete this.loading;
    }
  },
  
  setBody: function(element) {
    var pages = Slick.search(element, "> section.page");
    if (pages.length) pages.each(this.setPage.bind(this))
    else this.setPage(element)
  },
  
  getBodyClass: function() {
    return LSD.Widget.Body.Page
  },
  
  setPage: function(element) {
    var page = this.page = LSD.Application.prototype.setBody.apply(this, arguments);
    if (element.hasClass("current")) this.current = page;
    else page.hidden = true;
    if (element.hasClass("loading")) this.loading = page;
    return page;
  },
  
  setCurrentPage: function(page) {
    var transformation = page.options.transformation;
    if (transformation && this.current) this.current.element.addClass('out').addClass(transformation.name);
    page.addClass('current')
    page.element.addClass('in').addClass(transformation.name);
    !function() {
      if (transformation) {
        this.current.element.removeClass('out').removeClass(transformation.name).removeClass('current')
        page.element.removeClass('in').removeClass(transformation.name);
      }
      this.previous = this.current;
      this.current = page;
    }.delay(transformation.duration || transformation.durations[transformation.name], this);
  },
  
  back: function() {
    if (this.previous) this.setCurrentPage(this.previous);
  }
});