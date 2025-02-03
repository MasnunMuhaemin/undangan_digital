import Countdown from "react-countdown-simple";

const WeddingCountdown = () => {
  let targetDate = new Date("2025-02-18T09:00:00+07:00").toISOString();

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen px-6">
      {/* Ornamen (Tetap di atas bg-secondary) */}
      <img
        src="/images/ornamen/ornamen5.png"
        alt="Ornament"
        className="absolute top-0 left-0 w-full h-auto min-h-screen object-contain z-0"
      />

      {/* Content Section */}
      <div className="relative z-20 text-white text-center max-w-lg mobile-425:mt-20">
        <h1 className="font1 mobile-425:text-lg font-bold">HARI YANG KAMI NANTI</h1>
        <p className="font2 mobile-320:text-[11px] w-[250px] font-bold mt-3 mb-7 leading-relaxed">
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
            <div className="flex justify-center items-center gap-3 font-bold mb-10 text-white text-xl">
              <div>
                <span>{days}</span>
                <p className="font1 text-sm sm:text-lg">Hari</p>
              </div>
              <div className="text-2xl">:</div>
              <div>
                <span>{hours}</span>
                <p className="font1 text-sm sm:text-lg">Jam</p>
              </div>
              <div className="text-2xl">:</div>
              <div>
                <span>{minutes}</span>
                <p className="font1 text-sm sm:text-lg">Menit</p>
              </div>
              <div className="text-2xl">:</div>
              <div>
                <span>{seconds}</span>
                <p className="font1 text-sm sm:text-lg">Detik</p>
              </div>
            </div>
          )}
        />

        {/* Wedding Details */}
        <div className="font1 mobile-425:text-sm mobile-320:text-[12px]">
          <p className="font-bold">RESEPSI PERNIKAHAN</p>
          <p>Hari : Selasa, 18 Februari 2025</p>
          <p>Waktu : 09:00</p>
          <p>Tempat : Kuningan, Jawa Barat</p>
        </div>
      </div>
    </div>
  );
};

export default WeddingCountdown;
