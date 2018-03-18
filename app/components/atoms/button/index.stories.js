import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'
import { ButtonLink } from '.'

import { Col, Row } from './../container'

storiesOf('Atoms/Button', module)
.add('Normal Case', () => (<Button className='Tste' >Normal</Button>))
.add('primary Case', () => (<Button primary>primary</Button>)) 
.add('info Case', () => (<Button info>info</Button>)) 
.add('All Cases', () => (
	<div>
 		<Button>Normal</Button>
 		<Button primary full>primary</Button>
 		<ButtonLink primary >ButtonLink</ButtonLink>
 	</div>
))
.add('Col Cases', () => (
	<Col>
 		<Button>Normal</Button>
 		<Button primary full>primary</Button>
 	</Col>
))
.add('Row Cases', () => (
	<Row>
 		<Button>Normal</Button>
 		<Button primary full>primary</Button>
 	</Row>
)) ; 