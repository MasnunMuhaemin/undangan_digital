import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const Banks = () => {
  const [copySuccess, setCopySuccess] = useState("");

  // Fungsi untuk menyalin teks ke clipboard dengan fallback
  const copyToClipboard = (text: string) => {
    // Cek apakah navigator.clipboard tersedia
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopySuccess("Copied!");
          setTimeout(() => setCopySuccess(""), 2000); // Menghilangkan pesan setelah 2 detik
        })
        .catch(() => {
          setCopySuccess("Failed to copy!");
        });
    } else {
      // Fallback menggunakan document.execCommand
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000); // Menghilangkan pesan setelah 2 detik
      } else {
        setCopySuccess("Failed to copy!");
      }
    }
  };

  return (
    <div className="text-tertiary p-8 relative">
      {/* Container Utama */}
      <h1 className="font1 text-3xl font-bold text-left mb-2" data-aos="fade-right" data-aos-delay="300">GIFTS</h1>
      <div className="h-1 bg-tertiary w-full mb-4" data-aos="fade-left" data-aos-delay="350"></div>
      <p className="font1 text-center text-[8px] mb-8" data-aos="fade-right" data-aos-delay="450">
        "Kami sangat menghargai kehadiran dan doa restu Anda di hari istimewa
        kami. Kami menerima uang berupa transfer digital di bawah ini dengan
        senang hati."
      </p>
      <div className="flex justify-center gap-8 mb-8">
        <div className="bg-tertiary flex flex-col items-center justify-center p-4">
          <img src="/images/bank/bjb.png" alt="" className="w-28 mb-2" />
          <p className="text-black text-center w-full">a.n Meilani</p>
          <p className="text-black text-center w-full">No.rek: 0138431290100</p>
          <button
            onClick={() => copyToClipboard("0138431290100")}
            className="mt-2 px-4 py-2 text-xs bg-transparent border-2 border-black text-black rounded hover:bg-black hover:text-white hover:opacity-70 transition duration-200"
            aria-label="Copy Bank BJB Account Number"
          >
            <FaCopy className="inline mr-2" />
            Copy
          </button>
        </div>
        <div className="bg-tertiary flex flex-col items-center justify-center p-4">
          <img src="/images/bank/dana.png" alt="" className="w-24 mb-2" />
          <p className="text-black text-center w-full">a.n Meilani</p>
          <p className="text-black text-center w-full">089503397261</p>
          <button
            onClick={() => copyToClipboard("089503397261")}
            className="mt-2 px-4 py-2 text-xs bg-transparent border-2 border-black text-black rounded hover:bg-black hover:text-white hover:opacity-70 transition duration-200"
            aria-label="Copy Dana Account Number"
          >
            <FaCopy className="inline mr-2" />
            Copy
          </button>
        </div>
      </div>
      {copySuccess && (
        <span className="text-green-500 mt-2">{copySuccess}</span>
      )}
      <p className="font1 text-center text-xs mb-8" data-aos="fade-zoom-up" data-aos-delay="300">
        Kami akan sangat senang dan merasa terhormat jika Bapak/Ibu/Saudara/i
        bisa hadir di hari bahagia kami. Doa dan dukungan dari Anda akan menjadi
        pelengkap kebahagiaan kami. Terima kasih banyak atas waktu dan perhatian
        yang diberikan.
      </p>
      <p className="font2 text-center text-2xl font-semibold mb-4" data-aos="fade-left">
        Wassalamualaikum Wr. Wb
      </p>
      <p className="font2 text-center text-xl font-bold mb-16" data-aos="fade-right">
        WISNU & MEILANI
      </p>

      {/* Ornamen di bagian bawah yang mengisi lebar section */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <img
          src="/images/ornamen/ornamen6.png" 
          alt="Ornamen"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banks;
