import { Info } from "../cards"
import { Container, Paragraph, Title } from "../shared";
import acerca from '../../assets-src/images/AcercaDe.jpg';

export const AboutUs = () => {
  return (
    <section id="about-us">
        <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
            <div className="w-full md:w-5/12 lg:w-1/2"> 
                <div className="w-full h-80 sm:h-96 relative">
                    <img 
                        src={acerca} 
                        alt="About our mission" 
                        className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                    />
                </div>
            </div>
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col ">
                <Title className="mb-3">
                    Acerca de nuestras <span className="bg-gradient-to-r from-orange-900 to-blue-900 text-transparent bg-clip-text"> Soluciones Técnicas </span> 
                </Title>
                <Paragraph>
                    Nos motiva llevar al sector de servicios de construcción una amplia gama de soluciones técnicas, basadas en los más altos estándares de calidad y bajo normativas internacionales para que los resultados sean los mejores, optimizando los recursos disponibles.
                </Paragraph>

                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                    <Info 
                        title="Mision" 
                        description="Brindar servicios de mantenimiento y construcción bajo los másaltos estándares de calidad."
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            />
                        </svg>
                    </Info>
                    <Info 
                        title="Vision" 
                        description="Ser un referente en la industria de servicios de mantenimiento y costrucción"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            />
                        </svg>
                    </Info>
                </div>
            </div>
        </Container>

    </section>
  )
}
