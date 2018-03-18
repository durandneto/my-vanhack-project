import React from 'react'
import { storiesOf } from '@storybook/react'

import TitleDescription, { IconTitleDescriptionRow } from '.'
import oiImg from './../../../assets/images/oi-logo-purple-degrade-1.svg'
import oiImg2 from './../../../assets/images/feat01.png'
import oiImg3 from './../../../assets/images/icon-bl-section.png'

let arrImg = []

for (let i = 0 ; i < 5; i++) {
	arrImg.push(oiImg)
}

storiesOf('Molecules/IconTitleDescription', module)
.add('Normal Case', () => (

	<TitleDescription
	img = {{
		icon: true
		, src: oiImg
	}}
	Title2={['Titulo H2','Line two']}
	Description2={'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'}
	 />))

.add('Centered Case', () => (<TitleDescription
img = {{
	icon: true
	, src: arrImg
}}


 alignCenter
 Title2={'Titulo H2 Centered'}
 Description2={'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'} />))
.add('Right Case', () => (<TitleDescription
img = {{
	icon: true
	, src: oiImg
}}


alignRight Title2={'Titulo H2 Right'} Description2={'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'} />))
.add('Landing Case', () => (<TitleDescription
size={5}
isUpperCase
alignCenter
img = {{
	type: 'feat-modem'
}}

Title2={'Modem Grátis'}
Description2={'Conecte seus aparelhos dentro de casa'} />))
.add('Landing Case 2', () => (<TitleDescription  size={2}


img = {{
	type: 'product-bandalarga'
}}
alignCenter Title2={['Tem muito mais com','a Banda Larga da Oi']} Description2={'Ao assinar a nossa internet, você também leva:'} />));