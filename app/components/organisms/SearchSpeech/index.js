import React, { Component, PropTypes } from 'react';

import { Col, Row }  from '../../atoms/container'
import Input  from '../../atoms/input'
import Button  from '../../atoms/Button'

// assets
const imagePath = '/assets/images'
const mic = imagePath + '/mic.gif';
const micAnimate = imagePath + '/mic-animate.gif'

class SearchSpeech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      lastSearch: '',
      supportVoice: (typeof window  !== 'undefined')
                        ? 'webkitSpeechRecognition' in window : false
    };
    this._onInputKeyPress = this._onInputKeyPress.bind(this)
    this._onInputChange = this._onInputChange.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
    this._submit = this._submit.bind(this)
  }

  componentDidMount() {
    if (this.state.supportVoice) {

      const WebkitSpeechRecognition = window.webkitSpeechRecognition;
      this.recognition = new WebkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = this.props.lang || 'EN';
      this.recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;

            this.setState({
              inputValue: '',
              speaking: false,
              lastSearch: finalTranscript,
            }, () => {
                this._onSubmit()
                this.recognition.stop();
              });

          } else {
            interimTranscript += event.results[i][0].transcript;
            this.setState({
              inputValue: interimTranscript,
            });
            if (this.props.onChange) this.props.onChange(interimTranscript);
          }
        }
      };
    }
  }

  _onInputKeyPress(event) {
    if(event.key.toLowerCase() === 'enter' ){
      this.setState({
        inputValue: '',
        lastSearch: this.state.inputValue,
      }, () => {
        if ( this.props.onEnd ) {
          this._onSubmit()
        }
      }
    );
    }
  }
  _submit() {
      this.setState({
        inputValue: '',
        lastSearch: this.state.inputValue,
      }, () => {
        this._onSubmit()
      }
    );
  }
  _onSubmit() {
      if ( this.props.onEnd ) {
        this.props.onEnd(this.state.lastSearch)
      }
  }

  _onInputChange(event) {
    let key = event.target.value
    this.setState((oldState) => {
      return oldState.inputValue = key
    });
  }

  _say() {
    if (this.state.supportVoice) {
      if (!this.state.speaking) {
        // start listening
        this.recognition.start();
      } else {
        this.recognition.stop();
      }

      this.setState({
        speaking: !this.state.speaking,
        inputValue: '',
      });
    }
  }

  render() {
    return this.state.supportVoice ? (
      <Row spaced sizeFull>
        <Col sizeFull>
          <Row sizeFull>
            <Input full
              value={this.state.inputValue}
              onKeyPress={this._onInputKeyPress}
              onChange={this._onInputChange}
              />
          </Row>
          {
            this.state.lastSearch && <Row>Your are searching for: {this.state.lastSearch}</Row>
          }
        </Col>
        <Col>
          <Row>
            <Button primary onClick={this._submit}>Pesquisar</Button>
          </Row>
        </Col>
        <Col>
          <Row>
            <img
              src={this.state.speaking ? micAnimate : mic}
              onClick={this._say.bind(this)} />
          </Row>
        </Col> 
      </Row>
    ) : null;
  }
}

export default SearchSpeech;
export { SearchSpeech }
