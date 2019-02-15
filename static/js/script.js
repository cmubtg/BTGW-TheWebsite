$(".row").each(function (i) {
    $(this).delay(500 * i ^ i).animate({
        opacity: 1
    })
})

function addEmailList() {
    email = $("#subscribe").val();
    console.log("This email must belong to an amazing person: " + email)
}
