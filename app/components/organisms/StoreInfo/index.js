import React from 'react'
import { Col, Row }  from '../../atoms/container'
import { Link } from 'react-router'

const StoreInfo = (props) => (

	<Col shadow size3>
		<p>{ props.Store.get('name')}</p>
		{
			props.goBack ?
			<Link to={'/'}>Go Back</Link>
			: <Link to={ `/store/${props.Store.get('name')}/${props.Store.get('id')}`}>Go to Store</Link>
		}
	</Col>
); 

export default StoreInfo
