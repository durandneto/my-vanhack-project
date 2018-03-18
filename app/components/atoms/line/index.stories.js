import React from 'react'
import { storiesOf } from '@storybook/react'
import Line from '.'

storiesOf('Atoms/Line', module)
.add('Normal Case', () => (
  <Line />
)).add('Gradient Case', () => (
  <Line gradient/>
)) ;