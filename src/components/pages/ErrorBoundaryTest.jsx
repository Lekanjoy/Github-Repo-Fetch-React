import React, {useEffect, useState} from 'react'

const ErrorBoundaryTest = () => {
    const [error, setError] = useState('Error');
  
  return (
    <div>{setError(1)}</div>
  )
}

export default ErrorBoundaryTest