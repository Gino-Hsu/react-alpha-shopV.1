import React from 'react'

import Form from './commonComponents/Form'
import { InputRadio } from './commonComponents/Input'

import './Ship.css'

export default function Ship() {
  return (
    <Form type='shipping' title='願送方式'>
      <div className='input-container'>
        <InputRadio
          radioId='1'
          price='0'
          name='標準運送'
          period='約 3~7 個工作天'
        />
      </div>
      <div className='input-container'>
        <InputRadio
          radioId='2'
          price='500'
          name='DHL 貨運'
          period='48 小時內送達'
        />
      </div>
    </Form>
  )
}
