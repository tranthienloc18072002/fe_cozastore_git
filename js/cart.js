$(doccument).ready(function() {
    $.ajax({
        url: "http://localhost:8080/cart/1",
        method: "get",
    }).done(function(data){
        
        console.log("server tra ve ", data)
    });
});