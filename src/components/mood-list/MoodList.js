import React from 'react';
import { Link } from 'react-router-dom';
import moods from '../../asset/moods';

const MoodList = () => {
  return (
    <div className="mood-container">
      {moods.map(mood => (
        <Link key={mood.id} to={`/musiclist/${mood.id}`}>
          <div className="mood-item" style={{ background: mood.color }}>
            <div className="mood-name">{mood.moodName_kr}</div>
            <div className="short-desc">{mood.moodName}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoodList;
