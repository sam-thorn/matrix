import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='row bg-image'>
      <Link to='/Bustblocker' className='col-left' />
      <Link to='/Matrix' className='col-right' />
    </div>
  );
}

export default Home;
