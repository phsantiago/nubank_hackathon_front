import React from 'react'
import Styles from './Vender.scss'
import { Row, Col, Button, Card, Collection, CollectionItem } from 'react-materialize'

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
				{qt + "x" + val}
			</Col>
			<Col s={2}>
				<Button className="pink accent-4" waves='light'>
					Vender
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
	          		<ActionList history={array} />
	        	</Card>
	        </Col>
    	</Row>
    )
  }
}

export default Vender

