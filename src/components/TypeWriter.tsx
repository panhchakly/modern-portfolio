import { useEffect, useState } from 'react';

interface TypeWriterProps {
  text?: string;
  texts?: string[];
  speed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

export default function TypeWriter({ 
  text, 
  texts, 
  speed = 50, 
  delayBetweenTexts = 2000,
  className = '' 
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textArray = texts && texts.length > 0 ? texts : (text ? [text] : []);
  const currentText = textArray[textIndex] || '';

  useEffect(() => {
    if (textArray.length === 0) return;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentIndex < currentText.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
    } else if (!isDeleting && currentIndex === currentText.length && textArray.length > 1) {
      // Finished typing, wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
        setCurrentIndex(currentIndex - 1);
      }, speed / 2);
    } else if (isDeleting && currentIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % textArray.length);
      setCurrentIndex(0);
      setDisplayText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isDeleting, currentText, speed, delayBetweenTexts, textArray]);

  return (
    <p className={className}>
      {displayText}
      {(isDeleting || currentIndex < currentText.length) && <span className="animate-pulse">|</span>}
    </p>
  );
}
