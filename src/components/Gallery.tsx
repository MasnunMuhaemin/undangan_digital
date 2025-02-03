const Gallery = () => {
  return (
    <div>
      <div>
        <img src="/images/ornamen/ornamen1.png" alt="" className="" />
      </div>
      <div className=" bg-secondary items-center relative">
        {/* Teks GALLERY */}
        <h1 className="text-white italic text-lg">GALLERY</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-2">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688025668.png"
              alt="Gallery image"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688029344.png"
              alt="Gallery image"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688029370.png"
              alt="Gallery image"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688029384.png"
              alt="Gallery image"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688029394.png"
              alt="Gallery image"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688029408.png"
              alt="Gallery image"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688029424.jpg"
              alt="Gallery image"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688029434.png"
              alt="Gallery image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
