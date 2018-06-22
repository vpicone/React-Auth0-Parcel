import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './src/services/Routes';

// class HelloMessage extends React.Component {
//   render() {
//     const auth0 = new auth();
//     return (
//       <div>
//         <button onClick={() => auth0.login()}>Log in</button>
//         <Routes />
//       </div>
//     );
//   }
// }

var mountNode = document.getElementById('app');
ReactDOM.render(<Routes />, mountNode);
