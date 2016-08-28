import React from 'react'
import { Modal, Button, Row, Col, Table, CardTitle, Card, Collection, CollectionItem } from 'react-materialize'
import News from '../../containers/News'
import Style from './Comprar.scss'

const LineGraph = ({ UrlGrafico }) => (
  <Card title="Como o preço variou?">
    <img src={UrlGrafico} className="img-graph responsive-img" />
  </Card>
)

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

class UnitChooser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.initialValue || 0 }
  }

  increment() {
    let newValue = this.state.value + 1,
        _onChange = this.props.onChange
    this.setState({ value: newValue }, () => { _onChange(newValue) })
  }

  decrement() {
    let newValue = this.state.value - 1,
        _onChange = this.props.onChange
    if(newValue < 0)
      newValue = 0
    this.setState({ value: newValue }, () => { _onChange(newValue) })
  }

  render() {
    let props = this.props,
        inc = this.increment.bind(this),
        dec = this.decrement.bind(this)

    let _style = {}
    if(this.state.value > this.props.limit)
      _style = { color: "red" }
    return (<div {...props} style={{ display: "inline" }}>
			<button className="btn-purple"
        onClick={dec}>
				-
			</button>

      <span style={_style}>{ this.state.value }</span>
			<button className="btn-purple"
        onClick={inc}>
				+
			</button>
    </div>)
  }
}

class ShowBuyModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { buyCount: 0 }
  }

  render() {
    let props = this.props
    let { option, onBuyClick, balance } = props
    let { NomeEmpresa, CotacaoRecente } = option
    let { buyCount } = this.state

    let totalCost = this.state.buyCount * option.CotacaoRecente,
        _onChange = (v) => { this.setState({ buyCount: v }) },
        _onClick = () => { console.log("BUY", buyCount, option); onBuyClick(option, buyCount) }

    return (
        <Modal
          header={"Quero comprar ações da " + NomeEmpresa +"!"}
          actions={[ <Button onClick={_onClick} modal='close'>Comprar!</Button> ]}
          trigger={
            <Button className="pink accent-4" waves='light'>
              Comprar
            </Button>
          }>
          <div>
            <p>Seu saldo disponivel é R$ { balance }</p>
            <p>
            No momento, uma ação de <strong>{ NomeEmpresa}</strong> custa R$ <strong>{ CotacaoRecente }</strong>.</p>

            <p>Eu gostaria de comprar <UnitChooser limit={balance} onChange={_onChange} inline={true} /> ações num total de <strong>R$ {totalCost} </strong>.</p>

          </div>
        </Modal>
    )
  }
}

const BuyActionsItem = (props) => {
    let { NomeEmpresa,
          UrlLogo,
          CotacaoRecente,
          Variacao,
          buyStock,
          onItemClick } = props
    return (
      <tr onClick={() => { onItemClick(props) }} {...props}>
        <td><img src={UrlLogo} className="logo-xs" /></td>
        <td>{ NomeEmpresa }</td>
        <td>{ CotacaoRecente }</td>
        <td>{ Variacao }</td>
        <td>
          <ShowBuyModal
            balance={props.balance || 0}
            onBuyClick={buyStock}
            option={props} />
        </td>
      </tr>
    )
}

const BuyActions = ({ onItemClick, buyStock, stockOptions }) => (
    <Card title="Quais ações eu posso comprar?">
      <Table bordered={true} className="tbl-emp">
        <thead>
          <tr>
            <th></th>
            <th>Empresa</th>
            <th>Cotação</th>
            <th>Variação</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          { stockOptions.map((o) => ({ ...o, buyStock, onItemClick })).map(BuyActionsItem) }
        </tbody>
      </Table>
    </Card>
)

class Comprar extends React.Component {

  componentDidMount() {
    this.props.fetchEmpresas()
  }

  render() {
    let { selectStockOption,
          buyStockOptions,
          fetchNoticias,
          visibleStockOptions,
          selectedOption } = this.props

    if(visibleStockOptions.length > 0 && !selectedOption) {
      selectStockOption(visibleStockOptions[0])
    }

    console.log("PROPS", this.props)

    return (
        <Row>

          <Col s={4}>
            <BuyActions
              buyStock={buyStockOptions}
              onItemClick={selectStockOption}
              stockOptions={visibleStockOptions} />
          </Col>

          <Col s={4}>
              <Row>
                <Col s={12}>
                  <LineGraph {...selectedOption} />
                </Col>
                <Col s={12}>
                  <Details {...selectedOption} />
                </Col>
              </Row>
            </Col>

            <Col s={4}>
              <News />
            </Col>

        </Row>
    )
  }
}

export default Comprar
