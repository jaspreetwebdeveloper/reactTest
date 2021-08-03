import React from 'react';
import logo from './logo.svg';
import HoverHandler from './jsFiles/HoverHandler';
import withHoverHOC from './HOC/withHoverHOC';

const MainComponent = (props: any) => {
  const { ...remainingProps } = props;
  return (
    <div>
        <header className="App-header">
          <img src={logo} className={props.isStatic ? "App-static-logo" : "App-logo"} alt="logo" />
          <a
            style={{textDecoration: 'none'}}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverHandler onHover={<div {...remainingProps} className="answer"> <p>React</p></div>}>
                <div {...remainingProps}> Which JS Library is the best? 
                  <div className="instruction">(hover to see the answer.)</div>
                </div>
            </HoverHandler>
          </a>
        </header>
      </div>
  )
}

export default withHoverHOC(MainComponent);
