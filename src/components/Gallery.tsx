const Gallery = () => {
  return (
    <div>
      <div>
        <img src="/images/ornamen/ornamen1.png" alt="" className="" />
      </div>
      <div className="bg-secondary items-center relative">
        {/* Teks GALLERY */}
        <h1 className="text-white italic text-lg text-center w-full mb-6 flex justify-center">
          GALLERY
        </h1>

        {/* Grid Gallery dengan Padding di Kiri & Kanan */}
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-2">
            <div className="relative group">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://pagedone.io/asset/uploads/1688025668.png"
                alt="Gallery image"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://pagedone.io/asset/uploads/1688029344.png"
                alt="Gallery image"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://pagedone.io/asset/uploads/1688029370.png"
                alt="Gallery image"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://pagedone.io/asset/uploads/1688029384.png"
                alt="Gallery image"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://pagedone.io/asset/uploads/1688029394.png"
                alt="Gallery image"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://pagedone.io/asset/uploads/1688029408.png"
                alt="Gallery image"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://pagedone.io/asset/uploads/1688029424.jpg"
                alt="Gallery image"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://pagedone.io/asset/uploads/1688029434.png"
                alt="Gallery image"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
