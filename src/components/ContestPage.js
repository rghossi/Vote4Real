import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import contests from '../data/contests';
import NotFoundPage from './NotFoundPage';
import ChartWithLegend from './ChartWithLegend';

export default class ContestPage extends React.Component {
  render() {
    const id = parseInt(this.props.params.id);
    const contest = contests.filter((contest) => contest.id === id)[0];
    if (!contest) {
      return <NotFoundPage/>;
    }
    let data = [];
    contest.options.forEach((o) => {
      data.push({
        value: o.count,
        label: o.desc,
        color: "#F7464A"
      });
    });
    const options = {
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
    };
    return (
      <div>
        <h2>{contest.name}</h2>
        <ChartWithLegend data={data} options={options} />
      </div>
    );
  }
}