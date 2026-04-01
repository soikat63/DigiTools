import React from 'react'

const GradientButton = ({ButtonText}) => {
  return (
    <button className="bg-primary bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#9514FA] hover:to-[#4F39F6]  text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg shadow-purple-200 text-base font-bold cursor-pointer">
              {ButtonText}
    </button>
  )
}

export default GradientButton