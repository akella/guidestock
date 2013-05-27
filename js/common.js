$.fn.scrollableAddClones = function(addItems) {
  // grab scrollable plugin
  var scrollable;
  if (!(scrollable = $(this).data('scrollable')) || !scrollable.getConf().circular)
  return;
  var nodes = scrollable.getItems();
  var length = nodes.length;
  var clonedClass = scrollable.getConf().clonedClass;
  var wrap = scrollable.getItemWrap();
  if (!addItems) addItems = Math.ceil(1000 / nodes.eq(1).width());
  var newNodesAppend = $('<span />');
  for (var i = 1; i <= (addItems < 5 ? addItems : 5); i++)
  nodes.eq(i % length).clone().addClass(clonedClass).appendTo(newNodesAppend);
  newNodesAppend.children().appendTo(wrap);
}

$(document).ready(function() {

//slider
if ($('.js-ui-slider').length > 0) {
  $('.js-ui-slider').slider({range: 'min'});
};

//scrollable
if ($('.js-slider').length>0) {
  $('.js-slider').scrollable({
    items: '.js-items',
    prev: '.js-prev',
    next: '.js-next'
  });
  var scrollable_list_1 = $('.js-slider').data('scrollable');
  var number_list = 5;
  scrollable_list_1.onSeek(function(event, index) {
    if (this.getIndex() >= this.getSize() - number_list) {     
      $('.js-next').addClass('disabled');
    }
  });
  scrollable_list_1.onBeforeSeek(function(event, index) {
    if (this.getIndex() >= this.getSize() - number_list) { 
      if (index > this.getIndex()) {
        return false;
      }
    }
  });
};

});