import { Button, Container, Paragraph } from "../shared"
import { ContactForm } from "./ContactForm"

export const CallToAction = () => {
  return (
    <section id="cta" className="pb-20 relative">
        <Container>
            <div className="relative rounded-2xl overflow-hidden">
                <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1"> Empieza a desarrolar tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-900 to-blue-900">proyecto con nosotros.</span></h1>
                    <Paragraph className="pt-10">
                        Llena el siguiente formulario con tus datos y un breve comentario y muy pronto nos pondremos en contacto para brindarte una solución técnica.
                    </Paragraph>
                    <div className="pt-5 mx-auto max-w-md sm:max-w-xl dark:text-white">
                        {/* <Button className=" hover:bg-violet-900 hover:scale-105 hover:font-bold"> Get in touch </Button> */}
                    </div>
                </div>
            </div>
            <ContactForm></ContactForm>
        </Container>
    </section>
  )
}
