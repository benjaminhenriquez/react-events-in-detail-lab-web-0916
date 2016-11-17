
const React = require('react');

class CoordinatesButton extends React.Component {
  constructor() {
     super();
      this.coordinates = this.coordinates.bind(this)
      }

coordinates(event){
  this.props.onReceiveCoordinates([event.clientX, event.clientY])
}

 render() {
   return (
     <button onClick={this.coordinates}>Coordinates</button>
   );
 }
}

module.exports = CoordinatesButton;
