const AirQualityTable = ({ data }) => {
  return (
    <>
    {/* <div>
      <h2>Air Quality Data</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Average</th>
            <th>Maximum</th>
            <th>Minimum</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map(pollutant => (
            <React.Fragment key={pollutant}>
              <tr>
                <th colSpan="4">{pollutant.toUpperCase()}</th>
              </tr>
              {data[pollutant].map(item => (
                <tr key={item.day}>
                  <td>{item.day}</td>
                  <td>{item.avg}</td>
                  <td>{item.max}</td>
                  <td>{item.min}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div> */}
    </>
  );
};

export default AirQualityTable;