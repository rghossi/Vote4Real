import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs';

export default class ChartWithLegend extends React.Component{
  componentDidMount() {
    const legend = this.refs.chart.getChart().generateLegend();
    this.setState({
      legend: legend
    });
  }
  render() {
    const legend = this.state && this.state.legend || '';
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={6}><Doughnut ref="chart" {...this.props} /></Col>
          <Col xs={6} md={6}><div dangerouslySetInnerHTML={{ __html: legend }} /></Col>
        </Row>
      </Grid>
    );
  }
}