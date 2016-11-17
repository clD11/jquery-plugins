(function ($) {

    var doneTypingTimer;

    $.extend($.fn, {
        addEventListenerDoneTyping : function (timeoutMilliseconds, callback) {
            this.each(function (index, obj) {
                $(obj).on('keyup', function () {
                    doneTypingTimer = setTimeout(callback, timeoutMilliseconds, obj);
                }).on('keydown', function () {
                    clearTimeout(doneTypingTimer);
                });
            });
            return this;
        }
    });

})(jQuery);