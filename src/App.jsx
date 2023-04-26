import FollowCard from './components/FollowCard.jsx'
import './App.css'
import { BoxHeader } from './components/BoxHeader.jsx'
import { ShowMore } from './components/ShowMore.jsx'

// https://unavatar.io/netflix
// https://unavatar.io/midudev

function App () {
  return (
    <div className='App'>
      <aside className='tw-followersBox'>
        <BoxHeader />

        <div>
          <FollowCard
            isFollowing
            userName='midudev'
            name='Miguel Angel Duran'
            initialFollowing
          />

          <FollowCard
            isFollowing={false}
            userName='iamcardib'
            name='Cardi B'
          />

          <FollowCard
            isFollowing
            userName='elonMusk'
            name='Elon Musk'
          />
        </div>

        <ShowMore />
      </aside>
    </div>
  )
}

export default App
