import { useSnakeGame } from '../hooks/use-snake-game';
import { StyledButton } from './StyledButton';

const GRID_SIZE = 20;
const CELL_SIZE = 20;

export const SnakeGame = () => {
  const { snake, food, score, isGameOver, isPaused, resetGame } = useSnakeGame(GRID_SIZE);

  const getStatus = () => {
    if (isGameOver) return 'Game Over!';
    if (isPaused) return 'Pause';
    return 'Score: ' + score;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-xl font-bold">{getStatus()}</div>
      <div 
        className="relative border-2 border-[#1a1a1a] bg-[#f0ead6]"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {/* Nourriture */}
        <div
          className="absolute bg-[#d1548e] rounded-full"
          style={{
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
          }}
        />
        
        {/* Serpent */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute bg-[#4ecdc4] border border-[#1a1a1a]"
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              borderRadius: index === 0 ? '4px' : '0',
            }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2 items-center">
        <p className="text-sm">
          Utilisez les flèches pour diriger le serpent
        </p>
        <p className="text-sm">
          Espace pour mettre en pause
        </p>
        {isGameOver && (
          <StyledButton onClick={resetGame}>
            Nouvelle partie
          </StyledButton>
        )}
      </div>
    </div>
  );
};
