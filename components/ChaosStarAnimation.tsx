import React, { useEffect } from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

// Возвращаем интерфейс для пропсов
interface ChaosStarAnimationProps {
  onAnimationTrigger: () => void;
}

const ChaosStarAnimation: React.FC<ChaosStarAnimationProps> = ({ onAnimationTrigger }) => {
  const { RiveComponent, rive } = useRive({
    src: './chaos.riv',
    stateMachines: 'State Machine 1', 
    autoplay: true,
  });

  const interactionTrigger = useStateMachineInput(rive, 'State Machine 1', 'tap');

  useEffect(() => {
    // Эта функция вызывает и анимацию, и обновление счетчика
    const triggerAnimation = () => {
      if (interactionTrigger) {
        interactionTrigger.fire();
        onAnimationTrigger(); // <-- Ключевая строчка для работы счетчика
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        triggerAnimation();
      }
    };
    
    const handlePointerDown = () => {
      triggerAnimation();
    }

    window.addEventListener('keydown', handleKeyDown);
    document.documentElement.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.documentElement.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [interactionTrigger, onAnimationTrigger]); // onAnimationTrigger снова в зависимостях

  return (
    <div 
      className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] transition-all duration-500 ease-in-out cursor-pointer [filter:drop-shadow(0_0_8px_rgba(255,180,50,0.6))] hover:[filter:drop-shadow(0_0_16px_rgba(255,180,50,0.8))] animate-fade-in-down"
      style={{ animationDelay: '0.4s' }}
    >
      <RiveComponent />
    </div>
  );
};

export default ChaosStarAnimation;