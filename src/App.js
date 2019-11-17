import * as React from "react";
import './App.css';
import axios from 'axios';
import logo from './giphy-logo.svg';

 const PUBLIC_KEY = 'wy1tKswrmePmcwQI2hV3RBd336yfjvkS';
 const BASE_URL = 'https://api.giphy.com/v1/gifs/';
 const LIMIT = 1;
 const OFFSET = 0;
 const RATING = 'G';
 const LANG = 'en';

 function data() {
     return {
       gif: [], //this is to hold the whole array (optional)
       gifSrc: [], //this is required to render the gif in your img src
       search: '', //this v-model will be the text the user puts in the search box
       valid: '' //this is for vuetify markup to validate text was entered (optional)
     }
   };

function testGet() {

}

export default class App extends React.Component {
    state = {
        gif: {},
        gifSrc: ''
    }

    componentDidMount() {
        // Make a request for a user with a given ID
        let search = "duck";
        console.log("GET at: ", BASE_URL + 'trending?' + 'api_key=' + PUBLIC_KEY
//                                                                    + '&q=' + search
                                                                                    + '&limit=' + LIMIT
//                                                                                    + '&offset=' + OFFSET
                                                                                   + '&rating=' + RATING
//                                                                                   + '&lang=' + LANG
                                                                                   );
        axios.get(BASE_URL + 'trending?'
        + 'api_key='
        + PUBLIC_KEY
//        + '&q=' + search
        + '&limit=' + LIMIT
//        + '&offset=' + OFFSET
        + '&rating=' + RATING
//        + '&lang=' + LANG
        )
          .then(response => {
            // handle success
            console.log("response:", response);
             const gif = response.data;
             this.setState({gif: gif});
             const src = response.data.data[0].images.original.url;
             console.log("gif src", src);
             this.setState({gifSrc: [src]});
             console.log("set gifSrc", this.state.gifSrc);
             console.log("STATE", this.state);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }
    render() {
    return(
      <div className="App">
          <header className="App-header">
            <img src={this.state.gifSrc} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload~~~~~~~
            </p>
            <a
              className="App-link"
              onClick={testGet}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
    }
}
