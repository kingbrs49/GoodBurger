$(document).ready(function () {
    $(document).on("click", ".devour", devourBurger);
    function devourBurger() {
        const burgerObj = {
            id: $(this).attr('data-id'),
            devoured: 1
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
    $("#burger-submit").on("click", function (e) {
        e.preventDefault();
        const newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        };

        console.log(newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
                console.log("created new burger: " + newBurger);
                window.location.reload();
            }
        );
    });
});

