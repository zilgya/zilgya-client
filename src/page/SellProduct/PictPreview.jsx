import React from 'react'

export default function PictPreview(props) {
  return (
    <div className="sp-photo-preview"
    onClick={()=> props.deletePictHandler(props.index)}>
      <img src={props.pictPrev[props.index]} alt="preview" className="sp-photo-preview-img" />
    </div>
  )
}
