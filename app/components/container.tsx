import React from 'react'
import { cn } from '../lib/utils'

const Container = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <div className={cn("mx-auto max-w-5xl w-full md:py-0 relative z-10")}>
      {children}
    </div>
  )
}

export default Container
