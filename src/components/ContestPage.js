import React from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import contests from '../data/contests';
import NotFoundPage from './NotFoundPage';
import VoteBox from './VoteBox';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router';

export default class ContestPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contest: null,
      previousContest: null,
      nextContest: null
    };
  }

  fetchContest() {
    const id = parseInt(this.props.params.id);
    const contest = contests.filter((contest) => contest.id === id)[0];
    const index = contests.indexOf(contest);

    if (index !== 0){
      var previousContest = contests[index-1];
    }
    if (index !== contests.length-1){
      var nextContest = contests[index+1];
    }

    this.setState({ contest, previousContest, nextContest });
    console.log(this.state);
  }

  componentDidMount () {
    this.fetchContest();
    console.log('bla');
  }

  componentDidUpdate (prevProps) {
    let oldId = prevProps.params.id;
    let newId = this.props.params.id;
    if (newId !== oldId)
      this.fetchContest();
  }

  render() {
    console.log(this.state.contest);
    if (!this.state.contest) {
      return <NotFoundPage/>;
    }
    const colors = ['#56E2CF','#56AEE2','#8A56E2', '#CF56E2', '#E256AE', '#E25668', '#E28956', '#E2CF56', '#AEE256'];
    const data = {
      labels: this.state.contest.options.map((o) => {return o.desc}),
      datasets: [{
        data: this.state.contest.options.map((o) => {return o.count}),
        backgroundColor: colors,
        hoverBackgroundColor: colors
      }]
    };
    const previous = () => {
      if (this.state.previousContest){
        return <Link className="pager-item" to={`/contest/${this.state.previousContest.id}`}>&larr; Previous</Link>;
      }
    }
    const next = () => {
      if (this.state.nextContest){
        return <Link className="pager-item" to={`/contest/${this.state.nextContest.id}`}>Next &rarr;</Link>;
      }
    }
    return (
      <div>
        <Row>
          <Col xs={12} md={12}>
            <h1 className='text-center'><small>{this.state.contest.name}</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <VoteBox contest={this.state.contest} />
          </Col>
          <Col xs={12} md={8}>
            <Doughnut data={data} />
          </Col>
        </Row>
        <Pager>
          {previous()}
          {next()}
        </Pager>
      </div>
    );
  }
}