import React, { Component } from 'react'
import Glasses from './Glasses'

export default class DanhSachGlasses extends Component {
   renderGlassList =() =>{
   return this.props.data.map((element,idx)=> {
        return (
        <div key={idx} className="col-lg-2 col-xxl-4 my-3">
           <Glasses  getGlassDetail={this.props.getGlassDetail} element={element}/>
          </div>
        );
    })
   }
    render() {
    return (
      <div>
         {/* glasses Content*/}
         <section className="p-4">
          <div className="container glasses px-lg-5 ">
            {/* Page Features*/}
            <div className="row gx-lg-5 ">
             {this.renderGlassList()}
             </div>
          </div>
        </section>
      </div>
    )
  }
}
