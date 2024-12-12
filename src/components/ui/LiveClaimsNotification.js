'use client';
import React, { useState, useEffect } from 'react';

// Complete list of US states for validation
const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

// States to use for random selection (can be a subset of popular states)
const RANDOM_STATES = [
  'New York', 'Texas', 'Florida', 'Illinois', 'Washington', 
  'Colorado', 'Arizona', 'Oregon', 'Massachusetts', 'Virginia',
  'California', 'Nevada', 'Georgia', 'Michigan', 'Pennsylvania'
];

const getRandomState = () => RANDOM_STATES[Math.floor(Math.random() * RANDOM_STATES.length)];

const generateClaim = (minutes, userState) => {
  const firstNames = ['Morgan', 'Tina', 'Jane', 'Robert', 'Amy', 'David', 'Sarah', 'Michael', 'Emma', 'James', 'Laura', 'Chris', 'Lisa', 'Kevin', 'Rachel'];
  const lastInitials = ['F', 'P', 'L', 'S', 'W', 'M', 'R', 'T', 'B', 'H', 'C', 'D', 'G', 'K', 'N'];
  
  const randomName = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastInitials[Math.floor(Math.random() * lastInitials.length)]}.`; 
  const state = userState || getRandomState();
  
  return { name: randomName, state, minutes };
};

export default function LiveClaimsNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const apiKey = 'e4c3b8cc8d6113790fc353fbd0624476';
    fetch(`https://api.ipapi.com/api/check?access_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        console.log('Location data:', data);
        // Check if region_name is a valid US state, if not use random state
        const userState = US_STATES.includes(data.region_name) ? data.region_name : getRandomState();
        console.log('User state:', userState);
        
        const notificationsData = [
          { ...generateClaim(0, userState), showAt: 5000 },
          { ...generateClaim(0), showAt: 15000 },
          { ...generateClaim(1, userState), showAt: 30000 },
          { ...generateClaim(1), showAt: 60000 },
          { ...generateClaim(2), showAt: 120000 }
        ];
        
        setNotifications(notificationsData);
      })
      .catch(error => {
        console.log('Location fetch error:', error);
        const randomState = getRandomState();
        const notificationsData = [
          { ...generateClaim(0, randomState), showAt: 5000 },
          { ...generateClaim(0), showAt: 15000 },
          { ...generateClaim(1, randomState), showAt: 30000 },
          { ...generateClaim(1), showAt: 60000 },
          { ...generateClaim(2), showAt: 120000 }
        ];
        
        setNotifications(notificationsData);
      });
  }, []);

  useEffect(() => {
    if (notifications.length === 0) return;

    notifications.forEach((notification, index) => {
      const showTimeout = setTimeout(() => {
        setCurrentIndex(index);
        setIsVisible(true);

        setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      }, notification.showAt);
    });

    return () => {
      for (let i = 0; i <= notifications.length * 2; i++) {
        clearTimeout(i);
      }
    };
  }, [notifications]);

  if (notifications.length === 0) return null;

  const currentNotification = notifications[currentIndex];

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs md:max-w-sm">
      <div 
        className={`
          bg-white rounded-lg shadow-lg p-3 
          transform transition-all duration-500 ease-in-out
          ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          flex items-center space-x-3 border border-gray-200
        `}
      >
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">
              {currentNotification.name.charAt(0)}
            </span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-800">
            <span className="font-semibold">{currentNotification.name}</span> from{' '}
            <span className="font-semibold">{currentNotification.state}</span>{' '}
            filed a claim
          </p>
          <p className="text-xs text-gray-500">
            {currentNotification.minutes === 0 ? 'just now' : 
             currentNotification.minutes === 1 ? '1 minute ago' : 
             `${currentNotification.minutes} minutes ago`}
          </p>
        </div>
      </div>
    </div>
  );
}
