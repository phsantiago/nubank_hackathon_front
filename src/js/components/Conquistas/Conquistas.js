import React from 'react'
import { Row, Col, Table, CardTitle, Card, Collection, CollectionItem } from 'react-materialize'
import Style from './Conquistas.scss'

const conquista = ({TituloConquista, DescricaoConquista, Completada, ValorDesconto})=>(
	<Col s={3}>
		<Card className="tac archiev">
			<h5 className="light-green-text">
				<b>R$ {ValorDesconto}</b>
			</h5>
			<h4>{TituloConquista}</h4>
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
		     "Completada": true,
		     "ValorDesconto": 5
		   },
		   {
		     "TituloConquista": "Aquecendo os Motores",
		     "DescricaoConquista": "Vender sua primeira ação",
		     "Completada": false,
		     "ValorDesconto": 5
		   },
		   {
		     "TituloConquista": "É mais de 300 Reais",
		     "DescricaoConquista": "Comprar mais de 300$ em ações",
		     "Completada": false,
		     "ValorDesconto": 5
		   },
		   {
		     "TituloConquista": "Amor para Dar e Vender",
		     "DescricaoConquista": "Vender mais de 300$ em ações",
		     "Completada": false,
		     "ValorDesconto": 5
		   },
		   {
		     "TituloConquista": "Hipster",
		     "DescricaoConquista": "Compre ações de uma empresa que possua valor no mercado inferior a 500.000$",
		     "Completada": false,
		     "ValorDesconto": 5
		   },
		   {
		     "TituloConquista": "Conservador",
		     "DescricaoConquista": "Compre ações de uma empresa que possua valor no mercado superior a 100.000.000$",
		     "Completada": false,
		     "ValorDesconto": 5
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
