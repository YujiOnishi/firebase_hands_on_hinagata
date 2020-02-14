import React, { Component } from 'react';
import { firestore,firebaseApp } from '../plugins/firebase';

export default class List extends Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      type: "en",
      words: [],
      documents: [],
      isLoading: true
    };
    this.getWords = this.getWords.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  componentDidMount = () => {
    this._isMounted = true;
    this.getWords();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate = (prevProps, prevState) => {
    this.getWords();
  }

  getWords() {
    let type = "";
    let translatedType = "";

    type = this.state.type;
    if (type === "en") {
      translatedType = "ja"
    }
    else {
      translatedType = "en"
    }
  }

  changeType(dicType) {
    this.setState({ type: dicType });
  }

  render() {
    return (
      <div>
        <label className="siimple-label siimple--color-white">表示:</label>
        <div className="siimple-btn siimple-btn--primary" onClick={() => this.changeType("en")}>
          英和
        </div>
        <div className="siimple-btn siimple-btn--primary" onClick={() => this.changeType("ja")}>
          和英
        </div>
        <div className="siimple-rule"></div>
        {this.state.isLoading &&
          <div className="siimple-card-title siimple--color-white">Loading...</div>}
        {
        }
      </div>
    );
  }
}