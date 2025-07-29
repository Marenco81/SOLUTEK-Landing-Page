import { Container, Title } from "../shared";
import proyecto1 from "../../assets-src/images/proyecto1.jpg";
import proyecto2 from "../../assets-src/images/proyecto2.jpg";
import proyecto3 from "../../assets-src/images/proyecto3.jpg";


const logos = [
     "sur",
     "holcim",
     "cemex",
     "lanco",
     "sika",
     "amanco",
     "ferromax",
     "eaton",
     "sylvania",
     "square",
    ];

export const Brands = () => {
  return (
    <section>
        <Container className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
                <Title>
                    Empleamos las mejores marcas del mercado.
                </Title>
                <h6 className="text-heading-3 text-xs lg:text-sm mt-4">*Imagenes con fines ilustrativos</h6>
            </div>
            <div className="flex justify-center flex-wrap gap-4">
                {logos.map((logo, key) => (
                    <div 
                        key={key}
                        className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group ease-linear duration-300 hover:bg-blue-50"
                    >
                        <img 
                            src={`/assets/logos/${logo}.png`} 
                            alt={logo}
                            width="100"
                            height="60" 
                            className="h-7 sm:h-10 w-auto ease-linear duration-300 dark:grayscale group-hover:!grayscale-0 group-hover:scale-105 "
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center w-full mt-20 mx-3 gap-5"> 
                <div className="w-full h-80 sm:h-96 relative">
                    <img 
                        src={proyecto1} 
                        alt="About our mission" 
                        className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                    />
                </div>
                <div className="w-full h-80 sm:h-96 relative">
                    <img 
                        src={proyecto2} 
                        alt="About our mission" 
                        className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                    />
                </div>
                <div className="w-full h-80 sm:h-96 relative">
                    <img 
                        src={proyecto3} 
                        alt="About our mission" 
                        className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                    />
                </div>
            </div>
        </Container>
    </section>
  )
}
