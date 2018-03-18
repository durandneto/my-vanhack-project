import React from 'react'
import styled from 'styled-components'

import Title from  './../../atoms/title'
import Input from  './../../atoms/input'
import { Row, Col } from  './../../atoms/container'
 

const InputColumn = (props) => (
 <Col>
   <Title>{ props.Text }</Title>
   <Input placeholder={props.Text} />
 </Col>
);

const InputRow = (props) => (
 <Row>
   <Title>{ props.Text }</Title>
   <Input placeholder={props.Text} />
 </Row>
);

export { InputColumn, InputRow };
