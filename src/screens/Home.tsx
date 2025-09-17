import Header from '../components/Header';
import shikoku from '../assets/images/shikoku.png';
import Text from '../components/Text';

const Home = () => {
  return (
    <div>
      <Header text={'こんにちは、ディーンです！'} />
      <Header text={"Hi, I'm Dean!"} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <img
          src={shikoku}
          alt='Dean in Shirotori, Shikoku'
          style={{ width: '30%' }}
        />
        <Text id='introduction'>
          ...and I am a senior app and frontend web developer! I hope you enjoy
          having a look through my projects and finding out a little more about
          who I am.
          <br />
          よろしくお願いします！
        </Text>
      </div>
    </div>
  );
};

export default Home;
