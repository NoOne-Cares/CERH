import Link from "next/link"
import Image from "next/image"


const HeroSection = () =>{

    return(
            <section className="constainer h-screen bg-gradient-to-b from-blue to-blue scroll-smooth">
            <div className="w-full flex flex-col items-center h-screen align-middle
                                md:flex md:flex-row md:w-full md:px-24 md:align-middle place-content-center">
                <Image 
                    src="https://github.com/NoOne-Cares/CERH/blob/dev/public/xyz.png?raw=true"
                    alt="Landscape picture"
                    width={800}
                    height={800}
                    className="w-56 
                                md:basis-1/2 md:w-0.5 md:pt-0.5 md:order-last "
                />
                
                <div>
                <div className="container  text-gray-300 flex flex-col items-center text-left md:place-content-left ">
                    <h1 className="text-3xl font-extrabold font-sans text-center md:text-left">
                        WELLCOME  TO
                        <br />
                        CIVIL  ENGINEERING
                        <br />
                        RESOURCE  HUB
                    </h1>
                    <p className="text-center text-xs px-14 pt-6 max-w-sm md:text-left ">
                        Embark on your educational journey with confidence. Explore our 
                        resource hub and embrace the limitless opportunities that await
                        you in the world of civil engineering.
                    </p>
                    <Link href="#Notes"> 
                    <div className="pt-10">
                        <button className="bg-pink-600 px-8 py-0.5 rounded-full m">Explore</button>        
                    </div>
                    </Link>
                    
                </div>
                </div>
                </div>
            </section>
    )
}

export default HeroSection
