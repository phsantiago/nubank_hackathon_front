import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import { createSelector} from 'reselect'
import React from 'react'
import { Row, Col, Table, CardTitle, Card, Collection, CollectionItem } from 'react-materialize'

const mapStateToProps = createSelector(
  (state) => state.comprar.get('newsData'),
  (data) => {
    return { newsData: data }
  }
)

const mapActionCreators = {
}

const NewsListItem = ({ UrlImagemNoticia: img_url, TituloNoticia, Descricao: content, UrlNoticia: source_url }) => (
  <a href={source_url} target="_BLANK">  
    <Card
      header={<CardTitle image={img_url}>{TituloNoticia}</CardTitle>}
      className="small">
      { content }
    </Card>
  </a>  
)

const News = ({ newsData }) => {
  console.log("NEWS DATA", newsData)
    return (<div>
      <h3>Notícias</h3>
      { newsData.map(NewsListItem) }
    </div>)
}

export default connect(mapStateToProps, mapActionCreators)(News)
