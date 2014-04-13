/*
 * conditionalImage
 * 
 *
 * Copyright (c) 2014 Edgard Leal
 * Licensed under the MIT license.
 */
var x = eval;
(function ($) {
   
   $.widget('custon.conditionalImage', {
        options : {
            hide : {
                duration : 1000,
                effect : 'fade'
              },
            show : {
                duration : 1000,
                effect : 'fade'
              },
            images : [],
            rules : [],
            currentValue : 0,
            value : 0
          },
        value : function(v){
            var self = this;
            if(!v){
              return self.options.value;
            }else{
                if(v === this.options.value){
                  return v;
                }
                self.options.value = v;
                self.refresh();
            }
          },
        _createInnerImage : function(){
            this.image = $('<img src="" />');
            this.image.appendTo(this.element);
          },
        _setup : function(){
            this.element.addClass('conditionalImage');
            if(this.element.find('img').length === 0 ){
              this._createInnerImage();
            }
          },
        _create : function(){
           this._setup(); 
          
          },
        _hide : function(callback){
            this.image.hide(this.options.hide.effect, 
               this.options.hide.duration, 
               callback);
          },
        _show : function(callback){
            this.image.show(this.options.show.effect, 
               this.options.show.duration, 
               callback);
          },
        _changeImage : function(img){
            var self = this;
            self._hide(function(){
              self.image.attr('src', img);
              self._show();
            });
          },
        refresh : function(){
            var evalHeader = 'var value = ' + this.options.value + '; ';
            for(var i in this.options.rules){
              if(x(evalHeader + this.options.rules[i])){
                if(this.image.attr('src')!== this.options.images[i]){
                    this._changeImage(this.options.images[i]);
                    break;
                  }
                }
              }
            }
          
     });

  // Custom selector.
  $.expr[':'].conditionalImage = function (elem) {
    // Is this element awesome?
    return $(elem).hasClass('conditionalImage');
  };

}(jQuery));
