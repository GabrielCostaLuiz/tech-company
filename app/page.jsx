import localFont from 'next/font/local'
const mainFontFamily = localFont({ src: '../fonts/PeckhamPress-Trial.otf' })

export default function Home() {

// Font files can be colocated inside of `pages`

  return (
    <div className="">
      <div className="flex px-14">
        <div className="flex-1">

        <h1 className={`mt-20 text-6xl ${mainFontFamily.className}`}>Trusted by athletes</h1>
        <p className='mt-6 mb-10 text-[#808080] font-semibold w-[25rem] '>Integrated with A.I to ensure your massage pressure is never compromised</p>

        <div className='flex gap-4 items-center'>
          <p className='text-3xl font-semibold'>18 <span className='text-xl'>Months</span> <span className='block text-base text-[#808080] mt-[0.7rem]'>Included Warranty</span></p>
          <p className='text-3xl font-semibold'>10000+ <span  className='block text-base text-[#808080] mt-[0.7rem]'>Loyal customers</span></p>
          <figure>
            <img src="/assets/stars.svg" alt="stars" />
            <figcaption>
              <p className='text-[#808080] font-semibold'>Stars</p>
            </figcaption>
          </figure>
        </div>

        <div className='mt-10 space-y-12 '>
          <button type='button' className=' bg-[#2bf6fa] text-black p-2 px-7 '>
            <span className='uppercase font-bold text-lg '>Buy Now</span>
            <span className='block text-[0.7rem] font-semibold'>(Risk free 30 day trials)</span>
          </button>

          <div className='space-y-4'>
            <p>Buy now, pay later option available</p>
            <p className='tracking-wider font-bold text-[#2bf6fa]'>Free Worldwide Express Delivery</p>
          </div>

          <div className='mt-7 flex gap-7'>
            <img src="/assets/afterpay.svg" alt="afterpay" />
            <img src="/assets/zip.svg" alt="afterpay" />
          </div>
        </div>
        </div>

        <div className="flex-1">
          <img src="/assets/banner-right.svg" alt="banner" />
        </div>

      </div>

      <div className='flex justify-center items-center gap-16 mt-20 px-14'>
        <img src="/assets/moneyback.svg" alt="" />
        <img src="/assets/expressdelivery.svg" alt="" />

        <img src="/assets/trusted.svg" alt="" />
      </div>

      <div className='px-14' >
        <h2 className={` text-center text-8xl mt-20 text-[#191919] ${mainFontFamily.className} mb-14`}>Massage Gun</h2>

        <div >
          <div className='flex'>
          <div className='flex-1' >
          <img src="/assets/massagegun.svg" alt="massagegun" />
        </div>
        <div className='flex-1'>
          <h3 className={` text-4xl  mb-8 ${mainFontFamily.className} `}>What makes this gun diferrent from the rest</h3>

          <div className='flex'>
            <div className='flex-1'>
              <ul className='space-y-6'>
                <li className='flex gap-3'>
                  <img src="/assets/ai.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>Integrated with Artificial Intelligence | Smart Hit Control</p>
                </li>
                <li className='flex gap-3'>
                  <img src="/assets/sound.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>Triple Noise Reduction Technology</p>
                </li>
                <li className='flex gap-3'>
                  <img src="/assets/radar.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>Vibration filtering for smoother operating</p>
                </li>
                <li className='flex gap-3'>
                  <img src="/assets/energy.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>12V Lithium battery with 2 hour fast charging</p>
                </li>
                <li className='flex gap-3'>
                  <img src="/assets/30day.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>30 Day Money Back Guarantee </p>
                </li>
              </ul>
            </div>

            <div className='flex-1'>
            <ul className='space-y-6'>
                <li className='flex gap-3'>
                  <img src="/assets/6head.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>30 Day Money Back Guarantee </p>
                </li>
                <li className='flex gap-3'>
                  <img src="/assets/power.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>Remaining Power Display</p>
                </li>
                <li className='flex gap-3'>
                  <img src="/assets/5year.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>5 Year Motor Warranty</p>
                </li>
                <li className='flex gap-3 items-start'>
                  <img src="/assets/kg.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>12 KG pressure bearing with brushless motor (Which means it is intensely powerful, while also having an extremely quiet & frictionless operating system)</p>
                </li>
 
              </ul>
            </div>
          </div>
        </div>
          </div>

          <div className='mt-20 flex gap-14'>
              <div className='flex-1'>
              <h3 className={`text-4xl mb-8 ${mainFontFamily.className}`}>The Benefits</h3>

              <div className='flex gap-5'>
                <div className='flex-1'>
                <ul className='space-y-6'>
                <li className='flex gap-3'>
                  <img src="/assets/muscle.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>Prevents delayed onset muscle soreness</p>
                </li>
                <li className='flex gap-3'>
                  <img src="/assets/recovery.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>Ideal for warm-up, injury prevention, and recovery</p>
                </li>
                <li className='flex gap-3'>
                  <img src="/assets/radiotiv.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>Removes toxic bi-products post training</p>
                </li>
                <li className='flex gap-3'>
                  <img src="/assets/beatch.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>Perfect for relaxation</p>
                </li>
              </ul>
                </div>


                <div className='flex-1'>
                <ul className='space-y-6'>
                <li className='flex gap-3'>
                  <img src="/assets/paren.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>Release tension in tight muscles</p>
                </li>
                <li className='flex gap-3'>
                  <img src="/assets/muscle.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>Increases blood flow and activates both muscular and nervous system</p>
                </li>
                <li className='flex gap-3'>
                  <img src="/assets/engre.svg" alt="icon" />
                  <p className='text-[#808080] flex items-center'>Removes scar tissue and encourages natural muscle repair</p>
                </li>
              </ul>
                </div>
                </div>
              </div>

              <div >
              <img src="/assets/massageuse.svg" alt="massage-gun" />
            </div>

            </div>
        </div>
      </div>

      <div className='mt-20'>
        <img src="/assets/banner.svg" alt=""  />
      </div>

      <div className='flex px-14 gap-16 mt-4'>
        <div className='flex-1'>
          <img src="/assets/kitmassage.svg" alt="kit massagem" />
        </div>

        <div className='flex-1 mt-20'>
          <h3 className={`text-4xl tracking-wide mb-12 ${mainFontFamily.className}`}>What is included in your order</h3>

          <ul className='list-disc pl-7 text-[#808080]'>
            <li className='text-lg'>Booster Professional Series Massager</li>
            <li className='text-lg'>6 different massage heads (to suit all muscle groups and intensity preference)</li>
            <li className='text-lg'>Portable carry case with internal foam mould for safe and convenient storage</li>
            <li className='text-lg'>How-to-use instruction manual</li>
            <li className='text-lg'>USB-C charger cord</li>
            <li className='text-lg'>18 Months Inclued Warranty</li>
            <li className='text-lg'>Free Express Delivery</li>
          </ul>
        </div>
      </div>

      <div className='mt-20'>
        <img src="/assets/recovery-banner.svg" alt="recovery-banner" />
      </div>
    </div>
  )
}
