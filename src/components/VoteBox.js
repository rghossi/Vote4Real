import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export default class VoteBox extends React.Component {
  render() {
    const optionItems = this.props.poll.options.map(option => {
      return <option key={option.id} value={option.id}>{option.desc}</option>;
    });

    return (
      <form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Vote!</ControlLabel>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select your option</ControlLabel>
            <FormControl componentClass="select" value={this.props.selectedItem} onChange={this.props.handleSelect} placeholder="select">
              <option value="-1" disabled>--</option>
              {optionItems}
            </FormControl>
          </FormGroup>
          <FormControl.Feedback />
        </FormGroup>
        <Button onClick={this.props.handleSubmit}>
          Submit
        </Button>
      </form>
    );
  }
}