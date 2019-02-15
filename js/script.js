$(".row").each(function(i){
    $(this).delay(500 * i^i).animate({
        opacity: 1
    })
})