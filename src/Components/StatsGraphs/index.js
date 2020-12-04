import React from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

import { Container, Total, Acessos } from './styles';

function StatsGraphs({ data }) {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useState(() => {
    const graphData = data.map(foto => (
      {
        x: foto.title,
        y: Number(foto.acessos)
      })
    );
    const totalData= data
      .map(foto => Number(foto.acessos))
      .reduce(
        (acessos, acesso) => acesso + acessos
        , 0
      );

    setGraph(graphData);
    setTotal(totalData);
  }, [data]);

  return <Container>
    <Total>
      <Acessos>Acessos: {total}</Acessos>
    </Total>
    <div>
      <VictoryPie
        data={graph}
        innerRadius={50}
        padding={{top: 20, bottom: 20, left: 80, right: 80}}
        style={{
          data: {
            fillOpacity: .9,
            stroke: '#FFF',
            strokeWidth: 2,
          },
          labels: {
            fontSize: 14,
            fill: '#333'
          }
        }}
      />
    </div>
    <div>
      <VictoryChart>
        <VictoryBar data={graph} alignment="start"></VictoryBar>
      </VictoryChart>
    </div>
  </Container>;
}

export default StatsGraphs;