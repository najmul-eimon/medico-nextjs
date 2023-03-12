import Link from 'next/link';
import {FiCheck} from 'react-icons/fi';

const SinglePricing = ({data}) => {
  const {price, packageName, features, status} = data;

  return (
    <div className={`${status === 'active' ? 'active' : ''} pricing-card h-fit rounded-[10px] bg-white shadow-[0px_4px_20px_rgba(4,90,181,0.08)] p-6 hover:shadow hover:shadow-[rgba(4,90,181,0.08)] transition-all duration-300`}>
      <h4 className="text-primary-text font-bold text-[32px]">${price.toLocaleString()}</h4>
      <h5 className="py-4 lg:py-6 text-primary-text font-light text-2xl">{packageName}</h5>

      <ul className="space-y-4 mb-4 lg:mb-6">
        {
          features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <FiCheck className={`text-2xl ${status === 'active' ? 'text-white' : 'text-primary'}`}/>
              <p className="text-sm text-primary-text/60">{feature}</p>
            </li>
          ))
        }
      </ul>

      <div className="text-center">
        <Link href="/" className="inline-block py-3 px-12 text-white text-sm font-semibold rounded-md bg-primary shadow-[0px_10px_10px_rgba(55,214,201,0.24)] hover:bg-primary-alt hover:shadow-none">Choose Plan</Link>
      </div>
    </div>
  )
}

export default SinglePricing;