import Link from "next/link"
import Image from "next/image"
const Footer =()=>{
    return(
        <>
            <section className="bg-gradient-to-b from-blue to-blue pb-10 text-gray-300">
                <h1 className="text-center text-4xl font-extrabold font-sans py-8">Thanks for visiting</h1>
                <section className="w-full flex flex-col items-center align-middle text-center md:flex md:flex-row md:w-full md:px-10 md:gap-20 md:align-middle md:place-content-center">
                    <div>
                        <h1 className="text-center text-1xl font-extrabold font-mono py-2">Social Handles</h1>
                        <ul className="w-full flex flex-col items-center align-middle text-center md:flex-none md:items-start md:pl-3">
                            <li>
                                <Link href="https://m.facebook.com/129972693523204/"
                                    className="flex felx-row items-center gap-2">
                                <Image 
                                    src="https://github.com/NoOne-Cares/CERH/blob/dev/public/fb_icon.png?raw=true"
                                    alt="Landscape picture"
                                    width={20}
                                    height={20}
                                    className="h-4 w-auto "
                                    />
                                    <span className="font-mono">Facebook</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/company/ces-nit-silchar/" className="flex felx-row items-center gap-2">
                                <Image 
                                    src="https://raw.githubusercontent.com/NoOne-Cares/CERH/dev/public/ln_icon.png"
                                    alt="linkdien logo"
                                    width={20}
                                    height={20}
                                    className="h-4 w-auto "
                                    />
                                    <span className="font-mono">Linkden</span>
                                </Link>
                            </li>
                            <li>
                                    <Link href="https://instagram.com/civilengineeringsocietynits?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className="flex felx-row items-center gap-2">
                                        <Image 
                                            src="https://github.com/NoOne-Cares/CERH/blob/dev/public/insta_icon.png?raw=true"
                                            alt="insta logo"
                                            width={20}
                                            height={20}
                                            className="h-4 w-auto "
                                            />
                                            <span className="font-mono">Instagrm</span>
                                        </Link>
                            </li>
                            <li>
                                    <Link href="https://github.com/NoOne-Cares/CERH" target="_blank" passHref className="flex felx-row items-center gap-2">
                                        <Image 
                                            src="https://github.com/NoOne-Cares/CERH/blob/dev/public/github_icon.png?raw=true"
                                            alt="Landscape picture"
                                            width={20}
                                            height={20}
                                            className="h-4 w-auto "
                                            />
                                            <span className="font-mono">Github</span>
                                        </Link>
                            </li>
                            <li>
                                    <Link href="mailto:srisumandas66@gmail.com" passHref className="flex felx-row items-center gap-2">
                                        <Image 
                                            src="https://github.com/NoOne-Cares/CERH/blob/dev/public/mail_icon.png?raw=true"
                                            alt="Landscape picture"
                                            width={20}
                                            height={20}
                                            className="h-4 w-auto "
                                            />
                                        <span className="font-mono">Email</span>
                                    </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1  className="text-center text-1xl font-extrabold font-mono pt-4 md:pt-0  md:py-2">Links</h1>
                        <ul>
                            <li>
                                    <Link href="https://forms.gle/uWb9Mu3j358i6f1b8">
                                        <span className="font-mono">Feedback</span>
                                    </Link>
                            </li>
                            <li>
                                    <Link href="https://forms.gle/6XmQaCto9u8gKxQz5">
                                        <span className="font-mono">Upload</span>
                                    </Link>
                            </li>
                            <li>
                                    <Link href="http://www.nits.ac.in/">
                                        <span className="font-mono">Nits Site</span>
                                    </Link>
                            </li>
                            <li>
                                    <Link href="http://www.nits.ac.in/noticeboard.php">
                                        <span className="font-mono">Notices</span>
                                    </Link>
                            </li>
                            <li>
                                    <Link href="http://www.nits.ac.in/campuslife/campusfacilities.php">
                                        <span className="font-mono">Campus</span>
                                    </Link>
                            </li>    
                            
                        
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Footer
