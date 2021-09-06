import client from './client';
import apiKey from '../../asset/apikey';

let songURL, songsURL;
if (process.env.NODE_ENV !== 'production') {
  songURL = '/song';
  songsURL = '/musiclist';
} else {
  songURL = 'https://honeylyrics.herokuapp.com/song';
  songsURL = 'https://honeylyrics.herokuapp.com/musiclist';
}

export const song = songId => client.get(`${songURL}/?songid=${songId}`);

export const songs = moodId => client.get(`${songsURL}/?moodid=${moodId}`);

export const youtubes = ({ singer, title }) =>
  client.get(
    `https://www.googleapis.com/youtube/v3/search?part=id&key=${apiKey}&q=${singer} ${title}&maxResults=3&type=video&videoEmbeddable=true`,
  );
