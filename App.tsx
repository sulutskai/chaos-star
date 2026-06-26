import React, { useState, useEffect } from 'react';
import ChaosStarAnimation from './components/ChaosStarAnimation';

const App: React.FC = () => {
  const [chaosCount, setChaosCount] = useState(0);
  const [isVideoMode, setIsVideoMode] = useState(false);

  // Проверяем URL при загрузке: если там есть ?video=1, включаем режим для записи
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('video')) {
      setIsVideoMode(true);
    }
  }, []);

  const handleAnimationTrigger = () => {
    setChaosCount(prevCount => prevCount + 1);
  };

  return (
    <main 
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4 text-center"
      style={{
        background: '#05010d' // Твой чистый фон
      }}
    >
      {/* Слой с блюром (скрывается в режиме видео) */}
      {!isVideoMode && (
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150vw] h-[80vh] bg-indigo-900/40 rounded-full blur-[150px] opacity-60"></div>
      )}
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        
        {/* Заголовок (закомментирован логикой или просто скрыт) */}
        {!isVideoMode && (
          <h1 
            className="text-5xl md:text-7xl font-unbounded font-bold text-white mb-4 tracking-wider uppercase animate-fade-in-down"
            style={{ color: '#E5FFFD' }}
          >
            CHAOS STAR
          </h1>
        )}

        {/* Описание (закомментировано логикой) */}
        {!isVideoMode && (
          <p className="text-indigo-300 text-lg mb-4 max-w-md animate-fade-in-up">
            An interactive Rive animation demonstrating real-time vector graphics on the web.
          </p>
        )}

        {/* Счетчик (закомментировано логикой) */}
        {!isVideoMode && (
          <div className="text-3xl font-bold animate-fade-in-up" style={{ color: '#E5FFFD', animationDelay: '0.2s' }}>
            <p>Вы натыкали: {chaosCount}</p>
          </div>
        )}

        {/* Доп. текст (закомментировано логикой) */}
        {!isVideoMode && (
          <p className="italic text-xs mt-2 text-white/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            *Скоро добавлю сколько ВСЕ натыкают, надеюсь
          </p>
        )}

        {/* АНИМАЦИЯ - Оставляем всегда по центру */}
        <div className={isVideoMode ? "my-0" : "my-6"}>
          <ChaosStarAnimation onAnimationTrigger={handleAnimationTrigger} />
        </div>

        {/* Инструкция снизу (закомментировано логикой) */}
        {!isVideoMode && (
          <div className="text-white/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Нажмите на <strong>ОЧКО</strong> хаоса, чтобы раскрутить вихрь.
          </div>
        )}

      </div>

      {/* Анимации появления текста (скрывать не обязательно, но для чистоты) */}
      {!isVideoMode && (
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
      )}
    </main>
  );
};

export default App;
