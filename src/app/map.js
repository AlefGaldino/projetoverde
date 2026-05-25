// map.js - Gerenciamento do Leaflet / OpenStreetMap

let map;
let userMarker;

function initMap() {
    const saoPaulo = { lat: -23.55052, lng: -46.633308 };

    map = L.map('map').setView([saoPaulo.lat, saoPaulo.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 19,
    }).addTo(map);

    userMarker = L.marker([saoPaulo.lat, saoPaulo.lng])
        .addTo(map)
        .bindPopup('São Paulo, SP')
        .openPopup();

    const enderecoInput = document.getElementById('endereco');
    if (enderecoInput) {
        enderecoInput.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        const lat = pos.coords.latitude;
                        const lng = pos.coords.longitude;
                        enderecoInput.value = `Lat: ${lat}, Lng: ${lng}`;

                        if (userMarker) {
                            userMarker.setLatLng([lat, lng]).bindPopup('Sua localização').openPopup();
                        } else {
                            userMarker = L.marker([lat, lng])
                                .addTo(map)
                                .bindPopup('Sua localização')
                                .openPopup();
                        }

                        map.setView([lat, lng], 15);
                    },
                    () => {
                        alert('Não foi possível obter sua localização.');
                    }
                );
            } else {
                alert('Geolocalização não suportada pelo navegador.');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initMap);
