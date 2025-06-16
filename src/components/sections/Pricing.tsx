import { pricingPlans } from "../../utils/pricing-plans"
import { Container, Paragraph, Title } from "../shared"


export const Pricing = () => {
  return (
    <section id="pricing" className="py-5">
        <Container className="text-center">
            <Title> Pricing </Title>
            <Paragraph className="mt-4">
                Choose the plan that's right for your business!
            </Paragraph>
        </Container>

        <div>
          {pricingPlans.map((plan, key) => (
            <div key={key} className="relative group h-full">
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">
                  {plan.bestValue && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600">Best Value</div> )}
                  
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
