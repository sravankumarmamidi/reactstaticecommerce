

import React from 'react'

const WomensCollections = (props) => {

    const {title, image1, image2, image3, image4, image5, image6} = props.womensFashion

  return (
       <div className= "banner-section">
      <div className="gents-banner">
        <img className= "gents-img"  alt = "WomensFashion" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkfu4_FcubfLlLvMKri9Axzj26EnCkokOdA&usqp=CAU" />
      </div>
 
      <h1 className = "womens-title">{title}</h1>
      <div className = "images-bg">
      <img src = {image1} alt = {title} />
      <img src = {image2} alt = {title} />
      <img src = {image3} alt = {title} />
      <img src = {image4} alt = {title} />
      <img src = {image5} alt = {title} />
      <img src = {image6} alt = {title} />

</div>
    </div>
  )
}

export default WomensCollections

