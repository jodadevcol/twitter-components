import { useState } from 'react'
import './FollowCard.css'

function FollowCard ({ initialFollowing, userName, name }) {
  const [isFollowing, setIsFollowing] = useState(initialFollowing)
  const [isHover, setIsHover] = useState(false)

  const textHover = isFollowing && isHover ? 'Unfollow' : 'Following'
  const text = isFollowing ? textHover : 'Follow'
  const btnClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = (event) => {
    setIsFollowing(!isFollowing)
    const currentBtn = event.target
    const minWidth = currentBtn && currentBtn.offsetWidth

    currentBtn.style.minWidth = `${minWidth}px`
  }
  const handleIn = () => setIsHover(true)
  const handleOut = () => setIsHover(false)

  return (
    <article className='tw-followCard'>
      <section className='tw-followCard-overlay'>
        <picture className='tw-followCard-avatar'>
          <img src={`https://unavatar.io/twitter/${userName}`} alt='' />
        </picture>

        <aside className='tw-followCard-info'>
          <div className='tw-followCard-info--left'>
            <strong className='tw-followCard-name'>{name}</strong>
            <span className='tw-followCard-username'>@{userName}</span>
          </div>

          <div className='tw-followCard-info--right'>
            <button
              className={btnClassName}
              onClick={handleClick}
              onMouseEnter={handleIn}
              onMouseLeave={handleOut}
            >
              <span className='tw-followCard-button--label'>{text}</span>
            </button>
          </div>
        </aside>
      </section>
    </article>
  )
}

export default FollowCard
