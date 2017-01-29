import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

export default class ChartWithLegend extends React.Component{
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={6}><Doughnut {...this.props} /></Col>
        </Row>
      </Grid>
    );
  }
}