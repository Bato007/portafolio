/* eslint-disable no-unused-vars */
import React, { useRef, RefObject } from 'react'
import './card.scss'

const Card = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { index, onPress, onKey } :
  {
    index: number,
    onPress: (cardRef: RefObject<HTMLDivElement>) => void,
    onKey: (cardRef: RefObject<HTMLDivElement>) => void,
  },
)
  : JSX.Element => {
  const cardRef = useRef<HTMLDivElement>(undefined)

  return (
    <div
      ref={cardRef}
      className='card'
      role='button'
      tabIndex={0}
      onClick={() => onPress(cardRef)}
      onKeyDown={(e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') { return }
        onPress(cardRef)
      }}
    >
      <div className='box'>
        <div>
          {index}
        </div>
      </div>
    </div>
  )
}

// const MemoCard = React.memo(Card)

export default Card
