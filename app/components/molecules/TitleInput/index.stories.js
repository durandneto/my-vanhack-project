import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputColumn, InputRow } from '.'

storiesOf('Molecules/TitleInput', module)
.add('Normal Case', () => (<InputRow 
	Text={'Titulo H2 Right'}  
	/>))
.add('Row Case', () => (<InputColumn
	Text={'Titulo H2 Right'}  
	/>));