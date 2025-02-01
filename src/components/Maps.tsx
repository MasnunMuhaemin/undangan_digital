const Maps = () => {
  return (
    <div className="flex">
      {/* Container Utama */}
      <div className="w-[90%] max-w-3xl p-5 rounded-lg relative">
        {/* Lokasi */}
        <div className="mt-8 flex items-center">
          {/* Teks dan Panah di Kiri */}
          <div className="pr-4 flex flex-col justify-center">
            <h2 className="font1 mb-11 text-3xl">LOKASI</h2>
            <p className="w-36 font1 mb-9 text-[10px]">
              Alamat Lengkap : Dsn. Pahing rt 04 rw 02 Ds. Ciomas,
              <br />
              Kec, Ciawigebang, Kab. Kuningan
            </p>
          </div>

          {/* Kotak Map di Kanan */}
          <div className="ml-7 mt-20 flex justify-center items-center">
            <div>
              <div className="h-24 w-40 md:w-52 rounded-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.73065608997877!2d108.56600567370697!3d-6.977528155311747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f13d46e11f1c7%3A0xff4d9e06c605bfc5!2s2HF8%2B3C8%2C%20Ciomas%2C%20Ciawigebang%2C%20Kuningan%20Regency%2C%20West%20Java%2045591!5e1!3m2!1sen!2sid!4v1738424323342!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{border:0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-center text-[9px] font-extralight mt-2">
                Tempat: Kuningan, Jawa Barat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
