import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CheckoutActions from '../actions/CheckoutActions' 
import { Row, Col } from  '../components/atoms/container'
import Button from  '../components/atoms/button'

class CheckoutContainner extends Component {

  constructor(props){
    super(props)
    this._payment = this._payment.bind(this)
  } 

  _payment (){
      if( ! this.props.User.get('logged')){
        alert('user not logged')
      } else{
        alert('paymet ok')
      }
  }
 
  render() {

    const { Checkout } = this.props
    return (
       <Col sizeFull>
         
      { Checkout.get('orderItems').map( ( order ) => {
        return <p>{order.storeId} - {order.productId}</p>
        })
      }
      <Button onClick={this._payment} >Paymet</Button>
        </Col>
    )
  }
}


function mapStateToProps (state) {
  return {
    Checkout: state.Checkout,
    User: state.User
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign( CheckoutActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainner)
