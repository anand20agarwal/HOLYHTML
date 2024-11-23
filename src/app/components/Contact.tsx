import React from 'react'
import { BackgroundBeams } from './ui/background-beams'

const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className="relative rounded-2xl bg-slate-800   mb-20 mt-20 text-gray-100 max-w-6xl  xl:mx-auto min-h-96 h-full  overflow-hidden pb-4">
                    <div className='absolute inset-0 top-0  bg-grid-slate-700/50 sm:h-[5rem]'></div>

                    <div className='lg:grid lg:grid-cols-1 gap-10 p-2 md:p-8 relative z-20'>
                        <div className='text-center lg:text-left'>
                            <h2 className='text-2xl md:text-4xl font-bold my-4  text-center'>Let's build your website today!</h2>
                            <div className='flex items-center justify-center text-center my-8'>
                                <p className=' text-base text-gray-300 md:text-lg tracking-wide font-light max-w-lg mx-auto"'>Contact us and we will get back within 24 hours. We mean it. You saw the testimonials, right?</p>
                            </div>
                            <div className='flex justify-center'>
                                <a href="#" className='class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-white ring-1 ring-slate-100 hover:bg-white/25 hover:ring-slate-900/15 mx-auto"'>Contact</a>
                            </div>
                        </div>
                    </div>

                    <BackgroundBeams />
                </div>
            </section>
        </>
    )
}

export default Contact