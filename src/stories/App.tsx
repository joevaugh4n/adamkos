import "./App.css";
import { useState } from "react";

interface Title {
  title: string;
}

const Title: React.FC<Title> = ({ title }) => {
  return <h1 aria-label="Adam Koszary's name: Adam Koszary!">{title}</h1>;
};

const Portrait: React.FC = () => {
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
  label: string;
}

const AboutButton: React.FC<AboutProps> = ({ action, value, label }) => {
  return (
    <div>
      <button
        className="button"
        onClick={() => action(!value)}
        aria-label="Find out more about Adam"
      >
        {label}
      </button>
    </div>
  );
};

const Credit = () => {
  return (
    <div className="credit">
      <div>
        Built with ♡ by <a href="https://joevaughan.net/">Joe Vaughan</a>
      </div>
    </div>
  );
};

interface AboutTextProps {
  label: string;
}

const About: React.FC<AboutTextProps> = ({ label }) => {
  const [about, setAbout] = useState(false);

  return (
    <div className="prose">
      <AboutButton action={setAbout} value={about} label={label} />

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

          <div>
            <Credit />
          </div>
        </>
      )}
    </div>
  );
};

interface AppProps {
  label: string;
  title: string;
}

function App({ title, label }: AppProps) {
  return (
    <div className="container">
      <Title title={title} />
      <Portrait />
      <About label={label} />
    </div>
  );
}

export default App;
