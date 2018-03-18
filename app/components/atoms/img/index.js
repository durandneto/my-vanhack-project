import React, { Component } from 'react'
import styled from 'styled-components'

export default styled.img`
${ props => props.thumb && 'width:120px; height:120px;'}
${ props => props.icon && 'width:22px; height:22px;'}
${ props => props.margin && `margin: ${props.margin}em;`}
`