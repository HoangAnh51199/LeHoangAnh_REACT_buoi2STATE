import React, { Component } from 'react'

import Header from './Header'
import Banner from './Banner'


import Body from './Body'

export default class BaiTapLayout2 extends Component {
 

  render() {
  
    return (
    
      <div >
        <div className='background_overplay'>
        <Header/>
       
        <Body/>
      
       </div>
       </div>  

      
    )
  }
}
