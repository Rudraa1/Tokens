import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`bg-blue-gradient ${styles} test-primary font-poppins  outline-none font-medium text-[18px] rounded-[10px] py-4 px-6`}>
      Get Started
    </button>
  )
}

export default Button
