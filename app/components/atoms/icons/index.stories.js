import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

storiesOf('Atoms/Icon', module)
.add('Generic icons', () => (
    <div>
        <Icon type="c2c"/>
        <br/>
        <Icon type="caret"/>
        <br/>
        <Icon type="chat"/>
        <br/>
        <Icon type="check"/>
    </div>
)).add('Featuring Icons', () => (
    <div>
        <Icon type="feat-antivirus"/>
        <br/>
        <Icon type="feat-certificate"/>
        <br/>
        <Icon type="feat-cloud"/>
        <br/>
        <Icon type="feat-modem"/>
        <br/>
        <Icon type="feat-wifi"/>
    </div>
)).add('Product Icons', () => (
    <div>
        <Icon type="product-bandalarga"/>
        <br/>
        <Icon type="product-fixo"/>
        <br/>
        <Icon type="product-pos"/>
        <br/>
        <Icon type="product-tv"/>
    </div>
));