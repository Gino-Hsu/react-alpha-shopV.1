import React from 'react'
import Form from './commonComponents/Form'
import { Input } from './commonComponents/Input'

export default function CreditCard() {
  return (
    <Form type='address' title='寄送地址'>
      <div className='input__container'>
        <Input id='card__name' label='持卡人姓名'>
          <input type='text' placeholder='John Doe' />
        </Input>
      </div>
      <div className='input__container'>
        <Input id='card__number' label='卡號'>
          <input type='text' placeholder='1111 2222 3333 4444' />
        </Input>
      </div>
      <div className='input__container'>
        <Input id='card__date' label='有效期限'>
          <input type='text' placeholder='MM/YY' />
        </Input>
        <Input id='card__code' label='CVC / CCV'>
          <input type='text' placeholder='123' />
        </Input>
      </div>
    </Form>
  )
}
