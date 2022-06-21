import React, { RefObject } from 'react'
import List from './components/List'
import Card from './components/Card'
import './App.scss'

const indexes = [1, 2, 3, 4, 5, 6, 7]

const App = () => {
  const moveCard = (cardRef: RefObject<HTMLDivElement>) => {
    cardRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }

  const renderCards = (item: any, index: number, a: any) => (
    <Card
      key={item}
      index={index}
      onPress={a}
      onKey={moveCard}
    />
  )

  return (
    <div>
      <List
        data={indexes}
        render={renderCards}
      />
    </div>
  )
}

export default App
