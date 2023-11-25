// import React from 'react'

// const Spinner = () => {
//   return (
//     <div className='animated-ping w-16 h-16 m-8 rounded-full bg-sky-600'></div>
//   )
// }

// export default Spinner


import React from 'react';
import ReactLoading from 'react-loading';
 
const Spinner = () => (
  <div className="flex justify-center items-center mx-5">
    <ReactLoading type='spin'color="#090a09" height={'10%'} width={'10%'} />
    </div>
);
 
export default Spinner;