AOS.init();

mapboxgl.accessToken = 'pk.eyJ1IjoibGlsZGlja3VzIiwiYSI6ImNrcHBtNzNtODA5N2Eyb3F6cTNuOGVhM2MifQ.LQJaXY4s1G-rXf9dFjDlug';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [4.463981, 51.041150],
    zoom: 15.68
});

map.addControl(new mapboxgl.NavigationControl());

var marker = new mapboxgl.Marker({
    color: "#ff0000"
}).setLngLat([4.463981, 51.041150]).addTo(map);

let menu_state = false;

function ToggleMenu() {
    let menu = document.querySelector("#menu");
    if (menu_state) {
        menu.style.left = "100%";
    } else {
        menu.style.left = "0";
    }

    menu_state = !menu_state;
}

for (let elmnt of document.querySelectorAll("#menu ul a")) {
    elmnt.onclick = () => { ToggleMenu(); };
}

let prev_scroll_pos = 0;
window.addEventListener("scroll", function() {
    if (window.innerWidth > 768) {
        if (prev_scroll_pos < window.pageYOffset) {
            document.querySelector("header").style.transform = "translateY(-100%)";
        } else {
            document.querySelector("header").style.transform = "translateY(0%)";
        }
    }

    prev_scroll_pos = window.pageYOffset;
});
