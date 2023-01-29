import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const SingleCounter = ({counterData}) => {
  const {count, feature} = counterData;

  return (
    <li className="w-1/2 sm:w-1/3 lg:w-full text-center">
      <p className="text-[40px] lg:text-5xl xl:text-[64px] font-semibold text-[rgba(255,255,255,0.16)]">{count}+</p>
      
      <CountUp start={0} end={count}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start}>
            <p className="text-2xl lg:text-3xl xl:text-5xl leading-9 xl:leading-[72px] -mt-9 md:-mt-8 lg:-mt-7 xl:-mt-10 font-semibold text-white">
              <span ref={countUpRef} />+
            </p>
          </VisibilitySensor>
        )}
      </CountUp>
      <span className="block text-sm lg:text-base xl:text-xl 2xl:text-2xl text-white">{feature}</span>
    </li>
  )
}

export default SingleCounter;