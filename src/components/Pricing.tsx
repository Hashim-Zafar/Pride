import { pricingList } from "../utils/constants";

function Pricing() {
  return (
    <section className="scroll-section ">
      {/* container to center the content */}
      <div className="max-w-6xl mx-auto h-full w-full flex flex-col gap-8">
        <div>
          <h2>Choose Your Plan</h2>
          <p>Pick a Plan that fits your needs , Cancel anytime</p>
        </div>
        {/* grid-container */}
        <div className="grid-container h-[70%]  ">
          {/* price-card */}
          {pricingList.map((card) => (
            <div className="price-container ">
              <div className="flex flex-col gap-4 border-b-2 border-gray-600">
                <h4 className={`${card.textColor}`}>{card.access}</h4>
                <div className="mb-4">
                  <p>Rs 0 for 1 month</p>
                  <span>Rs {card.price}/month after</span>
                </div>
              </div>
              {/* Features div */}
              <div>
                <ul>
                  <li>{card.accountFeatures.account}</li>
                  <li>{card.accountFeatures.Benifit}</li>
                  <li>{card.accountFeatures.paymentMethod}</li>
                </ul>
              </div>

              <button className={`btn-trial ${card.background}`}>
                Try 1 month for Rs 0
              </button>
              <button className="btn-one-time">One-time payment</button>

              <span className="text-center">{card.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
