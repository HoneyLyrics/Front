import React from 'react';
import moods from '../asset/moods';

const MoodList = () => {
  return (
    <div className="mood-container">
      {moods.map((mood, index) => (
        <div
          key={mood.id}
          className="mood-item"
          style={{ background: mood.color }}
        >
          <div className="mood-name">{mood.moodName}</div>
          <div className="short-desc">short description</div>
        </div>
      ))}
    </div>
  );
};

export default MoodList;
