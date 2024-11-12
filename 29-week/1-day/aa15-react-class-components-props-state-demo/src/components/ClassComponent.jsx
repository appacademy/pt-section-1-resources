import { Component } from 'react';
import { Link } from 'react-router-dom';

class ClassComponent extends Component {
  constructor(props) {
    super(props); // must be called if creating a constructor method

    // Initialize the component state object
    this.state = {
      count: 0
    };
  }

  // useEffect when dependency array is empty
  componentDidMount() {
    console.log("Component has mounted");
  }

  // useEffect when dependency array has certain data
  componentDidUpdate() {
    console.log("Component has updated");
  }

  // useEffect's return function
  componentWillUnmount() {
    console.log("Component has unmounted");
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <div>{this.state.count}</div>
        <button
          onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          Increment
        </button>
        <hr />
        <div>
          <Link to="/function">FUNCTION COMPONENT</Link>
        </div>
      </>
    );
  }
}

export default ClassComponent;
