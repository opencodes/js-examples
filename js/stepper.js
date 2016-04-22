(function(){
    var _x = $.fn.bootstrapWizard;
    _x.abc = function() {
        console.log( 'Overidden method called' );
        _x.abc.apply( this, arguments );
    }
})();

(function() {
    $("#rootwizard").bootstrapWizard({
    	inactiveUncompleteTab: true
    });
})();