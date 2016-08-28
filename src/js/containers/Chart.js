import { connect } from 'react-redux'
import { createSelector} from 'reselect'
import React from 'react'
import { LineChart } from 'react-d3'
import { Card } from 'react-materialize'

const mapStateToProps = createSelector(
  (state) => state.comprar.get('chart'),
  (data) => { return data.toJS() }
)

const mapActionCreators = {
}

const Chart = ({ name, data }) => {
  console.log("===================> CHART DATA", name, data)

  if(!data || data.length <= 0)
    return null

  let lineData = [
    { name, values: data }
  ]

  return (<Card>
    <LineChart
      legend={true}
      data={lineData}
      width='100%'
      height={400}
      viewBoxObject={{ x: 0, y: 0, width: 500, height: 400 }}
      title="Como o preço variou?"
      yAxisLabel="Cotação (R$)"
      xAxisLabel="Periodo (Hora)"
      gridHorizontal={true} />
  </Card>)
}

export default connect(mapStateToProps, mapActionCreators)(Chart)
