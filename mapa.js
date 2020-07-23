var map = L.map('mapid').setView([52.18997, 21.0361], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([52.18777, 21.0161]).addTo(map)
    .bindPopup('Domaniewska 9/11 <br> 02-663 Warszawa');
