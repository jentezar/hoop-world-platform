import React, { useState } from 'react';

interface Drill {
  title: string;
  description: string;
  videoUrl?: string;
}

const DrillsPage: React.FC = () => {
  const [drills, setDrills] = useState<Drill[]>([
    {
      title: 'Crossover Drill',
      description: 'Practice your crossover with these steps.',
      videoUrl: 'https://www.example.com/video/crossover-drill',
    },
    // Add more drills as needed
  ]);

  return (
    <div className="page-container">
      <div className="drills-page">
        <h2 className="featured-heading">Drills</h2>
        {drills.map((drill, index) => (
          <div key={index} className="drill">
            <h3>{drill.title}</h3>
            <p>{drill.description}</p>
            {drill.videoUrl && (
              <a href={drill.videoUrl} target="_blank" rel="noopener noreferrer">
                Watch Video
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrillsPage;
