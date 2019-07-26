var tabs = document.getElementById("tabs");
var tab_nav_items = tabs.querySelectorAll("li");
var tab_items = tabs.querySelectorAll("div");

tab_nav_items.forEach(function(tab_nav_item, index) {
    tab_nav_item.addEventListener("click", function(event) {
        tab_nav_items.forEach(function(tab_nav_item) {
            tab_nav_item.classList.remove("active");  
        })
        tab_nav_item.classList.toggle("active");

        tab_items.forEach(function(tab_item, tab_item_index){
            tab_item.classList.remove("active")
            if (index === tab_item_index) {
                tab_item.classList.add("active")
            }
        })
    })
})