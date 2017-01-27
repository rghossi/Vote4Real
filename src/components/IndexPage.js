import React from 'react';
import ContestPreview from './ContestPreview';
import contests from '../data/contests';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="contest-selector">
          {contests.map(contestData => <ContestPreview key={contestData.id} {...contestData} />)}
        </div>
      </div>
    );
  }
}