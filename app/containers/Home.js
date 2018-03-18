import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import axios from 'axios'

import * as UserActions from '../actions/UserActions' 
import * as StoreActions from '../actions/StoreActions' 

import SearchSpeech from '../components/organisms/SearchSpeech'
import StoreInfo from '../components/organisms/StoreInfo'
import TitleDescription from '../components/molecules/TitleDescription'
import { Row, Col } from  '../components/atoms/container'

class Home extends Component {
  constructor(props){
    super(props)
  } 

  render() {

    const { User, Store } = this.props
    return (
       <Col sizeFull>
          <Col >
            Find Store
          </Col>
          <Col >
            <SearchSpeech onEnd={this.props.getStore} />
          </Col>
          <Row spaceAround wrap>
            { Store.get('data').map((store, indexStore) => {
              return <StoreInfo key={indexStore}  Store={store} />
            })}
          </Row>

        </Col>
    )
  }
}


function mapStateToProps (state) {
  return {
    User: state.User,
    Store: state.Store
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(StoreActions,UserActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
