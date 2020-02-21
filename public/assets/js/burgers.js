$(document).ready(function () {
    $(document).on("click", ".devour", devourBurger);
    function devourBurger() {
        const burgerObj = {
            id: $(this).attr('data-id'),
            devoured: true
        };
        
        $.ajax({
            url: "/api/burgers",
            method: "PUT",
            data: burgerObj
        }).then(function (response) {
            console.log(response);
            window.location.reload();
        });
    }
    $("#burger-submit").on("button", function (e) {
        e.preventDefault();
        const newBurger = {
            name: $("#burger_name").val().trim(),
            devour: $("[name=devour]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});

