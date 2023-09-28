import Image from 'next/image'
import Link from 'next/link'
import {linkData} from "@/public/data"

export const ContentCard =()=>{    
    return (    
        
        <section className='content-evenly scroll-smooth my-4' >
            <div className='place-content-center mx-8 grid grid-cols-1 gap-4  text-xs md:grid-cols-2 md:mx-24 md:px-28'>
            {linkData.map((note)=>{ 
                return(
                    <div className='p-6 rounded-md h-auto border-2 basis-1/2' key={Math.random()}>
                    <div >
                        <Link href={note.SemesterLink.toString()} target='_blank' className='h2 flex felx-row'  >
                            <Image src="https://github.com/NoOne-Cares/CERH/blob/dev/public/file.png?raw=true" width={25} height={25} alt="Picture of foldder" className='h-fit'/>
                            <span className='py-0.5 px-2'>{note.Semester}</span>  
                        </Link>
                    </div>
                    <div className='px-4 grid gap-y-2 py-2'>
                        <Link href={note.SubjectOneLink.toString()} target="_blank" className='h2 flex felx-row '>
                            <Image src="https://github.com/NoOne-Cares/CERH/blob/dev/public/file.png?raw=true" width={25} height={25} alt="Picture of foldder" className='h-fit'/>
                            <span className='py-0.5 px-2'>{note.SubjectOne.toString()}</span> 
                        </Link>
                        <hr />
                        <Link href={note.SubjectTwoLink.toString()} target='_blank' className='h2 flex felx-row'  >
                            <Image src="https://github.com/NoOne-Cares/CERH/blob/dev/public/file.png?raw=true" width={25} height={25} alt="Picture of foldder" className='h-fit' />
                            <span className='py-0.5 px-2'>{note.SubjectTwo}</span> 
                        </Link>
                        <hr />
                        <Link href={note.SubjetThreeLink.toString()} target='_blank' className='h2 flex felx-row'  >
                            <Image src="https://github.com/NoOne-Cares/CERH/blob/dev/public/file.png?raw=true" width={25} height={25} alt="Picture of foldder" className='h-fit'/>
                            <span className='py-0.5 px-2'>{note.SubjetThree}</span> 
                        </Link>
                        <hr />
                        <Link href={note.SubjectFourLink.toString()} target='_blank' className='h2 flex felx-row'  >
                            <Image src="https://github.com/NoOne-Cares/CERH/blob/dev/public/file.png?raw=true" width={25} height={25} alt="Picture of foldder" className='h-fit'/>
                            <span className='py-0.5 px-2'>{note.SubjectFour.toString()}</span> 
                        </Link>
                        <hr />
                        <Link href={note.SubjectFiveLink.toString()} target='_blank' className='h2 flex felx-row'  >
                            <Image src="https://github.com/NoOne-Cares/CERH/blob/dev/public/file.png?raw=true" width={25} height={25} alt="Picture of foldder" className='h-fit'/>
                            <span className='py-0.5 px-2'>{note.SubjectFive}</span> 
                        </Link>
                        <hr />
                        <Link href={note.SubjectSixLink.toString()} target='_blank'className='h2 flex felx-row'  >
                            <Image src="https://github.com/NoOne-Cares/CERH/blob/dev/public/file.png?raw=true" width={25} height={25} alt="Picture of foldder" className='h-fit'/>
                            <span className='py-0.5 px-2'>{note.SubjectSix}</span> 
                        </Link>
                        <hr />
                        <Link href={note.SubjectSevenLink.toString()} target='_blank'className='h2 flex felx-row'  >
                            <Image src="https://github.com/NoOne-Cares/CERH/blob/dev/public/file.png?raw=true" width={25} height={25} alt="Picture of foldder" className='h-fit'/>
                            <span className='py-0.5 px-2'>{note.SubjectSeven}</span> 
                        </Link>
                        <hr />
                        <Link href={note.SubjectEightLink.toString()} target='_blank'className='h2 flex felx-row'  >
                            <Image src="https://github.com/NoOne-Cares/CERH/blob/dev/public/file.png?raw=true" width={25} height={25} alt="Picture of foldder" className='h-fit'/>
                            <span className='py-0.5 px-2'>{note.SubjectEight}</span> 
                        </Link>
                    </div>
                </div>
                )
            })}
            </div>
        </section>
    )

}