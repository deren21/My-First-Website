import NavBar from "./NavBar";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="bg-hero 2xl:h-[736px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
      <div className="container mx-auto px-10 2xl:px-0">
        <NavBar />
        <div className="text-center xl:mt-16 lg:mt-10 md:mt-2">
          <h1 className="text-4xl text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed">
            Information Engineering student at Universitas Gadjah Mada
          </h1>
          <p className="text-white text-opacity-60 text-xl font-sans 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-6 leading-relaxed">
            I have a great interest in anything related to computers, especially
            CyberSecurity
          </p>
          <Button href="#profile" pill variant="yellow" className="mt-14">
            More
          </Button>
        </div>
      </div>
    </div>
  );
}
