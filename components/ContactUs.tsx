"use client"
import Image from "next/image";
import LinkedIn from "@/assets/LinkedIn.png";
import Github from "@/assets/github.png"

const ContactUs = () => {
 
  const homsLat = 34.7268;
  const homsLng = 36.7142;
  const mapSrc = `https://maps.google.com/maps?q=${homsLat},${homsLng}&z=13&output=embed`;

  return (
    <section id="contact" className="min-h-full my-8 gap-4 px-4">
      <div className="TerminalTag max-w-fit flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-lightGreen/30">
        <span className="StatusDot h-2 w-2 rounded-full bg-lightGreen animate-pulse" />
        <span className="font-mono text-xs tracking-wide text-lightGreen">
          contact us
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div id="info_section" className="flex-1">
          <div id="email" className="my-2">
            <h4 className="font-bold text-white mb-1">Email</h4>
            <div className="w-full h-10 rounded-xl border border-lightGreen/30 p-2 flex items-center">
              <em className="text-secondary">alaa98alaa0@gmail.com</em>
            </div>
          </div>
          <div id="phone" className="my-2">
            <h4 className="font-bold text-white mb-1">Phone</h4>
            <div className="w-full h-10 rounded-xl border border-lightGreen/30 p-2 flex items-center">
              <em className="text-secondary">0996837511</em>
            </div>
          </div>
          <div className="flex gap-4">
            <div id="linkedIn" className="my-2">
              <h4 className="font-bold text-white mb-1">LinkedIn</h4>
              <a
                href="http://www.linkedin.com/in/alaa-al-jomaa-94b444236"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src={LinkedIn}
                  className="w-16 h-16"
                  alt="Alaa LinkedIn"
                  loading="eager"
                />
              </a>
            </div>
            <div id="github" className="my-2">
              <h4 className="font-bold text-white mb-1">GitHub</h4>
              <a
                href="https://github.com/alaaaljumaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src={Github}
                  loading="eager"
                  className="w-10 h-10 mt-4"
                  alt="Alaa LinkedIn"
                  
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Map */}
        <div className="flex-1 flex items-center">
          <div className="w-full h-64 md:h-72 rounded-xl border border-lightGreen/30 overflow-hidden">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Homs, Syria"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
