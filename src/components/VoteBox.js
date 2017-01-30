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
            <FormControl componentClass="select" placeholder="select">
              {optionItems}
            </FormControl>
          </FormGroup>
          <FormControl.Feedback />
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </form>
    );
  }
}