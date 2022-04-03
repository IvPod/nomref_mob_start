import React, { useState, useEffect } from 'react'
import axios from 'axios'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'

const Main = () => {
  L.Icon.Default.imagePath = '/images/'
  const position = [59.889651, 29.87631]

  const [stations, setStations] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/stations')
      setStations(res.data)
    }
    fetchData()
  }, [])

  return (
    <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map((el) => (
        <Marker position={el.location.coordinates} key={el._id}>
          <Tooltip>
            {el.name} <br /> {el.address}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Main
