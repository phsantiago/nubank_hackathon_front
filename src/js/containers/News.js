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

const NewsListItem = ({ UrlImagemNoticia: img_url, title, Descricao: content, UrlNoticia: source_url }) => (
    <Card
      header={<CardTitle image={img_url}>{title}</CardTitle>}
      className="small">
      { content }
    </Card>
)

const News = ({ newsData }) => {
  console.log("NEWS DATA", newsData)
    return (<div>
      <h1>Noticias</h1>
      { newsData.map(NewsListItem) }
    </div>)
}

export default connect(mapStateToProps, mapActionCreators)(News)
