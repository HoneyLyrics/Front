import React from 'react';
import styled from 'styled-components';
import FavoriteMood from './FavoriteMood';
import LikedMusic from './LikedMusic';
import PlayLists from './PlayLists';

const MyInfoBlock = styled.div`
  padding-top: 7rem;
  height: calc(100vh - 9.0625rem);
  display: flex;
  /* flex-direction: column; */
`;

const UserMusics = styled.div`
  width: 50vw;
  padding-right: 5%;
`;

const MyInfos = () => {
  const personalMoods = [
    { id: 1 },
    { id: 5 },
    { id: 8 },
    { id: 14 },
    { id: 15 },
    { id: 22 },
    { id: 3 },
    { id: 19 },
  ];
  const personalSongs = [
    {
      songId: 32055419,
      singer: 'Maroon 5',
      title: 'Memories',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 32156286,
      singer: '노을',
      title: '늦은 밤 너의 집 앞 골목길에서',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/103/48/811/10348811_500.jpg?ad8ce3088dc2586de4e6b13900b80b44/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 32224166,
      singer: '#안녕',
      title: '너의 번호를 누르고 (Prod. 영화처럼)',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/103/59/126/10359126_500.jpg?893bf3ed5678b90b4896e9f0c8f2535a/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 33372784,
      singer: '아이유',
      title: '봄 안녕 봄',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210325161233_500.jpg?304eb9ed9c07a16ec6d6e000dc0e7d91/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 33372787,
      singer: '아이유',
      title: '아이와 나의 바다',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210325161233_500.jpg?304eb9ed9c07a16ec6d6e000dc0e7d91/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 30244931,
      singer: '방탄소년단',
      title: '봄날',
      imgURL:
        'https://cdnimg.melon.co.kr/cm/album/images/100/37/969/10037969_500.jpg?df3750c6152ad5e19ea6773a5faf71ba/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 31341518,
      singer: 'Lauv',
      title: 'Paris In The Rain',
      imgURL:
        'https://cdnimg.melon.co.kr/cm/album/images/102/09/752/10209752_500.jpg?cd233777e5c3a5549f555bdf544b5a30/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 32570501,
      singer: '순순희',
      title: '서면역에서',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/104/25/277/10425277_20200504103213_500.jpg?14ef34829e7bea114541c74e65d98a5b/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 33450426,
      singer: '하이라이트 (Highlight)',
      title: '불어온다',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/106/01/599/10601599_20210503143025_500.jpg?5686ba7f287acce138f208866898d995/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 1615770,
      singer: 'SG 워너비',
      title: '아리랑',
      imgURL:
        'https://cdnimg.melon.co.kr/cm/album/images/003/49/217/349217_500.jpg/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 31984204,
      singer: '폴킴',
      title: '안녕',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/103/17/137/10317137_500.jpg?04379f77042df907730f26c136957d65/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 32525311,
      singer: '경서예지',
      title: '사실 나는 (Feat.전건호)',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/104/16/034/10416034_20200410161209_500.jpg?5dcc944896e61ee0ffb2b238bc01f460/melon/resize/282/sharpen/0x1',
    },
    {
      songId: 32853712,
      singer: '박진영',
      title: 'When We Disco (Duet with 선미)',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/104/75/061/10475061_20200812120927_500.jpg?e0e2a4331bb0aa6e525f679804f35f8e/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 33247490,
      singer: '경서 (경서예지), MJ (써니사이드)',
      title: '술 한잔 해요',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/105/56/217/10556217_20210129115038_500.jpg?31d420f57d0eccd8ca4c34886af53577/melon/resize/282/quality/80/optimize',
    },
    {
      songId: 33372789,
      singer: '아이유',
      title: '에필로그',
      imgURL:
        'https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210325161233_500.jpg?304eb9ed9c07a16ec6d6e000dc0e7d91/melon/resize/282/quality/80/optimize',
    },
  ];
  const personalPlaylist = [
    [
      {
        songId: 33372782,
        singer: '아이유',
        title: 'Flu',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33372788,
        singer: '아이유',
        title: '어푸 (Ah puh)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32559781,
        singer: '오마이걸 (OH MY GIRL)',
        title: '살짝 설렜어 (Nonstop)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
    ],
    [
      {
        songId: 8130796,
        singer: '라붐 (LABOUM)',
        title: '상상더하기',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 30773554,
        singer: '블루 (BLOO)',
        title: 'Downtown Baby',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32853712,
        singer: '박진영',
        title: 'When We Disco (Duet with 선미)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33510307,
        singer:
          'MSG워너비 TOP 8 (별루지, 김정수, 강창모, 정기석, 이동휘, 이상이, 박재정, 원슈타인)',
        title: '상상더하기',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 31029291,
        singer: 'Anne-Marie',
        title: '2002',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 31737197,
        singer: '방탄소년단',
        title: '작은 것들을 위한 시 (Boy With Luv) (Feat. Halsey)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
    ],
    [
      {
        songId: 32578498,
        singer: '아이유',
        title: '에잇(Prod.&Feat. SUGA of BTS)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33077234,
        singer: '방탄소년단',
        title: 'Life Goes On',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33346446,
        singer: '로제 (ROS?)',
        title: 'On The Ground',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33447280,
        singer: 'ITZY (있지)',
        title: '마.피.아. In the morning',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33487342,
        singer: 'aespa',
        title: 'Next Level',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32853712,
        singer: '박진영',
        title: 'When We Disco (Duet with 선미)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32224272,
        singer: '창모 (CHANGMO)',
        title: 'METEOR',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
    ],
    [
      {
        songId: 32720013,
        singer: 'BLACKPINK',
        title: 'How You Like That',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32860397,
        singer: '브레이브걸스',
        title: '운전만해 (We Ride)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32961718,
        singer: 'BLACKPINK',
        title: 'Lovesick Girls',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33077234,
        singer: '방탄소년단',
        title: 'Life Goes On',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33077590,
        singer:
          '미란이 (Mirani), 먼치맨(MUNCHMAN), Khundi Panda, 머쉬베놈 (MUSHVENOM)',
        title: 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33167063,
        singer: '송이한',
        title: '밝게 빛나는 별이 되어 비춰줄게',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33338016,
        singer: '임창정',
        title: '되풀이',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33359317,
        singer: 'Justin Bieber',
        title: 'Peaches (Feat. Daniel Caesar & Giveon)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33359725,
        singer: '호미들',
        title: '사이렌 Remix (Feat. UNEDUCATED KID, Paul Blanco)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33372783,
        singer: '아이유',
        title: 'Coin',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33405149,
        singer: '다비치',
        title: '그냥 안아달란 말야',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
    ],
    [
      {
        songId: 8130796,
        singer: '라붐 (LABOUM)',
        title: '상상더하기',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 30773554,
        singer: '블루 (BLOO)',
        title: 'Downtown Baby',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32853712,
        singer: '박진영',
        title: 'When We Disco (Duet with 선미)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33510307,
        singer:
          'MSG워너비 TOP 8 (별루지, 김정수, 강창모, 정기석, 이동휘, 이상이, 박재정, 원슈타인)',
        title: '상상더하기',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 31029291,
        singer: 'Anne-Marie',
        title: '2002',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 31737197,
        singer: '방탄소년단',
        title: '작은 것들을 위한 시 (Boy With Luv) (Feat. Halsey)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
    ],
    [
      {
        songId: 3894276,
        singer: '스탠딩 에그',
        title: '오래된 노래',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32055419,
        singer: 'Maroon 5',
        title: 'Memories',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32156286,
        singer: '노을',
        title: '늦은 밤 너의 집 앞 골목길에서',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32224166,
        singer: '#안녕',
        title: '너의 번호를 누르고 (Prod. 영화처럼)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33372784,
        singer: '아이유',
        title: '봄 안녕 봄',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33372787,
        singer: '아이유',
        title: '아이와 나의 바다',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 30244931,
        singer: '방탄소년단',
        title: '봄날',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 31341518,
        singer: 'Lauv',
        title: 'Paris In The Rain',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32570501,
        singer: '순순희',
        title: '서면역에서',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33450426,
        singer: '하이라이트 (Highlight)',
        title: '불어온다',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 1615770,
        singer: 'SG 워너비',
        title: '아리랑',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 31984204,
        singer: '폴킴',
        title: '안녕',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32525311,
        singer: '경서예지',
        title: '사실 나는 (Feat.전건호)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32853712,
        singer: '박진영',
        title: 'When We Disco (Duet with 선미)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33247490,
        singer: '경서 (경서예지), MJ (써니사이드)',
        title: '술 한잔 해요',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33372789,
        singer: '아이유',
        title: '에필로그',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
    ],
    [
      {
        songId: 1944399,
        singer: 'SG 워너비',
        title: 'Timeless',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 30244931,
        singer: '방탄소년단',
        title: '봄날',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 31029291,
        singer: 'Anne-Marie',
        title: '2002',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 31341518,
        singer: 'Lauv',
        title: 'Paris In The Rain',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32438894,
        singer: '오반 (OVAN)',
        title: '어떻게 지내 (Prod. By VAN.C)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33104090,
        singer: '벤',
        title: '혼술하고 싶은 밤',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 1615770,
        singer: 'SG 워너비',
        title: '아리랑',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 31984204,
        singer: '폴킴',
        title: '안녕',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32055419,
        singer: 'Maroon 5',
        title: 'Memories',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32156286,
        singer: '노을',
        title: '늦은 밤 너의 집 앞 골목길에서',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32378104,
        singer: '아이유',
        title: '마음을 드려요',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32525311,
        singer: '경서예지',
        title: '사실 나는 (Feat.전건호)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33247490,
        singer: '경서 (경서예지), MJ (써니사이드)',
        title: '술 한잔 해요',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33372784,
        singer: '아이유',
        title: '봄 안녕 봄',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33372787,
        singer: '아이유',
        title: '아이와 나의 바다',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 3894276,
        singer: '스탠딩 에그',
        title: '오래된 노래',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32143487,
        singer: '아이유',
        title: 'Love poem',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32224166,
        singer: '#안녕',
        title: '너의 번호를 누르고 (Prod. 영화처럼)',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32570501,
        singer: '순순희',
        title: '서면역에서',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 32651098,
        singer: '전상근',
        title: '사랑은 지날수록 더욱 선명하게 남아',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33248758,
        singer: '정동하',
        title: '추억은 만남보다 이별에 남아',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
      {
        songId: 33450426,
        singer: '하이라이트 (Highlight)',
        title: '불어온다',
        imgURL:
          'https://cdnimg.melon.co.kr/cm2/album/images/103/30/593/10330593_20210611111519_500.jpg?2a5aa2470586b5849817ea5edece7dbf/melon/resize/282/quality/80/optimize',
      },
    ],
  ];

  return (
    <MyInfoBlock>
      <FavoriteMood personalMoods={personalMoods} />
      <UserMusics>
        <LikedMusic personalSongs={personalSongs} />
        <PlayLists personalPlaylist={personalPlaylist} />
      </UserMusics>
    </MyInfoBlock>
  );
};

export default MyInfos;
