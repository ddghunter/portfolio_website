// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';
// React Redux import
import { connect } from 'react-redux';

// My Component imports
import MainGrid from './core/containers/mainGrid';

// My Ducks imports
import { get_portfolio } from './core/ducks/bio';



const App = ({ fetchPortfolio }) => {
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    // Fetch Portfolio Data
    fetchPortfolio();
    // Set Window Resize Listener
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // Set Initial Window Size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [fetchPortfolio]);


  return(
    <MainGrid
      dimensions = {{height, width}}
    />
  );
};

App.propTypes = {
  fetchPortfolio: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPortfolio: () => { dispatch(get_portfolio()) },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
