import Card from "./../components/shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <Card>
        <div>
          <h1>About This Project</h1>
          <h3>
            This is a React app to leave a feedback for a product or service
          </h3>
          <p>Version: 1.0.0</p>

          <p>
            <Link to="/">Back to Home Page</Link>
          </p>
        </div>
      </Card>
    </>
  );
};

export default AboutPage;
