import * as ReactDOM from "react-dom";

import Router from './router'

function App () {
    return <Router />;
}

function render() {
  ReactDOM.render(<App />, document.body);
}

render();
