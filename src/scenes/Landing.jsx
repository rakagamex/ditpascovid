import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";



const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    


    return (
        <section 
        id="beranda"
        className = "md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/*IMAGE SECTION*/}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div
                        className=""
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                            max-w-[400px] md:max-w-[600px]"
                            src="assets/bangtantelapas3.png"/>
                    </div>
                ):(
                    <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                            max-w-[400px] md:max-w-[600px]"
                            src="assets/bangtantelapas3.png"/>
                )}
            </div>
                {/*MAIN SECTION*/}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/*HEADINGS*/}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5}}
                    variant={{
                        hidden:{ opacity: 0, x: -50},
                        visible:{ opacity: 1, x:0}
                    }}
                    >
                        <p className="text-5xl font-playfair z-10 text-center md:text-end xs:before:content-virus2">
                        COVID-19 ELEARNING {""}
                    
                            
                        </p>

                        <p className="mt-10 mb-7 text-xl text-center md:text-start">
                            Selamat datang dalam program pembelajaran <strong>online</strong> tentang 
                            Pedoman Pencegahan dan Penanggulangan <strong>COVID-19</strong> di <strong>UPT PEMASYARAKATAN</strong>
                        </p>
                    </motion.div>

                    {/*CALL TO ACTION*/}
                    <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ delay:0.2, duration: 0.5}}
                    variant={{
                        hidden:{ opacity: 0, x: -50},
                        visible:{ opacity: 1, x:0}
                    }}
                    >
                        <button
                            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                            hover:bg-blue hover:text-white transition duration-500"
                            onClick={()=> {window.location.href = 'https://lms.pedulicovid19-pemasyarakatan.com'}}
                           
                        >
                        Login

                        </button>
                        <AnchorLink
                            className="rounded-r-rm bg-gradient-rainblue py-0.5 pr-0.5"
                            onClick={()=> setSelectedPage("kontak")}
                            href="#kontak"
                        >
                            <div 
                            className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
                            justify-center font-playfair px-10"
                            >
                            Hubungi Kami
                            </div>
                       

                        </AnchorLink>

                    </motion.div>

                    <motion.div
                     className="flex mt-5 justify-center md:justify-start"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once: true, amount: 0.5}}
                     transition={{ delay:0.4, duration: 0.5}}
                     variant={{
                         hidden:{ opacity: 0, x: -50},
                         visible:{ opacity: 1, x:0}
                     }}
                    >
                        <SocialMediaIcons />

                    </motion.div>


                </div>
        
        </section>
    )

}

export default Landing;