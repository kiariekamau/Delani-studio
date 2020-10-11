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
    $("#contact form").submit(function(event) {
        alert( " we have received your message")
        event.preventDefault();
    })
})