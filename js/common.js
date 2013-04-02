$(document).ready(function() {

<<<<<<< HEAD
//Placeholder
// var placeholder_val;
// $('.input').focusin(function(){
//     placeholder_val = $(this).val();
//     $(this).addClass('focus');
// });
// // remove placeholder from the current input
// $('.input').focusout(function(){
//     $(this).val(placeholder_val);
//     $(this).removeClass('focus');
// });

$("[placeholder]").togglePlaceholder();


=======
//placeholder
$("[placeholder]").togglePlaceholder();

>>>>>>> fixes
});

$.fn.togglePlaceholder = function() {
    return this.each(function() {
        $(this)
        .data("holder", $(this).attr("placeholder"))
        .focusin(function(){
            $(this).attr('placeholder','');
<<<<<<< HEAD
        })
        .focusout(function(){
            $(this).attr('placeholder',$(this).data('holder'));
=======
            $(this).addClass('focus');
        })
        .focusout(function(){
            $(this).attr('placeholder',$(this).data('holder'));
            $(this).removeClass('focus');
>>>>>>> fixes
        });
    });
};