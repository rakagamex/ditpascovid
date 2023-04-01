import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";

const MyCourse = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return(
        <section id="kursus" className="pt-10 pb-24">
            {/*HEADER AND IMAGE SECTION*/}
            <div className="md:flex  md:justify-between md:gap-16 mt-32">
                <motion.div
                className="md:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variant={{
                    hidden:{ opacity: 0, x: -50},
                    visible:{ opacity: 1, x:0}
                }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        <span className="text-red">KURSUS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        Saat ini sudah terdapat 2 buah modul kursus, yaitu 1 modul untuk staf umum dan 1 modul khusus untuk tenaga nakes. 
                        
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                         <div
                         className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                         before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                     >
                         <img
                             alt="course"
                             className="z-10"
                             src="assets/kursus-image.png"/>
                     </div>
                    ):(
                        <img
                             alt="course"
                             className="z-10"
                             src="assets/kursus-image.png"/>
                    )}
                </div>
            </div>
            {/*COURSE*/}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/*MODUL A-UMUM*/}
                <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variant={{
                    hidden:{ opacity: 0, y: 50},
                    visible:{ opacity: 1, y:0}
                }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                               Modul A-Umum
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Seluruh staf yang ada di UPT PEMASYARAKATAN diwajibkan untuk mempelajari dan memahami <strong>Modul A-Umum</strong> ini, 
                        dalam mendukung <strong>Pencegahan dan Penanggulan COVID-19 di UPT PEMASYARAKATAN</strong>.
                    </p>

                </motion.div>

                {/*MODUL B-NAKES*/}
                <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2,  duration: 0.5}}
                variant={{
                    hidden:{ opacity: 0, y: 50},
                    visible:{ opacity: 1, y:0}
                }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                            Modul B-Nakes
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Bagi seluruh tenaga kesehatan yang berada di UPT PEMASYARAKATAN, wajib mempelajari dan memahami <strong>Modul B-Nakes</strong> ini dalam usaha <strong>Pencegahan dan Penanggulan COVID-19 di UPT PEMASYARAKATAN</strong> . 
                    </p>

                </motion.div>

            </div>
        </section>
    )

};

export default MyCourse;