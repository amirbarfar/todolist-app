// import React, { useState, useEffect } from "react";

// const MyComponent = (props: any) => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     if (props.title) {
//       setShow(true);

//       const timer = setTimeout(() => {
//         setShow(false);
//       }, 5000);

//       return () => clearTimeout(timer);
//     }
//   }, [props.title]);

//   return (
//     <div
//       className={`transition-all duration-500 ease-in-out transform ${
//         show ? "opacity-100 scale-100" : "opacity-0 scale-95"
//       } ${props.color} w-80 flex font-pelak justify-center items-center text-white h-24 fixed bottom-3 right-3 rounded-lg shadow-lg`}
//     >
//       <p>{props.title}</p>
//     </div>
//   );
// };

// export default MyComponent;