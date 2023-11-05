import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import CompList from '../features/Competition/components/CompList';

const CompListPage = () => {
  return (
    <div>
        <Navbar>
            <CompList></CompList>
        </Navbar>
    </div>
  )
}

export default CompListPage