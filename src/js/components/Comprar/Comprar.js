import React from 'react'
import { Row, Col, Table, Card } from 'react-materialize'


class LineGraph extends React.Component {
  render() {
    const { color, dataX } = this.props

    return (
        <div>
          <h1>Grafic Minha cor eh {color}</h1>
          <ul>
            { dataX.map((n) => <li>VALOR: {n} </li>) }
          </ul>
        </div>
    )
  }
}

const BuyActionsItem = ({ corp, value }) => (
    <tr>
      <td>{ corp }</td>
      <td>{ value }</td>
    </tr>
)

const BuyActions = ({ stockOptions }) => (
    <Card>
      <Table bordered={true}>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Cotcao</th>
          </tr>
        </thead>

        <tbody>
          { stockOptions.map(BuyActionsItem) }
        </tbody>
      </Table>
    </Card>
)

class Comprar extends React.Component {
  render() {
    var array = [1,2,3,4];
    var defaultOptions = [
      { corp: "MacDonald", value: 11.25 },
      { corp: "Volskwagem", value: 11.25 },
      { corp: "Fiat", value: 11.25 },
      { corp: "Vale do Rio Doce", value: 11.25 }
    ]

    return (
        <Row>

          <Col s={3}>
            <BuyActions stockOptions={defaultOptions} />
          </Col>

          <Col s={3}>
            <LineGraph color="AMARELO" dataX={array} />
          </Col>

          <Col s={3}>
            <h1>Comprar</h1>
          </Col>

        </Row>
    )
  }
}

export default Comprar
