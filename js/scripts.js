 $(document).ready(function() {
    $(".clickable").click(function() {
        $(".design").slideToggle();
    })
    $(".clickable2").click(function() {
        $(".development").slideToggle();
    })
    $(".clickable3").click(function() {
        $(".product").slideToggle();
    })
    $(".floatcaption").hover(function(){
        $(this).find(".caption").toggle(400);
    })
    $("form").submit(function(){
        var name=document.getElementById("Name").value;
        var email=document.getElementById("email").value;
        var message=document.getElementById("message").value;
        
        if(name===""){
            alert("please enter your name")
        } else if (message===""){
            alert("please enter your message")
        } else if (email===""){
            alert("please enter your email")
        } else {
            alert(name + " we have received your message successfully")
        }
    })
    $("form#contact").onSubmit (function(){
        $("form").each(function(){
            this,reset();
        })
    })
})