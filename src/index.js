import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';


   const ErrorBoundary = class ErrorBoundary extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Uh oh! Something went wrong.</h1>;
    }
    return this.props.children;
  }
}


ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

