// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
  smoothImageWrapper: {

  },
  hiddenImg: {
    visibility: "hidden",
  },
  smoothImg: {

  },
}));


const SmoothImage = ({ dimensions, src, alt }) => {
  const classes = useStyles();
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [validSrc, setValidSrc] = React.useState(!!src);

  const LoadingSpinner = () => {
    
    return(
      <CircularProgress />
    );
  };

  const renderImage = React.useCallback(() => {
    if(validSrc){
      let className = classes.hiddenImg;
      if(imageLoaded){
        className = classes.smoothImg;
      }
      return(
        <img
          src = {src}
          alt = {alt}
          className = {className}
          style = {dimensions}
          onLoad = {() => setImageLoaded(true)}
          onError = {() => setValidSrc(false)}
        />
      );
    }
    else{
      return null;
    }
  }, [dimensions, src, alt, imageLoaded, validSrc, classes]);
    
  return(
    <div className={classes.smoothImageWrapper}>
      { renderImage() }
      { !imageLoaded && <LoadingSpinner /> }
    </div>
  );
};

SmoothImage.propTypes = {
  dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes
};


export default SmoothImage;