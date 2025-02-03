const Header = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/images/wedding/header1.jpeg')" }}
    >
      {/* Wrapper agar tetap seukuran Mobile L (425px) dan berada di tengah */}
      <div className="relative w-full bg-black bg-opacity-30 flex flex-col justify-end text-tertiary h-full">
        <div className="ml-3">
          <h2 className="text-sm md:text-4xl font1">The Wedding of</h2>
          <h1 className="text-2xl md:text-5xl font2 mt-2 mb-3 underline underline-offset-8">WISNU & METLANI</h1>
          <p className="text-sm md:text-xl mt-4 font1">18 Februari 2025</p>
        </div>
        {/* Ornamental Decoration */}
        <div className="w-full mt-4 overflow-hidden">
          <img
            src="/images/ornamen/ornamen1.png"
            alt="Decoration"
            className="w-full max-w-[425px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
