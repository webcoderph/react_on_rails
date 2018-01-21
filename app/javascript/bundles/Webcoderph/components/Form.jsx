import React from 'react';

export default class Form extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {name: this.props.name}
  }

  setName = (name) => {
    this.setState({name: name});
  };

  render() {
    return (	 
    <div>		    
      <h4>{this.state.name}</h4>
      <input type="text" value={this.state.name} onChange={(e) => this.setName(e.target.value)} />
    </div>
    );
  }
}
