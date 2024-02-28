import "./App.css";
import { useState } from "react";

const Title = () => {
  return <h1>ADAM KOSZARY</h1>;
};

const Portrait = () => {
  return (
    <div>
      <img
        alt="Adam Koszary"
        src="https://adamkoszary.co.uk/wp-content/uploads/2024/01/hw16PJaM_400x400.jpg"
      />
    </div>
  );
};

interface AboutProps {
  action: (newValue: boolean) => void; // Rename and correct type
  value: boolean;
}

const AboutButton = ({ action, value }: AboutProps) => {
  return (
    <div>
      <button className="button" onClick={() => action(!value)}>
        Adam Koszary
      </button>
    </div>
  );
};

const About = () => {
  const [about, setAbout] = useState(false);

  return (
    <div className="prose">
      <AboutButton action={setAbout} value={about} />

      {about && (
        <>
          <div>
            I do digital content and social media while trying not to think
            about the heat death of the universe.
          </div>

          <div>
            I’ve made absolute units go viral at The Museum of English Rural
            Life, got managed by Elon Musk for a weird 6 months at Tesla, made
            art more fun at Royal Academy of Arts, animated medieval manuscripts
            at Bodleian Libraries, did consultancy work for The Audience Agency
            and content for Canon EMEA.
          </div>

          <div>
            I’m not really doing anything with this website, just making sure
            that no other Adam Koszary in the world takes it (which as far as I
            know is just one person, a third cousin in Scotland who’s going to
            be very pissed off when he realises I’ve taken all the adamkoszary
            usernames and website).
          </div>

          <div>
            If you want to contact me try me on{" "}
            <a href="https://www.linkedin.com/in/adam-koszary/">LinkedIn</a>.
          </div>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <body className="container">
      <Title />
      <Portrait />
      <About />
    </body>
  );
}

export default App;
