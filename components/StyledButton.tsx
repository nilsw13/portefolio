import { ReactNode } from 'react'
import { Button } from "@/components/ui/button"

interface StyledButtonProps {
  children: ReactNode
  type?: "button" | "submit" | "reset"
  className?: string
  onClick?: () => void
}

export const StyledButton = ({ children, type = "button", className = "", ...props }: StyledButtonProps) => {
  return (
    <Button
      type={type}
      className={`bg-[#4ecdc4] text-[#f0ead6] hover:bg-[#45b7b0] border-[#1a1a1a] border-2 shadow-[2px_2px_0px_#d1548e] hover:shadow-[4px_4px_0px_#d1548e] hover:-translate-y-0.5 transition-all rounded-none ${className}`}
      {...props}
    >
      {children}
    </Button>
  )
}