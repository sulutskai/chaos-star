import React, { useState } from 'react';
import ChaosStarAnimation from './components/ChaosStarAnimation';

const App: React.FC = () => {
  const [chaosCount, setChaosCount] = useState(0);

  const handleAnimationTrigger = () => {
    setChaosCount(prevCount => prevCount + 1);
  };

  return (
    <main 
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4 text-center"
      style={{
        background: 'radial-gradient(ellipse at center, #1a2049 0%, #05010d 70%)'
      }}
    >
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150vw] h-[80vh] bg-indigo-900/40 rounded-full blur-[150px] opacity-60"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        
        {/* ИЗМЕНЕНО: Добавлен цвет #E5FFFD */}
        <h1 
          className="text-5xl md:text-7xl font-unbounded font-bold text-white mb-4 tracking-wider uppercase animate-fade-in-down"
          style={{ color: '#E5FFFD' }}
        >
          CHAOS STAR
        </h1>

        <p className="text-indigo-300 text-lg mb-4 max-w-md animate-fade-in-up">
          An interactive Rive animation demonstrating real-time vector graphics on the web.
        </p>

        {/* ИЗМЕНЕНО: Увеличен размер, добавлен жирный шрифт и цвет */}
        <div 
          className="text-3xl font-bold animate-fade-in-up" 
          style={{ color: '#E5FFFD', animationDelay: '0.2s' }}
        >
          <p>Вы натыкали: {chaosCount}</p>
        </div>
        <p className="italic text-xs mt-2 text-white/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          *Скоро добавлю сколько ВСЕ натыкают, надеюсь
        </p>

        <div className="my-6">
          {/* Передаем функцию для обновления счетчика */}
          <ChaosStarAnimation onAnimationTrigger={handleAnimationTrigger} />
        </div>

        <div className="text-white/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Нажмите на <strong>ОЧКО</strong> хаоса, чтобы раскрутить вихрь.
        </div>

      </div>

       <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-up { animation: fade-in-up 0.8s 0.2s ease-out forwards; opacity: 0; }
      `}</style>
    </main>
  );
};

export default App;