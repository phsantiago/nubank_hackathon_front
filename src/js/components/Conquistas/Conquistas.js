import React from 'react'
import { Row, Col, Table, CardTitle, Card, Collection, CollectionItem } from 'react-materialize'
import Style from './Conquistas.scss'

const conquista = ({useDiv, TituloConquista, DescricaoConquista, Completada, ValorDesconto, colSize, ContainerClass}) => {
    if(!ContainerClass)
      ContainerClass = Card
    if(useDiv){
      return (<Col s={colSize}>
        <div className="tac archiev">
          <h5 className="light-green-text">
            <b>R$ {ValorDesconto}</b>
          </h5>
          <h4>{TituloConquista}</h4>
            <img className={!Completada ? 'disabled medal' : 'medal'} src="http://i.imgur.com/BnNo0Tk.png" />

          <p>{DescricaoConquista}</p>
        </div>
      </Col>)
    } else {

      return (<Col s={colSize}>
        <ContainerClass className="tac archiev">
          <h5 className="light-green-text">
            <b>R$ {ValorDesconto}</b>
          </h5>
          <h4>{TituloConquista}</h4>
            <img className={!Completada ? 'disabled medal' : 'medal'} src="http://i.imgur.com/BnNo0Tk.png" />

          <p>{DescricaoConquista}</p>
        </ContainerClass>
      </Col>)
    }
}

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
    let { hideTitle, colSize, useDiv} = this.props
    if(!colSize)
      colSize = 3
		return (
			<div>
        { hideTitle? null : <h3>Suas Conquistas</h3> }
				<Row>
					{ lista.map((o) => ({ ...o, colSize: colSize, useDiv})).map(conquista) }
				</Row>
			</div>
		)
	}
}

export default Conquistas
