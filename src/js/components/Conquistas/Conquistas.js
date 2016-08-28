import React from 'react'
import { Row, Col, Table, CardTitle, Card, Collection, CollectionItem } from 'react-materialize'
import Style from './Conquistas.scss'

const conquista = ({TituloConquista, DescricaoConquista, Completada})=>(
	<Col s={3}>
		<Card className="tac archiev">
			<h5>{TituloConquista}</h5>
				<img className={!Completada ? 'disabled medal' : 'medal'} src="http://i.imgur.com/BnNo0Tk.png" />
			
			<p>{DescricaoConquista}</p>
		</Card>
	</Col>
)
class Conquistas extends React.Component {

	render() {
		var lista = [
			{
		     "TituloConquista": "Ta Saindao da Jaula",
		     "DescricaoConquista": "Vender sua primeira ação",
		     "Completada": true
		   },
		   {
		     "TituloConquista": "Aquecendo os Motores",
		     "DescricaoConquista": "Vender sua primeira ação",
		     "Completada": false
		   },
		   {
		     "TituloConquista": "É mais de 300 Reais",
		     "DescricaoConquista": "Comprar mais de 300$ em ações",
		     "Completada": false
		   },
		   {
		     "TituloConquista": "Amor para Dar e Vender",
		     "DescricaoConquista": "Vender mais de 300$ em ações",
		     "Completada": false
		   },
		   {
		     "TituloConquista": "Hipster",
		     "DescricaoConquista": "Compre ações de uma empresa que possua valor no mercado inferior a 500.000$",
		     "Completada": false
		   },
		   {
		     "TituloConquista": "Conservador",
		     "DescricaoConquista": "Compre ações de uma empresa que possua valor no mercado superior a 100.000.000$",
		     "Completada": false
		   }
		]
		return (
			<div>
				<h3>Suas Conquistas</h3>
				<Row>
					{ lista.map(conquista) }
				</Row>
			</div>
		)
	}
}

export default Conquistas
