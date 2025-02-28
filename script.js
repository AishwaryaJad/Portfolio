$(document).ready(function () {
    function checkScreenSize() {
        if ($(window).width() < 768) {
            $(".container, .internship-container, .cert-container").css({
                "flex-direction": "column"
            });
        } else {
            $(".container").css("flex-direction", "row");
        }

        // Ensure only the background remains black, and text colors are untouched
        $("body").css("background-color", "#000");
        if ($("#internship").length) {
            $("h1").css("color", "lightcoral");
        }
        if ($("#certifications").length) {
            $("h1").css("color", "#ffcc00");
        }
    }

    // Run on page load and when resizing
    checkScreenSize();
    $(window).resize(checkScreenSize);

    // Initially hide sections
    $("#education, #skills, #projects").hide();
    $(".project-card").css("opacity", "0");

    // Education Section Slide Down
    $('nav ul li a[href="#education"]').click(function (e) {
        e.preventDefault();
        $("html, body").animate(
            { scrollTop: $("#education").offset().top },
            500,
            function () { $("#education").slideDown(600); }
        );
    });

    // Skills Section Slide Down
    $('nav ul li a[href="#skills"]').click(function (e) {  
        e.preventDefault();
        $("html, body").animate(
            { scrollTop: $("#skills").offset().top },
            500,
            function () { $("#skills").slideDown(600); }
        );
    });

    // Projects Section Slide Down with Fade-In Effect
    $('nav ul li a[href="#projects"]').click(function (e) {  
        e.preventDefault();
        $("html, body").animate(
            { scrollTop: $("#projects").offset().top },
            500,
            function () { 
                $("#projects").slideDown(600, function () {
                    $(".project-card").each(function (index) {
                        $(this).delay(index * 300).animate({ opacity: 1, marginTop: "0px" }, 600);
                    });
                }); 
            }
        );
    });

    // Slide-down effect for Internship Page
    if ($(".internship-card").length) {
        $(".internship-card").css({ opacity: "0", marginTop: "-30px" });

        $(".internship-card").each(function (index) {
            $(this).delay(index * 300).animate({ opacity: 1, marginTop: "0px" }, 800);
        });
    }

    // Fade-in effect for Certification Page
    if ($(".cert-card").length) {
        $(".cert-card").css({ opacity: "0", transform: "translateY(-20px)" });

        $(".cert-card").each(function (index) {
            $(this).delay(index * 300).animate(
                { opacity: 1, transform: "translateY(0)" },
                { duration: 800, queue: false }
            );
        });
    }
    
    $(".back-button").on("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        window.history.back(); // Go back to the previous page
    });
}); 