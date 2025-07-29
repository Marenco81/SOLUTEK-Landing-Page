import { services } from "../../utils/services-data";
import { Service } from "../cards";
import { Container, Paragraph, Title } from "../shared";

export const Services = () => {
  return (
    <section id="services">
        <Container className="space-y-10 md:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <Title> Nuestros Servicios</Title>
                <Paragraph>
                    Brindamos servicios de mantenimiento preventivo para edificaciones, con soluciones técnicas especializadas y altos estándares de calidad que aseguran el óptimo funcionamiento y conservación de las estructuras. 
                    Nuestros servicios incluyen:
                </Paragraph>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
