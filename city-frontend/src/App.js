import React from "react";
import { fetchAllData } from "./RestClient";
class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchAllData. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    let data = await fetchAllData();
    this.setState({ allData: data });
  }

  // this is displayed on the screen
  render() {
    return (
      <div>
        <div id="title" >Reiseführer</div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Finde deine Lieblings-Stadt
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.allData.map((ad, key) => (
            <div key={key}>
             Eintrag: {ad.cityName}. ID: {ad._id}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;