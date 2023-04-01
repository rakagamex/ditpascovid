import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({selectedPage, setSelectedPage})=>{
    const selectedStyles = 'relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]';




    return(
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
            className={`${selectedPage === 'beranda' ? selectedStyles:"bg-dark-grey"}
               w-3 h-3 rounded-full`}
            href="#beranda"
            onClick={()=>setSelectedPage('beranda')}

            />
             <AnchorLink
            className={`${selectedPage === 'kursus' ? selectedStyles:"bg-dark-grey"}
               w-3 h-3 rounded-full`}
            href="#kursus"
            onClick={()=>setSelectedPage('kursus')}

            />
            <AnchorLink
            className={`${selectedPage === 'penyusun' ? selectedStyles:"bg-dark-grey"}
               w-3 h-3 rounded-full`}
            href="#penyusun"
            onClick={()=>setSelectedPage('penyusun')}

            />
            <AnchorLink
            className={`${selectedPage === 'kegiatan' ? selectedStyles:"bg-dark-grey"}
               w-3 h-3 rounded-full`}
            href="#kegiatan"
            onClick={()=>setSelectedPage('kegiatan')}

            />
            <AnchorLink
            className={`${selectedPage === 'kontak' ? selectedStyles:"bg-dark-grey"}
               w-3 h-3 rounded-full`}
            href="#kontak"
            onClick={()=>setSelectedPage('kontak')}

            />
        
        </div>

    )
}

export default DotGroup;