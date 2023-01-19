import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to='/add-election'>
        Register
      </Link>
      <Link to='/elections'>
        Vote
      </Link>
    </div>
  )
}

export default Home