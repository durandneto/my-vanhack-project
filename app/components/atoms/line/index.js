import React, { Component } from 'react'
import styled from 'styled-components'

export default styled.hr`
  border: 0;
  height: 1px;
  width: 100%;

  ${ props => props.margin && 'margin: 1em 0;'}
  ${ props => props.noMargin && 'margin: 0;'}

  ${ props => props.gradient
  	? `background: linear-gradient(to right, #cd266f 0%, #fea20c 100%);`
  	: `background-image: -webkit-linear-gradient(left, #f0f0f0, #909090, #f0f0f0);
  		background-image: -moz-linear-gradient(left, #f0f0f0, #909090, #f0f0f0);
	  	background-image: -ms-linear-gradient(left, #f0f0f0, #909090, #f0f0f0);
	  	background-image: -o-linear-gradient(left, #f0f0f0, #909090, #f0f0f0); `
  }
`