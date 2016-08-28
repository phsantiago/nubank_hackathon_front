import React from 'react'
import Styles from './Vender.scss'
import { Row, Col, Button, Card, Table, Td, Modal } from 'react-materialize'

const ListAction = ({name, val}) => (
	<p>{name}</p>
)

class ModalHistory extends React.Component {
	render() {
		const {modalData, history} = this.props
		return (
			<Modal
			  header={modalData + " - Histórico de investimento"}
			  trigger={
			    <Button waves='light'>
			    	<i className="large material-icons">info_outline</i>
			    </Button>
			  }>
			  <div>
			  	{history.map(ListAction)}
			  </div>
			</Modal>
		)
	}
}

const SellOptionsListItem = (props) => {
    let { UrlLogoEmpresa: img,
          NomeEmpresa: name,
          QuantidadeEmEstoque: qt,
          PrecoAtualAcao: val,
          incrementQty,
          decrementQty } = props

	return (<tr className="valign-wrapper row">
		<td className="col s1">
			<img src={img} className="circle responsive-img" />
		</td>
		<td className="col s5">
			{name}
		</td>
		<td className="col s2">
			<button className="btn-purple"
        onClick={() => decrementQty(props) }>
				-
			</button>
			{qt}
			<button className="btn-purple"
        onClick={() => incrementQty(props) }>
				+
			</button>
		</td>
		<td className="col s1">
			{val}
		</td>
		<td className="col s2">
			<Button className="pink accent-4" waves='light'>
				Vender
			</Button>
		</td>
		<td className="col s1">
			<ModalHistory modalData={name} history={[{name:"name",val:"1.1"},{name:"name",val:"1.1"}]}/>
		</td>
	</tr>)
}

const SellOptionsList = ({ options, incrementQty, decrementQty }) => (
    <Table className="tbl-vender">
      <thead>
        <tr className="row">
          <td className="col s1"> </td>
          <td className="col s5">Nome</td>
          <td className="col s2">Qtd</td>
          <td className="col s1">Valor</td>
          <td className="col s2">Ação</td>
          <td className="col s1">Infos</td>
        </tr>
      </thead>
      { options.map((o) => ({ ...o, incrementQty, decrementQty })).map(SellOptionsListItem) }
    </Table>
)

class Vender extends React.Component {
  componentDidMount() {
    this.props.fetchAcoes()
  }

  render() {
    let { availableOptions } = this.props
    return (
    	<Row>
	        <Col s={9}>
	        	<Card title="Quais acoes que eu posso vender?">
          			<SellOptionsList
                  {...this.props}
                  options={availableOptions} />
	        	</Card>
	        </Col>
    	</Row>
    )
  }
}

export default Vender
