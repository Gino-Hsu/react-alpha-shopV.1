import React from 'react'
import Form from './commonComponents/Form'
import { Input } from './commonComponents/Input'

import './CreditCard.css'

export default function CreditCard() {
  return (
    <Form type='address' title='寄送地址'>
      <div className='input-container'>
        <Input inputClass='card__name' label='持卡人姓名'>
          <input type='text' placeholder='John Doe' />
        </Input>
      </div>
      <div className='input-container'>
        <Input inputClass='card__number' label='卡號'>
          <input type='text' placeholder='1111 2222 3333 4444' />
        </Input>
      </div>
      <div className='input-container'>
        <Input inputClass='card__date' label='有效期限'>
          <input type='text' placeholder='MM/YY' />
        </Input>
        <Input inputClass='card__code' label='CVC / CCV'>
          <input type='text' placeholder='123' />
        </Input>
      </div>
    </Form>
  )
}
