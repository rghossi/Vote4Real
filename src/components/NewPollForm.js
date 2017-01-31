import React from 'react';
import axios from 'axios';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

export default class NewPollForm extends React.Component {
	render() {
		return (
			<div id="form-enclosing-div">
				<Button className={this.props.newButtonClass} bsStyle="primary" bsSize="large" onClick={this.props.showForm} block>Create new Poll</Button>
				<form id="new-poll-form" className={this.props.formClass}>
			        <FormGroup
			          controlId="formBasicText"
			        >
			          <ControlLabel>Title</ControlLabel>
			          <FormControl
			            type="text"
			            value={this.props.title}
			            placeholder="Enter title"
			            onChange={this.props.handleTitleChange}
			          />
			          <hr className="separator"/>
			          <ControlLabel>Options</ControlLabel>
			          <FormControl
			            type="text"
			            className="list-item-box"
			            key={0}
			            value={this.props.options[0]}
			            placeholder="Vote option #1"
			            onChange={this.props.handleOptionChange.bind(this, 0)}
			          />
			          <FormControl
			            type="text"
			            key={1}
			            className="list-item-box"
			            value={this.props.options[1]}
			            placeholder="Vote option #2"
			            onChange={this.props.handleOptionChange.bind(this, 1)}
			          />
			          {this.props.optionBoxes}
			          <Button bsStyle="info" onClick={this.props.addNewOption} block>Add new option</Button>
			        </FormGroup>
			        <div className="text-center">
				        <Button bsStyle="danger">
					      Create
					    </Button>
				    </div>
			    </form>
		    </div>
		);
	}
}