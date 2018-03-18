import React from 'react'
import { storiesOf } from '@storybook/react'

import TitleImg from '.'
import oiImg from './../../../assets/images/oi-logo-purple-degrade-1.svg'

let arrImg = []

for (let i = 0 ; i < 3; i++) {
	arrImg.push(oiImg)
}

storiesOf('Molecules/TitleImg', module)
.add('Normal Case', () => (<TitleImg img={ oiImg } text={'Titulo H2 Right'} />))
.add('Normal Array Img', () => (<TitleImg  img={ arrImg } text={'Titulo H2 Right'} />))
.add('Reverse Array Case', () => (<TitleImg reverse img={ arrImg } text={'Titulo H2 Right'} />))
.add('Reverse Case', () => (<TitleImg reverse img={ oiImg } text={'Titulo H2 Right'} />));