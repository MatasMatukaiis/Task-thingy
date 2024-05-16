$(".button").click(function(){
    var the_input_value = $(".item").val();
    $("ul.thelist li:first-child").hide();
    if (the_input_value == "") 
    {
        alert("Value cannot be null");
    }
    else
    {
        var create_li = $("<li>"+the_input_value+"</li>");
        $("ul.thelist").append(create_li);
        $(".item").val("");
    }
});