import { services } from "../../utils/services-data";
import { Service } from "../cards";
import { Container, Paragraph, Title } from "../shared";

export const Services = () => {
  return (
    <section id="services">
        <Container className="space-y-10 md:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <Title> Our AI Services</Title>
                <Paragraph>
                    Unlock the potencial of advance machine learning, natural language processing, and predictive analytics. 
                    Our services include:
                </Paragraph>
            </div>
            <div>
                {services.map((service, key) => (
                    <Service 
                        key={key}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    >

                    </Service>

                ))
                    
                }
            </div>
        </Container>
    </section>
  )
}
