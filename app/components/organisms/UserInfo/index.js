import React from 'react'

import { InputColumn }  from  './../../molecules/TitleInput'
import { Col, Row }  from '../../atoms/container'
import Button  from '../../atoms/button'
import Input  from '../../atoms/input'

const UserInfo = (props) => (

	!props.User.get('logged') ?
	<Row>
 		<Input placeholder={ 'Email' }  name='email' onChange={props.onChange}/>
 		<Input placeholder={ 'Password' } name='password'  onChange={props.onChange}/>
 		<Button primary onClick={props._submit}>Login</Button>
 	</Row>
 	: <Col>
 		<Col>
 			Logged: { props.User.get('model').get('email')}
 		</Col>
 		<Col>
 			Session: { props.User.get('session')}
 		</Col>
 		<Col>
 			<Button primary onClick={props._logout}>Logout {  props.User.get('model').get('email') }</Button>
 		</Col>
 	</Col>
); 

export default UserInfo
