import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion";

const Testimonials = () =>{
    const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
    justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;


    return (
        <section id="penyusun" className="pt-32 pb-16" >
            {/* HEADING */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
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
                        <span className="text-red">TIM PENYUSUN</span>
                    </p>
                    <LineGradient width="mx-auto w-2/4" />
                    <p className="mt-10 mb-7">
                        Tim penyusun modul elearning ini melibatkan berbagai pihak baik dari DITJENPAS, UNODC dan beberapa ahli dalam bidang kesehatan. 
                        
                    </p>
                </motion.div>

                {/* TESTIMONIALS */}
                <div className="md:flex md:justify-between gap-8">
                    <motion.div
                    className={`bg-red ${testimonialStyles} before:content-ditpas1`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ delay:0.2, duration: 0.5}}
                    variant={{
                        hidden:{ opacity: 0, scale: 0.8},
                        visible:{ opacity: 1, scale: 1}
                    }}
                    >
                        <p className="text-center text-xl">
                        Bpk. Elly Yuzar
                        </p>
                        <p className="text-center font-semiboldtext-xl">
                        Direktur Perawatan Kesehatan dan Rehabilitasi
                        </p>

                    </motion.div>

                    <motion.div
                    className={`bg-blue ${testimonialStyles} before:content-ditpas2`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ delay:0.2, duration: 0.5}}
                    variant={{
                        hidden:{ opacity: 0, scale: 0.8},
                        visible:{ opacity: 1, scale: 1}
                    }}
                    >
                        <p className="text-center text-xl">
                        Dr. Hetty Widyastuti
                        </p>
                        <p className="text-center font-semiboldtext-xl">
                        Koordinator Perawatan Kesehatan Khusus dan Rehabilitasi
                        </p>
                        

                    </motion.div>

                    <motion.div
                    className={`bg-yellow ${testimonialStyles} before:content-ditpas3`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ delay:0.4, duration: 0.5}}
                    variant={{
                        hidden:{ opacity: 0, scale: 0.8},
                        visible:{ opacity: 1, scale: 1}
                    }}
                    >
                        <p className="text-center text-xl">
                        Hendra
                        </p>
                        <p className="text-center font-semiboldtext-xl">
                        DITJENPAS
                        </p>
                        

                    </motion.div>

                    <motion.div
                    className={`bg-red ${testimonialStyles} before:content-unodcman`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ delay:0.2, duration: 0.5}}
                    variant={{
                        hidden:{ opacity: 0, scale: 0.8},
                        visible:{ opacity: 1, scale: 1}
                    }}
                    >
                        <p className="text-center text-xl">
                        Bpk. Ade Aulia
                        </p>
                        <p className="text-center font-semiboldtext-xl">
                        Coodinator DDR Programme and HIV from UNODC
                        </p>

                    </motion.div>   

                    <motion.div
                    className={`bg-blue ${testimonialStyles} before:content-unodcman`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ delay:0.2, duration: 0.5}}
                    variant={{
                        hidden:{ opacity: 0, scale: 0.8},
                        visible:{ opacity: 1, scale: 1}
                    }}
                    >
                        <p className="text-center text-xl">
                        Dr. Surya Anaya
                        </p>
                        <p className="text-center font-semiboldtext-xl">
                        UNODC
                        </p>
                        

                    </motion.div>

                    <motion.div
                    className={`bg-yellow ${testimonialStyles} before:content-doctormale`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ delay:0.4, duration: 0.5}}
                    variant={{
                        hidden:{ opacity: 0, scale: 0.8},
                        visible:{ opacity: 1, scale: 1}
                    }}
                    >
                        <p className="text-center text-xl">
                        dr. Hari Nugroho
                        </p>
                        <p className="text-center font-semiboldtext-xl">
                        Head of Facilitating Government-based Rehabilitation Section
                        BNN
                        </p>
                        

                    </motion.div>

                 

                </div>

        </section>

    )
}

export default Testimonials;