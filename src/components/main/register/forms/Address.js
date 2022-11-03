import React from 'react'

import Form from './commonComponents/Form'
import { Input } from './commonComponents/Input'

export default function Address() {
  return (
    <Form type='address' title='寄送地址'>
      <div className='input__container'>
        <Input id='appellation' label='稱謂'>
          <div className='select__container'>
            <select>
              <option value='mr' selected>
                先生
              </option>
              <option value='ms'>女士</option>
              <option value='mx'>不明</option>
            </select>
          </div>
        </Input>
        <Input id='name' label='姓名'>
          <input type='text' placeholder='請輸入姓名' />
        </Input>
      </div>

      <div className='input__container'>
        <Input id='phone' label='電話'>
          <input type='tel' placeholder='請輸入行動電話' />
        </Input>
        <Input id='email' label='Email'>
          <input type='email' placeholder='請輸入電子郵件' />
        </Input>
      </div>

      <div className='input__container'>
        <Input id='city' label='縣市'>
          <div className='select__container'>
            <select required>
              <option value=''>請選擇縣市</option>
              <option value='KLU'>基隆市</option>
              <option value='TPH'>新北市</option>
              <option value='TPE'>臺北市</option>
              <option value='TYC'>桃園市</option>
              <option value='HSH'>新竹縣</option>
              <option value='HSC'>新竹市</option>
              <option value='MAC'>苗栗市</option>
              <option value='MAL'>苗栗縣</option>
              <option value='TXG'>臺中市</option>
              <option value='CWH'>彰化縣</option>
              <option value='CWS'>彰化市</option>
              <option value='NTC'>南投市</option>
              <option value='NTO'>南投縣</option>
              <option value='YLH'>雲林縣</option>
              <option value='CHY'>嘉義縣</option>
              <option value='CYI'>嘉義市</option>
              <option value='TNN'>臺南市</option>
              <option value='KHH'>高雄市</option>
              <option value='IUH'>屏東縣</option>
              <option value='PTS'>屏東市</option>
              <option value='ILN'>宜蘭縣</option>
              <option value='ILC'>宜蘭市</option>
              <option value='HWA'>花蓮縣</option>
              <option value='HWC'>花蓮市</option>
              <option value='TTC'>臺東市</option>
              <option value='TTT'>臺東縣</option>
              <option value='PEH'>澎湖縣</option>
              <option value='KMN'>金門縣</option>
              <option value='LNN'>連江縣</option>
            </select>
          </div>
        </Input>
        <Input id='address' label='地址'>
          <input type='text' placeholder='請輸入地址' />
        </Input>
      </div>
    </Form>
  )
}
