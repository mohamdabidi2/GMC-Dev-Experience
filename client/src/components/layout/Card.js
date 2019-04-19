import React from "react";
import { MDBProgress } from 'mdbreact';

const ProgressBarPage = () => {
  return (
<div>
      <MDBProgress value={0} className="my-2" />
      <MDBProgress value={25} className="my-2" />
      <MDBProgress value={50} className="my-2" />
      <MDBProgress value={75} className="my-2" />
      <MDBProgress value={100} className="my-2" />
   </div>
  );
}

export default ProgressBarPage;