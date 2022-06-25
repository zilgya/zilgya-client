import React from "react";
import { PlusLg } from "react-bootstrap-icons";

export default function PictInput(props) {
  return (
    <label htmlFor="pict-input" className="sp-photo-select" onChange={(e) => props.inputPictHandler(e)}>
      <input type="file" name="pict-input" id="pict-input" className="sp-photo-select-input" multiple />
      <PlusLg className="sp-photo-plus" />
      <div className="sp-photo-select-info">Add more image</div>
    </label>
  );
}
