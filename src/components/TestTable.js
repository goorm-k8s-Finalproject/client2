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
              <td>Dummy Game 1</td>
              <td>40,000₩</td>
              <td>30%</td>
              <td>10,000₩</td>
            </tr>
            <tr>
              <td>Dummy Game 2</td>
              <td>60,000₩</td>
              <td>10%</td>
              <td>60,000₩</td>
            </tr>
            <tr>
              <td>Dummy Game 3</td>
              <td>30,000₩</td>
              <td>10%</td>
              <td>30,000₩</td>
            </tr>
            <tr>
              <td>Dummy Game 4</td>
              <td>20,000₩</td>
              <td>60%</td>
              <td>10,000₩</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  };
  
  export default TestTable;