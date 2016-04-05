// consider as state enum
var TITLE_STATE = {
    BIG     : 1,
    SMALL   : 2,
    HIDDEN  : 3
}

var setTitleState = function(state) {
    switch(state) {
        case TITLE_STATE.BIG:
            $('#titleblock').addClass('bigtitle');
            $('#titleblock').removeClass('smalltitle');
            $('#titleblock').addClass('visibletitle');
            $('#titleblock').removeClass('hiddentitle');
            $('#searchbarblock').addClass('bigtitle_searchbar');
            $('#searchbarblock').removeClass('smalltitle_searchbar');
            $('#search_field').addClass('bigtitle_searchfield');
            $('#search_field').removeClass('smalltitle_searchfield');
            break;
            
        case TITLE_STATE.SMALL:
            $('#titleblock').removeClass('bigtitle');
            $('#titleblock').addClass('smalltitle');
            $('#titleblock').addClass('visibletitle');
            $('#titleblock').removeClass('hiddentitle');
            $('#searchbarblock').removeClass('bigtitle_searchbar');
            $('#searchbarblock').addClass('smalltitle_searchbar');
            $('#search_field').removeClass('bigtitle_searchfield');
            $('#search_field').addClass('smalltitle_searchfield');
            break;
            
        case TITLE_STATE.HIDDEN:
            $('#titleblock').removeClass('bigtitle');
            $('#titleblock').addClass('smalltitle');
            $('#titleblock').addClass('hiddentitle');
            break;
    }
}

var updateContentBlockHeight = function() {
    $('#contentblock').css('margin-top', $('#titleblock').css('height'));
}

var onClickLogo = function() {
    console.log("Logo Clicked!");
}

var onClickSearch = function() {
    console.log("Searching..");
}

var onClickContext = function() {
    onClickContext.isOpened = !onClickContext.isOpened;
    
    if (onClickContext.isOpened) {
        console.log("Context menu opened.");
    } else {
        console.log("Context menu closed.");
    }
}
onClickContext.prototype.isOpened = false;


///////////////////////////////
///  jquery event handlers  ///

jQuery(document).ready(function() {
    updateContentBlockHeight();

    $(window).on('scroll', function() {
        var st = $(window).scrollTop();
        if (st == 0) {
            setTitleState(TITLE_STATE.BIG);
        } else if (st < 100){
            setTitleState(TITLE_STATE.SMALL);

        } else {
            setTitleState(TITLE_STATE.HIDDEN);
        }

        updateContentBlockHeight();
    });

    $('#button-logo').on('click', function() {
        onClickLogo();
    });
    
    $('#search_icon').on('click', function() {
        onClickSearch();
    });
    
    $('#contextmenu').on('click', function() {
        onClickContext();
    });
});

///  jquery event handlers  ///
///////////////////////////////



