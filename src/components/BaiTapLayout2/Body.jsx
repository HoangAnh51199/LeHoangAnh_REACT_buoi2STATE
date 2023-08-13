import React, { Component } from 'react'
import data from "../../data/dataGlasses.json"
import Banner from './Banner'
import Items from './Items'

export default class Body extends Component {
  // renderGlassesList = () => {
  //   const content = data.map((element, idx)=> {
      
  //   })
  //     };
  render() {
    return (
      <div  >
        {/* model */}
     <Banner/>
      {/* Page Content*/}
      <section className="p-4">
        <div className="container glasses px-lg-5">
          {/* Page Features*/}
          <div className="row gx-lg-5 p-2">
            <div className="col-lg-2 col-xxl-4 mb-5">
             <Items/>
            </div>
            <div className="col-lg-2 col-xxl-4 mb-5">
            <Items/>
            </div>
            <div className="col-lg-2 col-xxl-4 mb-5">
            <Items/>
            </div>
            <div className="col-lg-2 col-xxl-4 mb-5">
            <Items/>
            </div>
            <div className="col-lg-2 col-xxl-4 mb-5">
            <Items/>
            </div>
            <div className="col-lg-2 col-xxl-4 mb-5">
            <Items/>
            </div>
            <div className="col-lg-2 col-xxl-4 mb-5">
            <Items/>
            </div>
            <div className="col-lg-2 col-xxl-4 mb-5">
            <Items/>
            </div>
            
    
           
          </div>
        </div>
      </section>
     </div>
    
      
 

 
    )
  }
}
