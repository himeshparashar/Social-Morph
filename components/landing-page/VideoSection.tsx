const VideoSection = () => {
  return (
    <div>
      <h1 className="text-center mt-28 text-4xl font-bold gradient-text border-b-[3px] border-purple-400 pb-2 w-fit mx-auto">
        The fastest way to make social media content
      </h1>
      <div className="h-[70%] w-[70%] mx-auto my-10 ">
        <video autoPlay loop muted src="https://minvo.pro/assets/videos/landingPage/social-demo.mp4" className="rounded-3xl shadow-xl shadow-purple-500"></video>
      </div>
    </div>
  );
};

export default VideoSection;
