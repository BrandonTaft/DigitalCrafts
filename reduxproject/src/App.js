
import './App.css';
import { connect } from 'react-redux'


function App(props) {
  return (
   <div>
     <h1>{props.ctr}</h1>
     <button>Increment</button>
   </div>
  );
}

// mapStateToProps allows you to read the global state and make it available as properties in your components 

const mapStateToProps = (state) => {
  return {
    ctr: state.counter 
  }
}

export default connect(mapStateToProps)(App) 

