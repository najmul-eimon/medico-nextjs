import Image from 'next/image';
import { useEffect, useState } from 'react';
import VideoModal from './VideoModal';

const Video = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    showModal ? body.style.overflow = "hidden" : body.style.overflow = "visible";
  }, [showModal]);

  return (
    <>
      <section className="video md:py-10">
        <div className="container">
          <div className="relative h-[380px] md:h-auto rounded-[20px] overflow-hidden">
            <Image src="/images/video.png" width={1296} height={380} className="w-full h-full object-cover" alt="Video" />
            
            <div className="h-full w-full bg-black/20 absolute inset-0 flex items-center justify-center z-20">
              <button type='button' onClick={() => setShowModal(true)} className="relative video-popup h-[50px] lg:h-[92px] w-[50px] lg:w-[92px] flex items-center justify-center">
                <Image src="/images/svg/play.svg" width={68} height={74} alt="Play icon" />
                <span className="absolute top-0 left-0 h-[50px] lg:h-[92px] w-[50px] lg:w-[92px] flex items-center justify-center animate-[play-animation] play-animation">
                  <Image src="/images/svg/play.svg" width={68} height={74} alt="Play icon" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* video modal */}
      {
        showModal && <VideoModal setShow={setShowModal}/>
      }
    </>
  )
}

export default Video;