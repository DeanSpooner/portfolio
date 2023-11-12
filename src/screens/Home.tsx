import Header from "../components/Header";
import dean from "../assets/images/dean.png";
import Text from "../components/Text";

const Home = () => {
  return (
    <div>
      <Header text={"Hi, I'm Dean!"} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={dean} alt="Dean" style={{ width: "30%" }} />
        <Text id="introduction">
          ...and I am a software developer! I hope you enjoy having a look
          through my projects and finding out a little more about who I am.
        </Text>
      </div>
    </div>
  );
};

export default Home;
