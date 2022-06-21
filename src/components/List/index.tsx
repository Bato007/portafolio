import React, {
  useRef, useEffect, useState,
} from 'react'
import './list.scss'

interface props {
  data: any[],
  isInfinite?: boolean,
  render: (item: any, index: number, a: any) => any
}

const List = (
  { data, render, isInfinite = false }:
  props,
): JSX.Element => {
  const [carousel, setCarousel] = useState([])
  const [counter, setCouter] = useState(0)
  const listRef = useRef(undefined)

  const a = () => {
    setCouter((old) => old + 1)
    console.log('carousel', carousel)
    const tempCards = [...carousel]
    tempCards.push(tempCards.shift())
    setCarousel([...tempCards])
  }

  useEffect(() => {
    console.log('useEffect', carousel)
  }, [carousel])

  // Fills the carousel data
  useEffect(() => {
    const tempCards = data.map((item: any, index: number) => (
      render(index, index, a)
    ))
    console.log('temp -> ', tempCards)

    if (isInfinite) {
      tempCards.unshift(tempCards.pop())
      tempCards.unshift(tempCards.pop())
    }
    setCarousel([...tempCards])

    // return () => {
    //   setCarousel([])
    // }
  }, [counter])

  return (
    <div className='list' ref={listRef}>
      {
        carousel
      }
    </div>
  )
}

export default List
