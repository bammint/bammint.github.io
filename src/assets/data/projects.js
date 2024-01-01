import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
// import UTrackerImg from '../images/utracker.jpg';
// import GreenCtgImg from '../images/greenctg.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';
import ProjextA from '../images/ProjectA.png';
import Dasoni from '../images/dasoni.png';

const projects = [
  {
    id: uuidv4(),
    name: '<back>여기놀자',
    desc:
      '여기어때와 야놀자를 참고하여 스프링부트로 만든 숙박 플렛폼입니다',
    img: ProjextA,
    url: 'http://43.200.250.193:1207',
    detail: 'https://drive.google.com/file/d/1YxmkFm05g99Doc98AgmJMy_Y2lAfvCQE/view?usp=drive_link',
  },
  {
    id: uuidv4(),
    name: '<front>다소니',
    desc:
      '현재 운영중인 다소니 심리상담센터의 사이트를 보고 만든 다소니 사이트입니다',
    img: Dasoni,
    url: 'https://bammint.github.io/fsweb/Back/dasoni/index.html',
    detail: null,
  },
  // {
  //   id: uuidv4(),
  //   name: 'Green CTG',
  //   desc:
  //     'An app to help people to get an overview of how they can make the city beautiful.',
  //   img: GreenCtgImg,
  //   detail: '',
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Coin Tracker',
  //   desc:
  //     'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
  //   img: CoinTrackerImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: "Cavin's Portfolio",
  //   desc:
  //     'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
  //   img: CavinImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc:
  //     'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
  // v13.0.2
  // v10.1.0
  // v9.9.2
];

export default projects;
