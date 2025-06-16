import { Info } from "../cards"
import { Container, Paragraph, Title } from "../shared"

export const AboutUs = () => {
  return (
    <section id="about-us">
        <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
            <div className="w-full md:w-5/12 lg:w-1/2"> 
                <div className="w-full h-80 sm:h-96 relative">
                    <img 
                        src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="About our mission" 
                        className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                    />
                </div>
            </div>
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col ">
                <Title className="mb-3">
                    About Our AI Solution
                </Title>
                <Paragraph>
                    We are on a mission to empower businesses with transformative AI
                    technology. Our team of experts combines industry‑leading research
                    with innovative algorithms to deliver a platform that adapts to your
                    unique needs. Join us and lead the digital revolution in your
                    industry.
                </Paragraph>

                <div>
                    <Info title="xoxo" description="xoxo"></Info>
                </div>
            </div>
        </Container>

    </section>
  )
}
