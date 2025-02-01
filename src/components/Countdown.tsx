import Countdown from "react-countdown-simple";

const WeddingCountdown = () => {
  let targetDate = new Date("2025-02-18T09:00:00+07:00").toISOString();

  return (
    <div className="flex relative items-center justify-center min-h-screen bg-secondary">
      <img
        src="/images/ornamen/ornamen3.png"
        alt="Ornament"
        className="absolute inset-0 h-full"
      />
      <div className="relative text-white overflow-hidden">
        {/* Ornamental Image */}

        {/* Content Section */}
        <div className="relative px-8 text-center">
          <div className="inline-block">
            <h1 className="font1 text-lg font-bold">HARI YANG KAMI NANTI</h1>
            <p className="fpnt2 text-[11px] font-bold m-7 leading-relaxed">
              Dengan segala rasa syukur yang tak terhingga, kami mengucap
              bahagia. Allah telah menjawab doa kami untuk satu waktu yang
              paling indah. Di hari penuh arti dan cinta, kami dengan segenap
              hati memohon doa restu atas perjalanan baru yang kami mulai. Harap
              kehadiran Anda menjadi bagian dalam kisah ini dan menjadi keluarga
              besar bahagia bersama-sama.
            </p>
          </div>
          {/* Countdown Timer */}

          <Countdown
            targetDate={targetDate}
            renderer={({ days, hours, minutes, seconds }) => {
              return (
                <div className="flex justify-center items-center gap-2 font-bold mb-20 mt-8 text-white">
                  <div>
                    <span className="text-xl">{days}</span>
                    <p className="font1 text-lg">Hari</p>
                  </div>
                  <div className="flex items-center mb-10 text-2xl">
                    :
                  </div>
                  <div>
                    <span className="text-xl">{hours}</span>
                    <p className="font1 text-lg">Jam</p>
                  </div>
                  <div className="flex items-center mb-10 text-2xl">
                    :
                  </div>
                  <div>
                    <span className="text-xl">{minutes}</span>
                    <p className="font1 text-lg">Menit</p>
                  </div>
                  <div className="flex items-center mb-10 text-2xl">
                    :
                  </div>
                  <div>
                    <span className="text-xl">{seconds}</span>
                    <p className="font1 text-lg">Detik</p>
                  </div>
                </div>
              );
            }}
          />

          {/* Wedding Details */}
          <div className="font1 text-sm">
            <p className="font-bold">RESEPSI PERNIKAHAN</p>
            <p>Hari : Selasa, 18 Februari 2025</p>
            <p>Waktu : 09:00</p>
            <p>Tempat : Kuningan, Jawa Barat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCountdown;
