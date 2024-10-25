
// src/components/snake/SnakeGameDialog.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { StyledButton } from './StyledButton'
import { SnakeGame } from './SnakeGame'

export const SnakeGameDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <StyledButton className="fixed bottom-4 right-4">
          Jouer au Snake
        </StyledButton>
      </DialogTrigger>
      <DialogContent className="bg-[#f0ead6] border-[#1a1a1a] border-2 shadow-[4px_4px_0px_#d1548e] rounded-none">
        <DialogHeader>
          <DialogTitle>Jeu du Snake</DialogTitle>
        </DialogHeader>
        <SnakeGame />
      </DialogContent>
    </Dialog>
  )
}