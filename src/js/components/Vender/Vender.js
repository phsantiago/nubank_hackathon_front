import React from 'react'
import Styles from './Vender.scss'
import { Row, Col, Button, Card, Collection, CollectionItem, Modal } from 'react-materialize'

const ListItem = ({img, name, qt, val}) => (
	<CollectionItem>
		<Row className="valign-wrapper">
			<Col s={1}>
				<img src={img} className="circle responsive-img" />
			</Col>
			<Col s={7}>
				{name}
			</Col>
			<Col s={2}>
				{qt}{val}
			</Col>
			<Col s={2}>
				<Button className="pink accent-4" waves='light'>
					Vender tes
				</Button>
			</Col>
		</Row>
	</CollectionItem>
)
class ActionList extends React.Component {
  render() {
    const {history} = this.props

    return (
      <Collection>
      	{history.map(ListItem)}
      </Collection>
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
		        	<Modal
		        	  header='Modal Header'
		        	  trigger={
		        	    <Button waves='light'>MODAL</Button>
		        	  }>
		        	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
		        	</Modal>
	          			<ActionList history={array} />
	        	</Card>
	        </Col>
    	</Row>
    )
  }
}

export default Vender

