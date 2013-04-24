$(function() {
    $( '.pin-tag').html(function( index, oldHtml ) {
        if(this.outerText == "pg") {
            return "no"
        }
    });
});
