const SubHeader = () => {
  return (
    <div className="w-full  flex justify-center text-tertiary py-8">
      {/* Wrapper untuk mempertahankan ukuran Mobile L */}
      <div className="w-full max-w-[425px] text-center">
        <img
          src="/images/ornamen/bismilah.png"
          alt="Bismillah"
          className="mx-auto w-3/4"
        />

        <p className="font1 mt-4 mb-2 text-[10px] md:text-base px-4">
          Assalamualaikum Warahmatullah Wabarakatuh, dengan memohon rahmat ridho
          Allah SWT, kami mengundang Bapak/Ibu Saudara untuk menghadiri acara
          pernikahan kami.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Kartu Welly */}
          <div className="flex flex-row-reverse items-center relative">
            <div>
              <img
                src="/images/wedding/suami.png"
                alt="Welly"
                className="w-40 h-52 md:w-60 md:h-72 rounded-lg object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="font2 text-lg md:text-2xl font-bold">
                BATARA WISNU, S.Pd
              </h3>
              <p className="font1 text-[8px] md:text-base w-[190px]">
                PUTRA KETIGA BAPAK BARNAS SUSANTO & IBU AAT RAHMAWATI
              </p>
            </div>
          </div>

          {/* Simbol & */}
          <div className="text-3xl md:text-5xl font1">&amp;</div>

          {/* Kartu Tommi */}
          <div className="flex items-center relative">
            <div>
              <img
                src="/images/wedding/istri.png"
                alt="Tommi"
                className="w-40 h-52 md:w-60 md:h-72 object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="font2 text-lg md:text-2xl font-bold relative">
                MEILANI, A.Md. Kep
              </h3>
              <p className="font1 text-[8px] md:text-base">
                PUTRI KEDUA BAPAK OMANG & IBU ENAH
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;