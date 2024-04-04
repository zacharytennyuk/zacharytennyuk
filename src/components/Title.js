// import React from 'react';

// const Title = ({ children }) => {
//     return (
//     <div
//       style={{
//         backgroundImage: `url(${process.env.PUBLIC_URL}/gold.jpg)`, // Corrected path
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         borderRadius: 20,
//         width: 72,
//         padding: 2
//       }}>
//       {children}
//     </div>
//   );
// };

// export default Title;

import React from 'react';

const Title = ({ children }) => {

    return (
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '40px',
        padding: '1.5rem',
        width: '7rem',
        height: '3rem',
        margin: '0 auto',
        fontSize: '1.125rem',
        textAlign: 'center',
        backgroundImage: `url(${process.env.PUBLIC_URL}/gold.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black',
        boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.6)',
      }}>
        {children}
      </div>
    );
  };

export default Title;