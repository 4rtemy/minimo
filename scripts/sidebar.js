if (window.innerWidth > 780) {
    const stickyEl = new Sticksy('.widget.js-sticky-widget', {
        topSpacing: 20,
    })
    stickyEl.onStateChanged = function (state) {
        if (state === 'fixed') stickyEl.nodeRef.classList.add('widget--sticky')
        else stickyEl.nodeRef.classList.remove('widget--sticky')
    }
} else {
    
}