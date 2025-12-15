import React, { useState } from 'react'

const useSwitch = (initialValue = false) => {

  const [isOn, setIsOn] = useState(initialValue)

  const toggle = () => {
    if (!initialValue) {
      setIsOn(true)
    } else {
      setIsOn(initialValue)
    }
    console.log(isOn)
  }

  return [isOn, toggle]
}

export default useSwitch
