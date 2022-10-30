import React, {useEffect, useState} from 'react'

const ErrorBoundaryTest = () => {
    const [error, setError] = useState('Error');
  
  return (
    <div>{setError('Will throw error')}</div>
  )
}

export default ErrorBoundaryTest