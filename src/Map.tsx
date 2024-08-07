import React, {useEffect} from 'react'

function Map() {
         
    // 1.
    // var mapOptions = {
    //     center: new naver.maps.LatLng(37.3595704, 127.105399),
    //     zoom: 10
    // };
  
    // var map = new naver.maps.Map('map', mapOptions);

    // 2.

    useEffect(() => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 7
      };

      const map = new naver.maps.Map('map', mapOptions)
    }, [])

  return (
    <>
    <div>
      <div>Map</div>
      <div id="map" style={{width:1000 , height:1000}}></div>
    </div>
    </>
  )
}

export default Map