import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import axios from 'axios'

import * as StoreActions from '../actions/StoreActions' 
import * as CheckoutActions from '../actions/CheckoutActions' 

import SearchSpeech from '../components/organisms/SearchSpeech'
import StoreInfo from '../components/organisms/StoreInfo'
import ProductInfo from '../components/organisms/ProductInfo'
import TitleDescription from '../components/molecules/TitleDescription'
import Button from '../components/atoms/button'
import { Row, Col } from  '../components/atoms/container'

class StoreProducts extends Component {

  // static fetchData({ store, params, history }) {
  //   let { storeId, storeName } = params
  //   return store.dispatch(StoreActions.getStore(storeName))
  // }


  constructor(props){
    super(props)
  } 

  componentDidMount(){
    let { storeId, storeName } = this.props.params
    // console.log('asdasdasas')
    this.props.getStoreAndProducts(storeName)
  }

  render() {

    const { Checkout, User, Store } = this.props
    return (
       <Col sizeFull>
          {
            Store.get('selectedStore').get('loadded').get('data') ?
              <StoreInfo Store={Store.get('selectedStore').get('data')} goBack />
              : <p>loadding data Store</p>
          }
          {
            Store.get('selectedStore').get('loadded').get('products') ?
              <Row spaceAround wrap>
                {
                  Store.get('selectedStore').get('products').map((Product, indexProduct) => {
                    return <ProductInfo 
                            key={indexProduct}  
                            Product={Product} 
                            Store={Store.get('selectedStore')} 
                            addToCart={this.props.onAddProductToCart}  />
                  })
                }
              </Row>

              : <Col>loadding products of the Store</Col>
          }

        </Col>
    )
  }
}


function mapStateToProps (state) {
  return {
    Store: state.Store,
    Checkout: state.Checkout

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(StoreActions, CheckoutActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreProducts)
