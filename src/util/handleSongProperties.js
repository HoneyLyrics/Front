import React from 'react';
import melon from '../asset/melon.png';
import moods from '../asset/moods';

export const handleMoodTags = moodTags =>
  moodTags.map(tag => {
    const mood = moods.find(m => m.id === tag.moodId);
    return (
      <span
        key={mood.id}
        className={mood.mood}
        style={{ borderColor: mood.color }}
      >
        {mood.moodName_kr}
      </span>
    );
  });

export const handleMelonLinks = songId => (
  <a
    href={`https://www.melon.com/song/detail.htm?songId=${songId}`}
    target="_blank"
    rel="noreferrer"
  >
    <span className="external-link-anchor-icon">
      <img src={melon} alt="melon-logo" className="melon" />
    </span>
    <span className="external-link-anchor-text">Melon</span>
  </a>
);

export const handleLyricsWithBr = lyrics =>
  lyrics.split('\n').map((lyric, index) => (
    <React.Fragment key={index}>
      {lyric}
      <br />
    </React.Fragment>
  ));

export const handleLyrics = lyrics =>
  lyrics
    .split('\n')
    .slice(0, 6)
    .map((lyric, index) => (
      <React.Fragment key={index}>
        {lyric}&nbsp;&nbsp;&nbsp;
        {index % 2 === 1 && index !== 5 ? <br /> : ''}
      </React.Fragment>
    ));
