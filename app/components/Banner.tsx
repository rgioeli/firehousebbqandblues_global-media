import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-50vh)] w-screen relative">
      <Image
        height={1080}
        width={1920}
        src="/images/bar-view.jpg"
        alt="firehouse bbq and blues"
        className="w-full h-full object-cover object-custom-between-top-and-middle"
        priority
      />
      <div className="absolute top-0 bg-black/10 w-full h-full z-20"></div>
    </div>
  );
};

export default Banner;
