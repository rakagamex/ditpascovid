import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({selectedPage, setSelectedPage})=>{
    const selectedStyles = 'relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]';




    return(
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
            className={`${selectedPage === 'home' ? selectedStyles:"bg-dark-grey"}
               w-3 h-3 rounded-full`}
            href="#home"
            onClick={()=>setSelectedPage('home')}

            />
             <AnchorLink
            className={`${selectedPage === 'course' ? selectedStyles:"bg-dark-grey"}
               w-3 h-3 rounded-full`}
            href="#course"
            onClick={()=>setSelectedPage('course')}

            />
            <AnchorLink
            className={`${selectedPage === 'teams' ? selectedStyles:"bg-dark-grey"}
               w-3 h-3 rounded-full`}
            href="#teams"
            onClick={()=>setSelectedPage('teams')}

            />
            <AnchorLink
            className={`${selectedPage === 'news' ? selectedStyles:"bg-dark-grey"}
               w-3 h-3 rounded-full`}
            href="#news"
            onClick={()=>setSelectedPage('news')}

            />
            <AnchorLink
            className={`${selectedPage === 'contact' ? selectedStyles:"bg-dark-grey"}
               w-3 h-3 rounded-full`}
            href="#contact"
            onClick={()=>setSelectedPage('contact')}

            />
        
        </div>

    )
}

export default DotGroup;