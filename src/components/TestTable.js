const TestTable = () => {
    return (
      <section>
        <table styles={{colors: '#356de6'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Current Price</th>
              <th>Cut</th>
              <th>Historical Low</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cyberpunk 2077</td>
              <td>66,000₩</td>
              <td>50%</td>
              <td>33,000₩</td>
            </tr>
            <tr>
              <td>Battlefield 2042</td>
              <td>66,000₩</td>
              <td>33%</td>
              <td>44,220₩</td>
            </tr>
            <tr>
              <td>ACE COMBAT™ 7: SKIES UNKNOWN</td>
              <td>54,800₩</td>
              <td>10%</td>
              <td>49,320₩</td>
            </tr>
            <tr>
              <td>TEKKEN 7</td>
              <td>89,800₩</td>
              <td>85%</td>
              <td>13,470₩</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  };
  
  export default TestTable;