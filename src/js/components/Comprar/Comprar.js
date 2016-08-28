import React from 'react'
import { Row, Col, Table, Card } from 'react-materialize'


class LineGraph extends React.Component {
  render() {
    const { color, dataX } = this.props

    return (
      <Card title="Como o preco variou?">
        <h1>Grafico</h1>
      </Card>
    )
  }
}

const NewsBox = ({ newsData, corpName }) => (
    <Card title={ "Noticias sobre " + corpName }>
    </Card>
)

const BuyActionsItem = ({ corp, value, onClick, ...props }) => (
    <tr onClick={onClick.bind(this, corp)} {...props}>
      <td>{ corp }</td>
      <td>{ value }</td>
    </tr>
)

const BuyActions = ({ onItemClick, stockOptions }) => (
    <Card title="Quais acoes eu posso comprar?">
      <Table bordered={true}>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Cotcao</th>
          </tr>
        </thead>

        <tbody>
          { stockOptions.map((o) => ({ ...o, onClick: onItemClick })).map(BuyActionsItem) }
        </tbody>
      </Table>
    </Card>
)

class Comprar extends React.Component {
  render() {
    //const { fetchOptionsData } = this.props
    var fetchOptionsData = null
    if(!fetchOptionsData)
      fetchOptionsData = function(x){ console.log("CLICKED", x) }
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
            <BuyActions
              onItemClick={fetchOptionsData}
              stockOptions={defaultOptions} />
          </Col>

          <Col s={3}>
            <Row>
              <Col s={12}>
                <LineGraph color="AMARELO" dataX={array} />
              </Col>
              <Col s={12}>
                <LineGraph color="AMARELO" dataX={array} />
              </Col>
            </Row>
          </Col>

          <Col s={3}>
            <NewsBox corpName="MacDonal" />
          </Col>

        </Row>
    )
  }
}

export default Comprar
