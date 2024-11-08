import Acordion from "../accordion/Index";

export default function SectionOqueE(){

    const divAcordion1 = [
        {
            id:"accordion1" ,
            title:"De Ortodontistas para profissionais" ,
            text:"Trabalhe com uma ferramenta criada por Ortodontistas que entendem cada detalhe do seu dia a dia clínico.",
            style:"w-[100%] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded" //syles gerais
        },

        {
            id:"accordion2" ,
            title:"Monitoramento remoto dos casos " ,
            text:"Somos pioneiros no Brasil a oferecer esse serviço que facilita tanto a vida do profissional quanto do paciente, tudo via plataforma New Aligner.",
            style:"w-[100%] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded" //syles gerais
        },

        {
            id:"accordion3" ,
            title:"Todo material que você precisa" ,
            text:"Receba um kit de materiais completo para começar com o New Aligner em sua clínica ou consultório, descubra mais detalhes descendo a página!",
            style:"w-[100%] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded" //syles gerais
        },

        {
            id:"accordion4" ,
            title:"Suporte clínico diferenciado" ,
            text:"Esteja amparado(a) por um suporte formado 100% por ortodontistas.",
            style:"w-[100%] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded" //syles gerais
        }
    ]

    const divAcordion2 = [
        {
            id:"accordion5" ,
            title:"TOHi - Tratamento Ortodôntico Híbrido" ,
            text:"Inicie o tratamento com aparelho autoligado estético e finalize com alinhadores. Tudo guiado desde o início pelo Planning Center New Aligner.",
            style:"w-[100%] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded" //syles gerais
        },

        {
            id:"accordion7" ,
            title:"Excelente rentabilidade" ,
            text:"Acesso a melhor tecnologia de alinhamento ortodôntico por um preço justo e competitivo.",
            style:"w-[100%] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded" //syles gerais
        },

        {
            id:"accordion8" ,
            title:"Diferencial estratégico" ,
            text:"Adote a Ortodontia Digital nos protocolos da sua clínica e mostre para seus pacientes que você trabalha com o que há de mais moderno no seu ramo.",
            style:"w-[100%] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded" //syles gerais
        }
    ]

    return (
        <section className="m-auto max-w-[1450px] px-5 md:px-[5%] lg:px-[95px] text-[18px]">
            <div data-aos="fade-up" data-aos-duration="1500">
                <h1 className="min-h-[165px] sm:min-h-[0px] md:min-h-[85px] xl:min-h-[45px] mb-4 text-4xl text-center font-bold text-gradient ">
                    O que é, e o que eu ganho me tornando um New Aligner Expert?
                </h1>
                <p className="text-center">
                    Para começar a utilizar os alinhadores New Aligner no seu dia a dia clínico, é necessário primeiro passar pelo nosso credenciamento que conta com inúmeras vantagens para você profissional, desde como lidar com os alinhadores em nível técnico até como abordar os pacientes que buscam um tratamento mais moderno.
                </p>
                <h2 className="text-3xl font-bold text-center my-5">
                    Só o New Aligner Expert tem
                </h2>
            </div>
        
            <div className="w-full flex flex-col md:flex-row items-center md:items-start lg:items-start justify-around gap-2 lg:gap-5 mb-20 ">
                
                <div className="flex flex-col gap-2 lg:gap-3" data-aos="zoom-in-right" data-aos-duration="1500">
                    {divAcordion1.map( (accordion, index) =>
                        <Acordion key={index} id={accordion.id} title={accordion.title} text={accordion.text} style={accordion.style} />
                    )}
                </div>

                <div className="flex flex-col gap-2 lg:gap-3"  data-aos="zoom-in-left" data-aos-duration="1500">
                    {divAcordion2.map( (accordion, index) =>
                        <Acordion key={index} id={accordion.id} title={accordion.title} text={accordion.text} style={accordion.style} />
                    )}
                </div>
            </div>
        </section>
    )
}