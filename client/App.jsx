import React from "react";
import axios from "axios";

import Mainbody from "./components/Mainbody.jsx";
import Sidebar from "./components/Sidebar.jsx";

import { GlobalStyle } from "./StyledComponents.jsx";

const proxyId = window.location.search.substring(2);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      game: null,
    };
  }

  componentDidMount() {
    if (!proxyId) {
      axios.get('/mainbody')
        .then(response => {
          console.log('serving up static file');
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {

        });
    } else {
      axios.get(`/mainbody/${proxyId}`)
        .then((res) => {
          // console.log("before setState: ", this.state);
          this.setState({
            game: res.data[0],
          });
          this.setState({ loading: false });
          // console.log('after setState: ', this.state);
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    // console.log(proxyId);
    const { game, loading } = this.state;
    // if(loading === false) console.log("this.state in render is", game.mainbody);
    return (
      <div>
        <>
          <GlobalStyle />
        </>
        {loading === false ? (
          <Mainbody
            mainbodydata={game.mainbody}
            relatedcontent={game.relatedContent}
          />
        ) : (
          "Main body loading..."
        )}
        {loading === false ? (
          <Sidebar sidebardata={game.sidebar} name={game.name} />
        ) : (
          " Side bar content loading..."
        )}
      </div>
    );
  }
}

export default App;
