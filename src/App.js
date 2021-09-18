import React, { Component } from "react";
import "./App.css";

import sampleText from "./sampleText.json";
import Markdown from "markdown-to-jsx";

class App extends Component {
  state = {
    text: sampleText.text,
  };
  componentDidMount() {
    const text = localStorage.getItem("text");
    if (text) {
      this.setState({ text });
    } else {
      this.setState({ text: sampleText.text });
    }
  }

  componentDidUpdate() {
    const text = this.state.text;
    localStorage.setItem("text", text);
  }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this.handleChange}
              className="form-control"
              rows="35"
              value={this.state.text}
            ></textarea>
          </div>
          <div className="col-sm-6">
            <Markdown options={{ wrapper: "article" }}>
              {this.state.text}
            </Markdown>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
