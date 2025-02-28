import Tabs from "../UI/Tabs";

import Button from "../UI/Button";

import pricingData from "../BoilerplateData/pricingPlan";
import { PlanType } from "../BoilerplateData/pricingPlan";
import { useState } from "react";

const SelectPlan: React.FC = () => {
    const [planType, setPlanType] = useState<PlanType>("month");
    //wasup
    const plans = pricingData.filter(plan => plan.type === planType).map((plan) => (
        <div className="card max-w-lg p-10">
            <h4 className="h4">{plan.title}</h4>
            <p className="mt-4 text-gray-5">{plan.text}</p>

            <p className="mt-8 text-gray-5">
                <span className="text-4xl text-white">{`$${plan.price}`}</span>/
                {plan.type}
            </p>

            <div className="mt-8 flex gap-4">
                <Button
                    className="w-full"
                    btnType="blank"
                    text="Start Free Trial"
                />
                <Button
                    className="w-full"
                    btnType="accent"
                    text="Choose Plan"
                />
            </div>
        </div>
    ));

    return (
        <section id="selectPlan" className="py-24">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="h2">
                            Choose the plan that's right for you
                        </h2>
                        <p className="mt-8 text-gray-5">
                            Join StreamVibe and select from our flexible
                            subscription options tailored to suit your viewing
                            preferences. Get ready for non-stop entertainment!
                        </p>
                    </div>

                    <Tabs>
                        <button onClick={() => setPlanType("month")} className="navlink navlink_active">
                            <p>Monthly</p>
                        </button>
                        <button onClick={() => setPlanType("year")} className="navlink">
                            <p>Yearly</p>
                        </button>
                    </Tabs>
                </div>

                <div className={`mt-16 grid grid-cols-${plans.length} gap-8 justify-items-center`}>{plans}</div>
            </div>
        </section>
    );
};

export default SelectPlan;
