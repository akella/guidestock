$(document).ready(function() {

$("[placeholder]").togglePlaceholder();


});

$.fn.togglePlaceholder = function() {
    return this.each(function() {
        $(this)
        .data('holder', $(this).attr('placeholder'))
        .focusin(function(){
            $(this).attr('placeholder','');
            $(this).addClass('focus');
        })
        .focusout(function(){
            $(this).attr('placeholder',$(this).data('holder'));
            $(this).removeClass('focus');
        });
    });
};