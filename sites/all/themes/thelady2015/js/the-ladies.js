(function ($) {

  // THE LADIES VIEW IMAGE OVERLAY
  // ===========================================================================

  Drupal.behaviors.overlayImage = {
    attach: function (context, settings){

      // Apply to the team view
      // -----------------------------------------------------------------------
      $the_ladies = $('.view-the-ladies .views-row .views-field-field-lady-image a',context);
      $the_ladies.append('<div class="overlay"><span>' + Drupal.t('Read More') + '</span></div>');
    }
  };

})(jQuery);
