async function initMap() {
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
  const mapElement = document.querySelector('gmp-map');
  const map = mapElement.innerMap;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', '../assets/travel_locations.json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText)
      const latlngbounds = new google.maps.LatLngBounds();
      for (const loc of data) {
        const { position, title } = loc;
        const marker = new AdvancedMarkerElement({
            map,
            position,
            title,
        });
        const pinImg = document.createElement('img');
        pinImg.src = new URL('/assets/pin@2x.png', import.meta.url).href;
        pinImg.style.height = '30px';
        pinImg.style.width = '30px';
        pinImg.alt = `${title} pin`;
        marker.append(pinImg);
        mapElement.append(marker);
        latlngbounds.extend(new google.maps.LatLng(position));
      }
      map.setCenter(latlngbounds.getCenter());
      map.fitBounds(latlngbounds)
    } else {
      console.error('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send();
}
initMap();
export { };
