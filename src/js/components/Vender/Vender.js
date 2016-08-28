import React from 'react'
import Styles from './Vender.scss'
import { Row, Col, Button, Card, Table, Td, Modal } from 'react-materialize'

const ListItem = ({img, name, qt, val}) => (

	<tr className="valign-wrapper row">
		<td className="col s1">
			<img src={img} className="circle responsive-img" />
		</td>
		<td className="col s5">
			{name}
		</td>
		<td className="col s2">
			<button className="btn-purple">
				-
			</button>
			{qt}
			<button className="btn-purple">
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
	</tr>
)

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
class ActionList extends React.Component {
  render() {
    const {history} = this.props

    return (
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
      	{history.map(ListItem)}
      </Table>
    )
  }
}

class Vender extends React.Component {
  render() {
  	var array = [
  		{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mcdonalds-90s-logo.svg/2000px-Mcdonalds-90s-logo.svg.png", name:"McDonald's", qt:"2", val:"R$123"},
  		{img:"https://diariodopresal.files.wordpress.com/2010/09/petrobras-br.jpg", name:"Petrobras", qt:"4", val:"R$100"},
  	]
    return (
    	<Row>
	        <Col s={9}>
	        	<Card>
          			<ActionList history={array} />
	        	</Card>
	        </Col>
    	</Row>
    )
  }
}

export default Vender

