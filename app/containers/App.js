import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Helmet from 'react-helmet'
import { Link } from 'react-router'

import * as UserActions from '../actions/UserActions' 

import UserInfo from './../components/organisms/UserInfo'
import { Col } from './../components/atoms/container'
import Button from './../components/atoms/button'

class App extends Component {
  render() {
  	let { User, App, Checkout } = this.props

    return (
      <Col>
      {
         Checkout.get('orderItems').size > 0 && <Col alignRight fullSize><Link to='/checkout'><Button primary full>Checkout your order</Button> </Link></Col>
       }
        {	
          App.get('loadding') &&  <Col>loadding data</Col>
        }
        <UserInfo 
          _submit={this.props.auth} 
          onChange={this.props.onChangeUserInfo.bind(this)} 
          _logout={this.props.onLogout} 
          User={User} />
        {  this.props.children }
      </Col>
    )
  }
}
 
function mapStateToProps (state) {
  return {
    User: state.User,
    App: state.App,
    Checkout: state.Checkout,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
