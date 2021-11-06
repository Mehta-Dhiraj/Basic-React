import React, { Fragment } from 'react';
import classes from './Model.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onCancel}/>
};
const ModelOverlay = props => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
};
const portalElement = document.getElementById('overlays');

const Model = props => {
    return (
      <Fragment>
        {ReactDOM.createPortal(<Backdrop onCancel={props.onCancel}/>, portalElement)}
        {ReactDOM.createPortal(
          <ModelOverlay>{props.children}</ModelOverlay>,
          portalElement
        )}
      </Fragment>
    );
}

export default Model;