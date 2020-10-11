$(document).ready(function() {
    $(".clickable").click(function() {
        $(".design").toggle();
    })
    $(".clickable2").click(function() {
        $(".development").toggle();
    })
    $(".clickable3").click(function() {
        $(".product").toggle();
    })
    $("#message").submit(function() {
        alert("#Name"+ "we have received your message,thank you!")
    })
})