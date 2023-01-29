import Title from "../../shared/Title";
import {prices} from '@/data/price';
import SinglePricing from "./SinglePricing";

const Pricing = () => {
  return (
    <section className="pricing py-10 lg:py-16">
      <div className="container">
        {/* <!-- title --> */}
        <Title title={"Health Checkup Prices"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
          {
            prices.map((price) => <SinglePricing key={price.id} data={price}/>)
          }

        </div>
      </div>
    </section>
  )
}

export default Pricing;