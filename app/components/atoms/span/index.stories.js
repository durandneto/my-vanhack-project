import React from 'react'
import { storiesOf } from '@storybook/react'
import Span from '.'

storiesOf('Atoms/Span', module)
.add('Normal Case', () => (
  <div>
        <Span> Hackathon is Normal size 1</Span>
        <br />
        <Span size={2}> Hackathon is Normal size 2</Span>
        <br />
        <Span size={3}> Hackathon is Normal size 3</Span>
        <br />
        <Span size={2}> Hackathon is Normal size 3</Span>
        <br />
        <Span size={1}> Hackathon is Normal size 3</Span>
        <br />
        <Span size={-1}> Hackathon is Normal size 3</Span>
        <br />
        <Span size={-2}> Hackathon is Normal size 3</Span>
    </div>
))
.add('Upper Case', () => (
    <div>
        <Span isUpperCase  > Hackathon is UpperCase size 1</Span>
        <br />
        <Span isUpperCase  size={2}> Hackathon is UpperCase size 2</Span>
        <br />
        <Span isUpperCase  size={3}> Hackathon is UpperCase size 3</Span>
    </div>
))
.add('Lower Case', () => (
    <div>
        <Span isLowerCase  > Hackathon is LowerCase size 1</Span>
        <br />
        <Span isLowerCase  size={4} > Hackathon is LowerCase size 4=1</Span>
        <br />
        <Span isLowerCase  size={2}> Hackathon is LowerCase size 2</Span>
        <br />
        <Span isLowerCase  size={3}> Hackathon is LowerCase size 3</Span>
    </div>
))
.add('Font scale Size 1', () => (
  <Span> Hackathon Size 1 </Span>
))
.add('Font scale Size 2', () => (
  <Span size={2} > Hackathon Size 2</Span>
))
.add('Font scale Size 3', () => (
  <Span size={3}  > Hackathon Size 3</Span>
)) ;