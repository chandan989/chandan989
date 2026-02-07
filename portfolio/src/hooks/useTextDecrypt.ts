import { useState, useEffect, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>[]{}';

export function useTextDecrypt(finalText: string, duration: number = 1000, delay: number = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const decrypt = useCallback(() => {
    let iteration = 0;
    const totalIterations = finalText.length * 3;
    
    const interval = setInterval(() => {
      setDisplayText(
        finalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) {
              return finalText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= totalIterations) {
        clearInterval(interval);
        setDisplayText(finalText);
        setIsComplete(true);
      }

      iteration += 1;
    }, duration / totalIterations);

    return () => clearInterval(interval);
  }, [finalText, duration]);

  useEffect(() => {
    const timeoutId = setTimeout(decrypt, delay);
    return () => clearTimeout(timeoutId);
  }, [decrypt, delay]);

  return { displayText, isComplete };
}

export default useTextDecrypt;
