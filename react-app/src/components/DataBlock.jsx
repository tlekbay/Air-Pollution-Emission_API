import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function DataBlock(props) {
    const getQuality = (value) => {
        const quality = props.qualityValues.find(q => value >= q.min && value <= q.max);
        return quality ? quality : "Unknown";
      };
  return (
    <>
     
      {props.loading ? (
        <Alert variant="info">
        Loading...
      </Alert>
      ) : (
        <Card className="datablock-container">
        <Card.Body>
          <Card.Title>Алматы <span className={"iaqi " + getQuality(props.data.data.aqi).color}>{props.data.data.aqi}</span></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{getQuality(props.data.data.aqi).name}</Card.Subtitle>
            <Card.Text>
                

                <ListGroup className="list-group-flush">
                     {Object.entries(props.data.data.iaqi).map(([key, value]) => (
          <ListGroup.Item key={key}>
            {props.particleNames[key]} ({key}) - <b>{value.v}</b>
          </ListGroup.Item>
        ))}
                
       
      </ListGroup>

      
            </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Обновлено: {props.data.data.time.s} </Card.Footer>
        </Card>
      )}
    
    </>
  );
}



export default DataBlock;