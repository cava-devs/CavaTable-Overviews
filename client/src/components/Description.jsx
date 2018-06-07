import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);

    let displayDescription = this.props.description;
    if (displayDescription.length > 259) {
      displayDescription = displayDescription.slice(0, 260) + '...';
    };
    console.log(displayDescription);
    this.state = {
      displayDescription: displayDescription,
      showAll: false,
    };
    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription(event) {
    event.preventDefault();
    this.setState({
      showAll: !this.state.showAll,
    });
  }

  render() {
    const isLengthy = this.state.displayDescription !== this.props.description;
    console.log(isLengthy);

    if (isLengthy) {
      return (
        <div id="restaurantDescription">
          <div>
            {!this.state.showAll ? this.state.displayDescription : this.props.description}
          </div>
          <a className="toggleDescription" href="#" onClick={this.toggleDescription}>{this.state.showAll ? '- Read Less' : '+ Read More'}</a>
        </div>
      );
    }
    return (
      <div id="restaurantDescription">{this.props.description}</div>
    );
  }
}

export default Description;
