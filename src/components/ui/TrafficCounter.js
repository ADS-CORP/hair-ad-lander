'use client';
import React, { useState, useEffect } from 'react';

export default function TrafficCounter() {
  // Use null initial state to prevent hydration mismatch
  const [count, setCount] = useState(null);
  const [trend, setTrend] = useState('up');

  useEffect(() => {
    // Set initial count after component mounts
    setCount(Math.floor(Math.random() * (30 - 10 + 1)) + 10);
    
    const getRandomChange = () => {
      const changes = [1, 1, 1, 2, 2, 3];
      return changes[Math.floor(Math.random() * changes.length)];
    };

    const getRandomInterval = () => {
      return Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
    };

    const updateCount = () => {
      setCount(prevCount => {
        if (!prevCount) return null;
        let newCount;
        if (trend === 'up') {
          newCount = prevCount + getRandomChange();
          if (newCount >= 78) {
            setTrend('down');
            return 78;
          }
        } else {
          newCount = prevCount - getRandomChange();
          if (newCount <= 2) {
            setTrend('up');
            return 2;
          }
        }
        return newCount;
      });

      setTimeout(updateCount, getRandomInterval());
    };

    const initialTimeout = setTimeout(updateCount, getRandomInterval());

    return () => clearTimeout(initialTimeout);
  }, [trend]);

  // Don't render anything until we have a count
  if (count === null) return null;

  return (
    <div className="w-full bg-blue-50 py-2">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <p className="text-sm text-gray-700">
          <span className="font-medium">{count}</span> people are viewing this page
        </p>
      </div>
    </div>
  );
}
