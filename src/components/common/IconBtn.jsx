import React from 'react'

const IconBtn = ({
    text,
    onClick,
    children,
    disabled,
    outline=false,
    customClasses,
    type,
}) => {
  return (
    <button
    disabled={disabled}
    onClick={onClick}
    type={type}
    style={{
        boxShadow: "-0.5px -1.5px 0px 0px rgba(0, 0, 0, 0.12) inset"
    }}
    className={`py-2 px-6 bg-yellow-50 text-richblack-900 rounded-lg font-semibold flex items-center gap-1 ${customClasses }`}
    >
        {
            children ? (
                <>
                    <span>{text}</span>
                    {children}
                </>
            ) : (
                text
            )
        }
        
    </button>
  )
}

export default IconBtn