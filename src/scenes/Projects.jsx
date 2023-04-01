import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion";

const container = {
    hidden:{},
    visible:{
        transition:{staggerChildren: 0.2}
    }

};

const projectVariant = {
    hidden:{ opacity:0, scale:0.8},
    visible:{opacity:1, scale:1}
};


const Project =({title, kegiatan})=> {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    {kegiatan}
                </p>
            </div>
            <img src={`assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    )

}



const Projects = () =>{
    return(
        <section id="kegiatan" className="pt-48 pb-48">
            {/*HEADING*/}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variant={{
                    hidden:{ opacity: 0, y: -50},
                    visible:{ opacity: 1, y:0}
                }}
                >
                    <div>
                        <p className="font-playfair font-semibold text-4xl">
                            KE<span className="text-red">GIAT</span>AN
                        </p>
                        <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                        </div>
                        
                    </div>
                    <p className="mt-10 mb-10">
                        Berbagai kegiatan telah dilakukan dalam rangka penyusunan modul elearning ini dan sosialisasi materi kursus. 
                        
                    </p>
                </motion.div>

                {/*PROJECTS*/}
                <div className="flex justify-center">
                <motion.div
                className="sm:grid sm:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                
                variant={{
                    container
                }}
                >
                    {/* ROW 1*/}
                    <div className="flex justify-center text-center items-center p-10 bg-red
                            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        MULAI DARI PENYUSUNAN MODUL
                    </div>
                    <Project title="kegiatan 1" kegiatan="Workshop finalisasi modul" />
                    <Project title="kegiatan 2" kegiatan="Workshop finalisasi modul"/>

                    {/* ROW 2*/}
                    <Project title="kegiatan 3" kegiatan="Training prison information system" />
                    <Project title="kegiatan 4" kegiatan="Penguatan 20 UPT Pemasyarakatan percontohan"/>
                    <Project title="kegiatan 5" kegiatan="Penguatan peningkatan layanan kesehatan warga binaan"/>

                    {/* ROW 3*/}
                    <Project title="kegiatan 6" kegiatan="Penguatan peningkatan layanan kesehatan warga binaan" />
                    <Project title="kegiatan 7" kegiatan="Penguatan peningkatan layanan kesehatan warga binaan"/>
                    <div className="flex justify-center text-center items-center p-10 bg-blue
                            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        HINGGA SOSIALISASI DAN PENGUATAN
                    </div>



                </motion.div>
                </div>

        </section>

    )

}

export default Projects;