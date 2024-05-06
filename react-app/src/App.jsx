import { useState, useEffect } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navbar from './components/Navbar'
import DataBlock from './components/DataBlock'
import AQIMapComponent from './components/AQIMapComponent'
import AirQualityTable from './components/AirQualityTable'



function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const qualityValues = [
    {"name": "Good", "min": 0, "max": 50, "color": "bg-1"},
    {"name": "Moderate", "min": 51, "max": 100, "color": "bg-2"},
    {"name": "Unhealthy for Sensitive Groups", "min": 101, "max": 150, "color": "bg-3"},
    {"name": "Unhealthy", "min": 151, "max": 200, "color": "bg-4"},
    {"name": "Very Unhealthy", "min": 201, "max": 300, "color": "bg-5"},
    {"name": "Hazardous", "min": 301, "max": 500, "color": "bg-6"},
  ]

  const particleNames = {
    
    "co": "Оксид углерода",
    "dew": "Точка росы",
    "h": "Влажность",
    "no2": "Диоксид азота",
    "p": "Давление",
    "pm10": "Частицы",
    "pm25": "Частицы",
    "so2": "Диоксид серы",
    "t": "Температура",
    "w": "Скорость ветра",
    "wg": "Порывы ветра"
    
  }


    useEffect(() => {
      const fetchData = async () => {
        try {
          const city = "Almaty"
          const token = "38cc2e564f69ba8a2843d180c664722ebc64cdef"
          const response = await axios.get(`http://api.waqi.info/feed/${city}/?token=${token}`);
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
 

  return (
    <>
<Container>
      <Row>
        <Col><Navbar/></Col>
      </Row>
      <Row className="mt-3">
        <Col><DataBlock data={data} loading={loading} qualityValues={qualityValues} particleNames={particleNames}/></Col>
        <Col xs lg="9"><AQIMapComponent/></Col>
      </Row>
      
</Container>
    </>
  )
}

export default App;
