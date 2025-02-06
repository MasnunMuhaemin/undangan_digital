import Countdown from "react-countdown-simple";

const WeddingCountdown = () => {
  let targetDate = new Date("2025-02-18T09:00:00+07:00").toISOString();

  return (
    <div className="relative flex flex-col justify-center items-center px-4">
      {/* Ornamen (Tetap di atas bg-secondary) */}
      <img
        src="/images/ornamen/ornamen5.png"
        alt="Ornament"
        className="absolute top-0 left-0 w-full h-auto object-contain z-0"
      />

      {/* Content Section */}
      <div className="relative z-20 text-white text-center mobile-320:mt-10 mt-20">
        <h1 className="font1 mobile-320:text-[10px] mobile-425:text-lg font-bold">HARI YANG KAMI NANTI</h1>
        <p className="font2 mobile-320:text-[8px] mobile-320:w-[240px] mobile-375:text-[12px] mobile-375:w-[270px] text-sm w-[300px] font-medium mt-3 mobile-320:mb-0 mobile-375:mb-4 leading-relaxed">
          Dengan segala rasa syukur yang tak terhingga, kami mengucap bahagia.
          Allah telah menjawab doa kami untuk satu waktu yang paling indah. Di
          hari penuh arti dan cinta, kami dengan segenap hati memohon doa restu
          atas perjalanan baru yang kami mulai. Harap kehadiran Anda menjadi
          bagian dalam kisah ini dan menjadi keluarga besar bahagia
          bersama-sama.
        </p>

        {/* Countdown Timer */}
        <Countdown
          targetDate={targetDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="flex justify-center items-center gap-3 font-bold mobile-320:mb-0 mobile-375:mb-5 text-white text-lg mt-3">
              <div>
                <span>{days}</span>
                <p className="font1 mobile-320:text-[10px] mobile-375:text-[12px] text-sm">Hari</p>
              </div>
              <div className=" mobile-320:text-[10px] mobile-320:mb-5 mobile-375:text-[12px] mobile-375:mb-6 mb-7">:</div>
              <div>
                <span>{hours}</span>
                <p className="font1 mobile-320:text-[10px] mobile-375:text-[12px] text-sm">Jam</p>
              </div>
              <div className=" mobile-320:text-[10px] mobile-320:mb-5 mobile-375:text-[12px] mobile-375:mb-6 mb-7">:</div>
              <div>
                <span>{minutes}</span>
                <p className="font1 mobile-320:text-[10px] mobile-375:text-[12px] text-sm">Menit</p>
              </div>
              <div className="mobile-320:text-[10px] mobile-320:mb-5 mobile-375:text-[12px] mobile-375:mb-6 mb-7">:</div>
              <div>
                <span>{seconds}</span>
                <p className="font1 mobile-320:text-[10px] mobile-375:text-[12px] text-sm">Detik</p>
              </div>
            </div>
          )}
        />

        {/* Wedding Details */}
        <div className="font1 mobile-375:text-[12px] mobile-320:mb-4 mobile-375:mb-6 mt-6 text-sm">
          <p className="font-bold mobile-320:text-[10px]">NGUNDUH MANTU</p>
          <p className="mobile-320:text-[10px]">Hari : Selasa, 18 Februari 2025</p>
          <p className="mobile-320:text-[10px]">Waktu : 09:00</p>
          <p className="mobile-320:text-[10px]">Tempat : Kuningan, Jawa Barat</p>
        </div>
      </div>
    </div>
  );
};

export default WeddingCountdown;
