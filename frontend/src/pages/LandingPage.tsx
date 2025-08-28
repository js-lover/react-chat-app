import welcome from "../assets/animations/welcome.json";
import Lottie from "lottie-react";
import { Button } from "../components/ui/button";
import Aurora from "../assets/backgrounds/Aurora";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen relative flex flex-col gap-20 justify-center items-center bg-black">
      <Aurora
        amplitude={0.5}
        blend={0.5}
        colorStops={["#ff0000", "#00ff00", "#0000ff"]}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="w-full h-fit flex flex-col justify-center items-center">
          <Lottie
            className="w-3/4 md:w-1/4 mb-10"
            animationData={welcome}
            loop={true}
          />
        </div>

        <div className="w-full h-fit flex flex-row gap-10 justify-center items-center ">
          <Link to="/login">
            <Button
              className="mt-4 rounded-full cursor-pointer hover:border-green-500 hover:text-green-500"
              variant="bordered"
              size="lg"
            >
              Log in
            </Button>
          </Link>

          <Link to="/signup">
            <Button
              className="mt-4 rounded-full cursor-pointer hover:border-blue-500 hover:text-blue-500"
              variant="bordered"
              size="lg"
            >
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
