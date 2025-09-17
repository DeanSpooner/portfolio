import styled from 'styled-components';
import Header from '../components/Header';
import Text from '../components/Text';
import prague from '../assets/images/prague.png';
import kanagawa from '../assets/images/kanagawa.png';
import nara from '../assets/images/nara.png';

const AboutImage = styled.img`
  transition: all 0.7s ease 0s;
  -webkit-transition: all 0.7s ease 0s;
  height: 6rem;
  &:hover {
    height: 10rem;
  }
`;

const About = () => {
  return (
    <div>
      <Header text={'About'} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
          }}
        >
          <AboutImage
            className='fadein prague'
            src={prague}
            alt='Dean in Prague'
          />
          <AboutImage src={nara} className='nara' alt='Dean in Nara' />
          <AboutImage
            src={kanagawa}
            className='kanagawa'
            alt='Dean in Kanagawa'
          />
        </div>
        <Text>
          My name is Dean Spooner and I am a senior app and frontend web
          developer. Currently I am part of a small dev team building and
          maintaing large app for an education company in the UK; previously I
          was a mid-level frontend developer for a multinational digital agency,
          building various web projects for large international clients. Prior
          to this, I trained on a software development bootcamp, while working
          in my previous career as a primary school teacher.
          <br />
          <br />
          Outside of work, I enjoy studying Japanese, travelling around Japan,
          cooking, reading, and spending time with my friends. I also enjoy
          learning 3D modelling in Blender and three.js, and using Python to
          develop scripts to automate lots of work and tasks in my work and home
          life.
          <br />
          <br />
          よろしくお願いします！ (Pleased to meet you!)
        </Text>
      </div>
    </div>
  );
};

export default About;
