import {IoClose} from 'react-icons/io5';

const VideoModal = ({setShow}) => {
  return (
    <div className='h-screen w-full fixed inset-0 z-40 flex items-center justify-center px-4'>
    <div onClick={() => setShow(false)} className='h-screen w-full bg-black/50 fixed inset-0 z-40 flex items-center justify-center'></div>
      <div className="w-full max-w-[900px] 2xl:max-w-[1100px] h-auto bg-white relative z-50">
        {/* close modal button */}
        <button type='button' onClick={() => setShow(false)} className='absolute top-2 right-2 h-8 w-8 flex items-center justify-center bg-secondary rounded-full z-50'>
          <IoClose className='text-white text-xl'/>
        </button>

        <video controls>
          <source src="/video/demo.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}

export default VideoModal;