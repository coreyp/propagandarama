$(function() {
    $( '.pin-tag').html(function( index, oldHtml ) {
        if(this.outerHTML == '<a class="pin-tag" href="http://pinboard.in/u:warisbusiness/t:pg">pg/a>') {
            return '<a class="pin-tag masked" href="http://pinboard.in/u:warisbusiness/t:pg"><strong>pg</strong></a>'
        }
    });
});
