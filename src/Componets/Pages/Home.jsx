import React from 'react'
import Main from '../Ui/Mainsection/Main'
import Shownft from '../Ui/ShowNft/Shownft'

const Home = (props) => {
  const State = props.state
  return (
    <div>
      <Main />
      <Shownft state={State} />
    </div>
  )
}

export default Home