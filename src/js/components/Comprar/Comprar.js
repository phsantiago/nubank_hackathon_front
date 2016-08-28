import React from 'react'
import { Row, Col, Table, CardTitle, Card, Collection, CollectionItem } from 'react-materialize'
import News from '../../containers/News'

class LineGraph extends React.Component {
  render() {
    return (
      <Card title="Como o preco variou?">
      </Card>
    )
  }
}

const Details = ({ ValorDeAbertura, MaiorValorDia, MenorValorDia, MaiorMeses, MenorMeses }) => (
  <Card>
    <Table stripped={true} striped={true} bordered={true} hoverable={true}>
      <tbody>
        <tr>
          <td>Abertura</td>
          <td>{ ValorDeAbertura }</td>
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

const BuyActionsItem = (props) => {
    const { NomeEmpresa, UrlLogo, CotacaoRecente, Variacao, onItemClick } = props
    return (
      <tr onClick={() => { onItemClick(props) }} {...props}>
        <td><img src={UrlLogo} className="circle responsive-img" /></td>
        <td>{ NomeEmpresa }</td>
        <td>{ CotacaoRecente }</td>
        <td>{ Variacao }</td>
      </tr>
    )
}

const BuyActions = ({ onItemClick, stockOptions }) => (
    <Card title="Quais acoes eu posso comprar?">
      <Table bordered={true}>
        <thead>
          <tr>
            <th></th>
            <th>Empresa</th>
            <th>Cotacao</th>
            <th>VariacaoRecente</th>
          </tr>
        </thead>

        <tbody>
          { stockOptions.map((o) => ({ ...o, onItemClick })).map(BuyActionsItem) }
        </tbody>
      </Table>
    </Card>
)

class Comprar extends React.Component {

  componentDidMount() {
    this.props.fetchEmpresas()
  }

  render() {
    let { selectStockOption, fetchNoticias, visibleStockOptions, selectedOption } = this.props

    if(visibleStockOptions.length > 0 && !selectedOption) {
      selectStockOption(visibleStockOptions[0])
    }

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
                <Details {...selectedOption} />
              </Col>
            </Row>
          </Col>

          <Col s={2}>
            <News />
          </Col>

        </Row>
    )
  }
}

export default Comprar
