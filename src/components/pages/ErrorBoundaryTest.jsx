import React, {useEffect, useState} from 'react'
import { Helmet } from 'react-helmet-async';

const ErrorBoundaryTest = () => {
    const [error, setError] = useState('Error');
  
  return (
    <div>
      <Helmet>
        <title>Error Boundary Test Page</title>
        <meta name="description" content="Error Boundary Test Page" />
      </Helmet>
      {setError("Will throw error")}
    </div>
  );
}

export default ErrorBoundaryTest