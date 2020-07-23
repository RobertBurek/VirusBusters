var map = L.map('mapid').setView([52.2344339, 20.9342764], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([52.2344339, 20.9342764]).addTo(map)
    .bindPopup('Jakaś ulica 3<br> 00-950 Warszawa');
    // .openPopup();

// nPopup();