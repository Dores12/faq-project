
$(".h2style").click(function() {
    // hide and show text
    let parentID = this.parentNode.id;
    var div = document.getElementById(parentID);
    var text = div.querySelector("p");
    $(text).toggle(300);

    // change icons +/-
    let svg = this.querySelectorAll('svg');
    $(svg).toggle();


});

