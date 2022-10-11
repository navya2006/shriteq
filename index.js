// NAVBAR
jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $(".navb").css("background-color", "var(--bg-color)");
        $(".navb a").css("color", "#FBFBFD");
    } else {
        $(".navb").css("background", "none");
        $(".navb a").css("color", "#FBFBFD");
    }
});

// SIDENAV 
function openNav(){
    document.getElementById("sidenav").style.width="100%";
}
function closeNav () {
    document.getElementById("sidenav").style.width="0";
}