import React from 'react'
import { Row, Col, Table, CardTitle, Card, Collection, CollectionItem } from 'react-materialize'

class LineGraph extends React.Component {
  render() {
    return (
      <Card title="Como o preco variou?">
      </Card>
    )
  }
}

const NewsListItem = ({ img_url, title, content, source_url }) => (
    <Card
      header={<CardTitle image={img_url}>{title}</CardTitle>}
      className="small">
      { content }
    </Card>
)

const BuyActionsItem = (props) => {
    const { NomeEmpresa, onClick } = props
    return (
      <tr onClick={onClick.bind(this, props)} {...props}>
        <td>{ NomeEmpresa }</td>
        <td></td>
      </tr>
    )
}

const Details = ({ Abertura, MaiorValorDia, MenorValorDia, MaiorMeses, MenorMeses, ValorDeAbertura }) => (
  <Card>
    <Table>
      <tbody>
        <tr>
          <td>Abertura</td>
          <td>{ Abertura }</td>
        </tr>
        <tr>
          <td>Maior preco do dia</td>
          <td>{ MaiorValorDia }</td>
        </tr>
        <tr>
          <td>Menor preco do dia</td>
          <td>{ MenorValorDia }</td>
        </tr>
        <tr>
          <td>Maior preco em 12 meses</td>
          <td>{ MaiorMeses }</td>
        </tr>
        <tr>
          <td>Menor preco em 12 meses</td>
          <td>{ MenorMeses }</td>
        </tr>
      </tbody>
    </Table>
  </Card>
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
    const { selectStockOption, visibleStockOptions, selectedOption } = this.props
    var array = [1,2,3,4];
    console.log("PROPS", this.props)

    return (
        <Row>

          <Col s={3}>
            <BuyActions
              onItemClick={selectStockOption}
              stockOptions={visibleStockOptions} />
          </Col>

          <Col s={3}>
            <Row>
              <Col s={12}>
                <LineGraph {...this.props} />
              </Col>
              <Col s={12}>
                <Details {...selectedOption.details} />
              </Col>
            </Row>
          </Col>

          <Col s={3}>
            <h1>Noticias</h1>
            { this.props.newsData.map(NewsListItem) }
          </Col>

        </Row>
    )
  }
}

export default Comprar
