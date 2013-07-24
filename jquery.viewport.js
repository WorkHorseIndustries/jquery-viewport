/*
    Extends jquery to allow element traversal relative to the current viewport.  using a snapshot of the viewport
    at the time the function is called it compares the exisiting collection of jquery elements to that snapshot.
*/
(function ($, window) {
    "use strict";
    // get the elements in the collection that are below the current viewport
    var getSelection = function (selector) {
        var matched = this;
        if (selector && typeof selector === 'string') {
            matched = $.filter(selector, matched);
        }
        return matched;
    };

    $.fn.aboveViewport = function (selector) {
        var viewTop = $(window).scrollTop(),
            matched = getSelection.call(this, selector);

        matched = $.grep(matched, function (el) {
            el = $(el);
            return viewTop > (el.offset().top + el.height());
        });

        return this.pushStack(matched);
    };

    // get the elements in the collection that are above the current viewport
    $.fn.belowViewport = function (selector) {
        var viewBottom = $(window).scrollTop() + $(window).height(),
            matched = getSelection.call(this, selector);

        matched = $.grep(matched, function (el) {
            return viewBottom < $(el).offset().top;
        });
        return this.pushStack(matched);
    };

    // get the elements in the collection that are outside the current viewport
    $.fn.outsideViewport = function (selector) {
        var viewTop = $(window).scrollTop(),
            viewBottom = viewTop + $(window).height(),
            matched = getSelection.call(this, selector);

        matched = $.grep(matched, function (el) {
            el = $(el);
            return viewBottom < el.offset().top || viewTop > (el.offset().top + el.height());
        });

        return this.pushStack(matched);
    };

    // get the elements in the collection that are outside the current viewport
    $.fn.insideViewport = function (selector) {
        var viewTop = $(window).scrollTop(),
            viewBottom = viewTop + $(window).height(),
            matched = getSelection.call(this, selector);

        matched = $.grep(matched, function (el) {
            var top = $(el).offset().top,
                bottom = top + $(el).height();
            return (viewTop < top && viewBottom > top) || (viewBottom < bottom && viewTop > bottom);
        });

        return this.pushStack(matched);
    };

}(jQuery, window));
