import client from './client';
import apiKey from '../../asset/apikey';

export const song = songId =>
  client.get(`https://honeylyrics.herokuapp.com/song/?songid=${songId}`);
// export const song = songId => client.get(`/song/?songid=${songId}`);

export const songs = moodId =>
  client.get(`https://honeylyrics.herokuapp.com/musiclist/?moodid=${moodId}`);
// export const songs = moodId => client.get(`/musiclist/?moodid=${moodId}`);

export const youtubes = ({ singer, title }) =>
  client.get(
    `https://www.googleapis.com/youtube/v3/search?part=id&key=${apiKey}&q=${singer} ${title}&maxResults=3&type=video&videoEmbeddable=true`,
  );
