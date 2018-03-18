import React from 'react'

import { InputColumn }  from  './../../molecules/TitleInput'
import { Col, Row }  from '../../atoms/container'
import Button  from '../../atoms/button'
import Input  from '../../atoms/input'
import { Link } from 'react-router'

const ProductInfo = (props) => (

	<Col shadow size3>
		<p>{ props.Product.get('name')}</p>
		<Button onClick={ () => {
			props.addToCart(props.Store, props.Product)
		} }>Add to Cart</Button>
		
	</Col>
); 

export default ProductInfo
