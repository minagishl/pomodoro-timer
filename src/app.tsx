import { useState, useEffect } from 'preact/hooks';

type TimerMode = 'work' | 'break';

export function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<TimerMode>('work');

  const workDuration = 25 * 60;
  const breakDuration = 5 * 60;

  useEffect(() => {
    let interval: number;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime: number) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (mode === 'work') {
        setMode('break');
        setTimeLeft(breakDuration);
      } else {
        setMode('work');
        setTimeLeft(workDuration);
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode, workDuration, breakDuration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(mode === 'work' ? workDuration : breakDuration);
  };

  const toggleMode = () => {
    const newMode = mode === 'work' ? 'break' : 'work';
    setMode(newMode);
    setTimeLeft(newMode === 'work' ? workDuration : breakDuration);
    setIsRunning(false);
  };

  return (
    <div class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div class="bg-white border border-gray-200 rounded-2xl p-12 w-full max-w-lg">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-8">Pomodoro Timer</h1>

          <div class="mb-8">
            <div
              class={`inline-block px-6 py-3 rounded-lg text-base font-semibold border-2 ${
                mode === 'work'
                  ? 'border-red-200 bg-red-50 text-red-700'
                  : 'border-green-200 bg-green-50 text-green-700'
              }`}
            >
              {mode === 'work' ? 'Work Time' : 'Break Time'}
            </div>
          </div>

          <div class="mb-12">
            <div class="text-7xl font-mono font-bold text-gray-900 mb-6 tracking-wide">
              {formatTime(timeLeft)}
            </div>

            <div class="w-full bg-gray-100 rounded-lg h-4 border border-gray-200">
              <div
                class={`h-full rounded-lg transition-all duration-1000 ${
                  mode === 'work' ? 'bg-red-500' : 'bg-green-500'
                }`}
                style={{
                  width: `${
                    (((mode === 'work' ? workDuration : breakDuration) -
                      timeLeft) /
                      (mode === 'work' ? workDuration : breakDuration)) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>

          <div class="flex gap-4 justify-center mb-8">
            {!isRunning ? (
              <button
                onClick={handleStart}
                class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-green-600 transition-colors duration-200"
              >
                Start
              </button>
            ) : (
              <button
                onClick={handlePause}
                class="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-yellow-600 transition-colors duration-200"
              >
                Pause
              </button>
            )}

            <button
              onClick={handleReset}
              class="bg-gray-500 hover:bg-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-600 transition-colors duration-200"
            >
              Reset
            </button>
          </div>

          <button
            onClick={toggleMode}
            class="text-blue-600 hover:text-blue-800 font-semibold text-lg border-2 border-blue-200 hover:border-blue-300 px-6 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
          >
            {mode === 'work' ? 'Switch to Break' : 'Switch to Work'}
          </button>
        </div>
      </div>
    </div>
  );
}
