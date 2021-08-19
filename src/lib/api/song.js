import client from './client';
import apiKey from '../../asset/apikey';

// `https://honeylyrics.herokuapp.com/musiclist/?moodid=${moodId}`
export const song = songId => client.get(`/song/?songid=${songId}`);

// `https://honeylyrics.herokuapp.com/song/?songid=${match.params.songid}`
export const songs = moodId => client.get(`/musiclist/?moodid=${moodId}`);

export const youtubes = ({ singer, title }) =>
  client.get(
    `https://www.googleapis.com/youtube/v3/search?part=id&key=${apiKey}&q=${singer} ${title}&maxResults=3&type=video&videoEmbeddable=true`,
  );
