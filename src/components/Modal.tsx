import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import invitations from "../lib/data.json";
import { FaBookOpen } from "react-icons/fa6";

export default function Modal({ audio }: { audio: HTMLAudioElement }) {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      audio && audio.play();
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [open]);

  const queryParams = new URLSearchParams(location.search);
  const nameFromUrl = queryParams.get("name");

  const invitedPerson = invitations.find(
    (item) => item.name.toLowerCase() === (nameFromUrl?.toLowerCase() || "")
  );

  return (
    <div
      className={`fixed inset-0 transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div className="absolute inset-0 bg-center bg-no-repeat bg-black opacity-[.55] z-0"></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[image:url('/images/wedding/header.jpeg')] md:bg-[image:url('/images/wedding/header.jpeg')] bg-cover z-10 bg-center bg-no-repeat shadow p-6 transition-all duration-500 w-full h-full ${
          open ? "opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {/* Ornamen tetap di paling atas */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
          <img
            src="/images/ornamen/ornamen4.png"
            alt="Gold Icon"
            className="w-28"
          />
        </div>

        {/* Teks dan tombol berada di bawah tetapi tidak terlalu bawah */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full text-center flex flex-col items-center">
          <p className="font1 text-xs mb-3 sm:font-bold sm:text-2xl md:text-2xl">
            THE WEDDING OF
          </p>

          <div className="font2 items-center mt-3 mb-8 font-extrabold">
            <div className="font-satisfy text-3xl md:text-5xl lg:text-6xl mt-5 mb-4">
              <p>WISNU & MEILANI</p>
            </div>

            <p className="text-lg font-semibold mb-3">Dear,</p>
            {invitedPerson ? (
              <p className="text-xl font-bold">{invitedPerson.name}</p>
            ) : (
              <p className="text-xl font-bold text-red-500">
                Undangan tidak ditemukan
              </p>
            )}
          </div>

          {/* Tombol tetap berada di bawah teks */}
          <div className="font1 transition-all hover:scale-110 group">
            <button
              onClick={() => setOpen(false)}
              className="bg-black bg-opacity-[.75] shadow-lg rounded-3xl py-3 px-5 font-semibold flex items-center justify-center gap-2 group"
            >
              <FaBookOpen />
              <span>Buka Undangan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
