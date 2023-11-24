import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list=["All","Gaming","Songs","Live","Soccer","Cricket","News","Cooking","Valentaines","Gifts",
  "Mixes","StoryTelling","Music","Dance","Animation"];
  return (
    <div className='flex'>
    {
      list.map(button=><Button name={button} />)
    }

      </div>
  )
}

export default ButtonList