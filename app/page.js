import Link from 'next/link'
import Image from 'next/image'

//components we need
import Hero from '@/components/hero-landing-section/Hero'
import AccordionContainer from '@/components/FAQ/AccordionContainer'

//assets for Navbar menu
import LogoIcon from '@/public/assets/icons/dummylogo.svg'
import YellowNotificationIcon from '@/public/assets/icons/yellownotificationicon.svg'
import RegIcon from '@/public/assets/icons/registry-icon.svg'

//assets we need for description cards
import DescriptionCardImg1 from '@/public/assets/images/description-cards-img-1.svg'
import DescriptionCardImg2 from '@/public/assets/images/description-cards-img-2.svg'
import DescriptionCardImg3 from '@/public/assets/images/description-cards-img-3.svg'

//assets we need for lexa services cards
import LexaServiceCardImg1 from '@/public/assets/images/services-card-img-1.svg'
import LexaServiceCardImg2 from '@/public/assets/images/services-card-img-2.svg'
import LexaServiceCardImg3 from '@/public/assets/images/services-card-img-3.svg'
import LexaServiceCardImg4 from '@/public/assets/images/services-card-img-4.svg'
import LexaServiceCardImg5 from '@/public/assets/images/services-card-img-5.svg'
import LexaServiceCardImg6 from '@/public/assets/images/services-card-img-6.svg'

//assets we need for registration in system section
import RegistrationPcImg from '@/public/assets/images/registration-in-system-img.svg'
import CheckCircleIcon from '@/public/assets/icons/check-circle-purple-icon.svg'

//assets we need for Footer-Nav-Menu
import FooterNavMenuIcon1 from '@/public/assets/icons/FooterNavMenuIcons-telegram.svg'
import FooterNavMenuIcon2 from '@/public/assets/icons/FooterNavMenuIcons-instagram.svg'
import FooterNavMenuIcon3 from '@/public/assets/icons/FooterNavMenuIcons-email.svg'
import FooterNavMenuIcon4 from '@/public/assets/icons/FooterNavMenuIcons-phone.svg'

function page() {
  return (
    <main
      style={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
      }}
    >
      {/* Navbar */}
      <nav
        className='flex justify-between items-center flex-row-reverse  mr-[19px] ml-[19px] h-[92px] mt-[17px] rounded-[46px]'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow: '0px 0px 12px 4px rgba(227, 227, 227, 0.5)',
        }}
        id='dashboard-navbar-container'
      >
        {/* right section of the menu */}
        <div className='flex items-center'>
          {/* main links section of the navbar */}
          <div className='flex justify-center items-center flex-row-reverse gap-10 mr-8'>
            <Link href='/'>
              <p className='text-[16px] text-[#1E1E1E] font-medium leading-[27.3px] '>
                خانه
              </p>
            </Link>
            <Link href='/dashboard'>
              <p className='text-[16px] text-[#1E1E1E] font-normal leading-[27.3px] '>
                داشبورد
              </p>
            </Link>{' '}
            <Link href='/journal'>
              <p className='text-[16px] text-[#1E1E1E] font-normal leading-[27.3px] '>
                مجله
              </p>
            </Link>{' '}
            <Link href='/contact-us'>
              <p className='text-[16px] text-[#1E1E1E] font-normal leading-[27.3px] '>
                تماس با ما
              </p>
            </Link>{' '}
            <Link href='/about-us'>
              <p className='text-[16px] text-[#1E1E1E] font-normal leading-[27.3px] '>
                درباره ما
              </p>
            </Link>
          </div>

          <Link href='/' className='mr-5'>
            <Image src={LogoIcon} />
          </Link>
        </div>
        {/* left-side-of-the-navbar*/}
        <div className='flex items-center cursor-pointer'>
          {/* Yellow notification icon */}
          <div className='ml-5 mr-[14px]'>
            <Image src={YellowNotificationIcon} />
          </div>
          {/* registry-button*/}
          <div
            className='flex justify-center items-center w-[132px] h-[48px] rounded-[30px] gap-[3px]'
            style={{
              padding: '18px 24px 18px 24px',
              border: '2px solid #5D5FEF',
            }}
          >
            <div className='flex justify-center items-center'>
              <p className='text-[16px] text-[#5D5FEF] font-bold leading-[18px]'>
                ثبت نام
              </p>
            </div>
            <div className='flex justify-center items-center w-[24px] h-[24px]'>
              <Image src={RegIcon} />
            </div>
          </div>
        </div>
      </nav>
      {/* Hero section */}
      <Hero />
      {/* main section of the landing page */}
      <p className='font-bold text-[#151D48] text-[24px] text-center leading-[36px] mt-[150px]'>
        خدمات ما
      </p>
      {/* Description-cards */}
      <div className='flex justify-center items-center gap-[30px] mt-10'>
        <div
          id='description-card-1'
          className='flex flex-col justify-center items-center w-[392px] h-[396px] rounded-[30px] p-10'
          style={{
            backgroundColor: ' rgba(255, 255, 255, 0.3)',
            boxShadow:
              '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
          }}
        >
          <Image src={DescriptionCardImg1} />
          <p className='font-bold text-[24px] text-center text-[#5D5FEF] leading-[38px]'>
            تبلیغات و برندینگ
          </p>
          <p className='font-normal text-[18px] text-[#1E1E1E] text-center leading-[30px] opacity-[80%]'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>

        <div
          id='description-card-2'
          className='flex flex-col justify-center items-center w-[392px] h-[396px] rounded-[30px] p-10'
          style={{
            backgroundColor: ' rgba(255, 255, 255, 0.3)',
            boxShadow:
              '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
          }}
        >
          <Image src={DescriptionCardImg2} />
          <p className='font-bold text-[24px] text-[#5D5FEF] leading-[38px]'>
            تبلیغات و برندینگ
          </p>
          <p className='font-normal text-[18px] text-[#1E1E1E] text-center leading-[30px] opacity-[80%]'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>

        <div
          id='description-card-3'
          className='flex flex-col justify-center items-center w-[392px] h-[396px] rounded-[30px]'
          style={{
            backgroundColor: ' rgba(255, 255, 255, 0.3)',
            boxShadow:
              '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
          }}
        >
          <Image src={DescriptionCardImg3} />
          <p className='font-bold text-[24px] text-[#5D5FEF] leading-[38px]'>
            تبلیغات و برندینگ
          </p>
          <p className='font-normal text-[18px] text-[#1E1E1E] text-center leading-[30px] opacity-[80%]'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>
      </div>

      <p className='font-bold text-[#151D48] text-[24px] text-center leading-[36px] mt-[150px]'>
        سرویس های لکسا
      </p>
      {/* Lexa-Services-Cards */}
      <div className='flex justify-center items-center mt-10'>
        <div
          className=''
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '50px',
          }}
        >
          <div
            id='services-cards-1'
            className='flex flex-col justify-evenly items-center w-[384px] h-[496px] rounded-[30px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='w-[343px] h-[220px] rounded-[30px]'>
              <Image src={LexaServiceCardImg1} />
            </div>
            <p className='font-bold text-[22px] text-[#5D5FEF] text-center leading-[34px]'>
              وبسایت فروشگاهی
            </p>
            <p className='font-normal text-[16px] text-[#1E1E1E] text-center leading-[32px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است که این موضوع درباره طراحی و دیزاین
              است.
            </p>
            <button
              className='w-[338px] h-[51px] rounded-[31.5px]'
              style={{
                backgroundColor: '#5D5FEF',
                boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
              }}
            >
              <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                مشاهده بیشتر
              </span>
            </button>
          </div>

          <div
            id='services-cards-2'
            className='flex flex-col justify-evenly items-center w-[384px] h-[496px] rounded-[30px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='w-[343px] h-[220px] rounded-[30px]'>
              <Image src={LexaServiceCardImg2} />
            </div>
            <p className='font-bold text-[22px] text-[#5D5FEF] text-center leading-[34px]'>
              وبسایت فروشگاهی
            </p>
            <p className='font-normal text-[16px] text-[#1E1E1E] text-center leading-[32px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است که این موضوع درباره طراحی و دیزاین
              است.
            </p>
            <button
              className='w-[338px] h-[51px] rounded-[31.5px]'
              style={{
                backgroundColor: '#5D5FEF',
                boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
              }}
            >
              <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                مشاهده بیشتر
              </span>
            </button>
          </div>

          <div
            id='services-cards-3'
            className='flex flex-col justify-evenly items-center w-[384px] h-[496px] rounded-[30px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex flex-col justify-evenly items-center w-[343px] h-[220px] rounded-[30px]'>
              <Image src={LexaServiceCardImg3} />
            </div>
            <p className='font-bold text-[22px] text-[#5D5FEF] text-center leading-[34px]'>
              وبسایت فروشگاهی
            </p>
            <p className='font-normal text-[16px] text-[#1E1E1E] text-center leading-[32px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است که این موضوع درباره طراحی و دیزاین
              است.
            </p>
            <button
              className='w-[338px] h-[51px] rounded-[31.5px]'
              style={{
                backgroundColor: '#5D5FEF',
                boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
              }}
            >
              <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                مشاهده بیشتر
              </span>
            </button>
          </div>

          <div
            id='services-cards-4'
            className='flex flex-col justify-evenly items-center w-[384px] h-[496px] rounded-[30px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='w-[343px] h-[220px] rounded-[30px]'>
              <Image src={LexaServiceCardImg4} />
            </div>
            <p className='font-bold text-[22px] text-[#5D5FEF] text-center leading-[34px]'>
              وبسایت فروشگاهی
            </p>
            <p className='font-normal text-[16px] text-[#1E1E1E] text-center leading-[32px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است که این موضوع درباره طراحی و دیزاین
              است.
            </p>
            <button
              className='w-[338px] h-[51px] rounded-[31.5px]'
              style={{
                backgroundColor: '#5D5FEF',
                boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
              }}
            >
              <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                مشاهده بیشتر
              </span>
            </button>
          </div>

          <div
            id='services-cards-5'
            className='flex flex-col justify-evenly items-center w-[384px] h-[496px] rounded-[30px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='w-[343px] h-[220px] rounded-[30px]'>
              <Image src={LexaServiceCardImg5} />
            </div>
            <p className='font-bold text-[22px] text-[#5D5FEF] text-center leading-[34px]'>
              وبسایت فروشگاهی
            </p>
            <p className='font-normal text-[16px] text-[#1E1E1E] text-center leading-[32px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است که این موضوع درباره طراحی و دیزاین
              است.
            </p>
            <button
              className='w-[338px] h-[51px] rounded-[31.5px]'
              style={{
                backgroundColor: '#5D5FEF',
                boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
              }}
            >
              <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                مشاهده بیشتر
              </span>
            </button>
          </div>

          <div
            id='services-cards-6'
            className='flex flex-col justify-evenly items-center w-[384px] h-[496px] rounded-[30px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='w-[343px] h-[220px] rounded-[30px]'>
              <Image src={LexaServiceCardImg6} />
            </div>
            <p className='font-bold text-[22px] text-[#5D5FEF] text-center leading-[34px]'>
              وبسایت فروشگاهی
            </p>
            <p className='font-normal text-[16px] text-[#1E1E1E] text-center leading-[32px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است که این موضوع درباره طراحی و دیزاین
              است.
            </p>
            <button
              className='w-[338px] h-[51px] rounded-[31.5px]'
              style={{
                backgroundColor: '#5D5FEF',
                boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
              }}
            >
              <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                مشاهده بیشتر
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Register in the system - section */}

      <p className='font-bold text-[24px] text-[#151D48] text-center leading-[36px] mt-40'>
        ثبت نام در سامانه
      </p>

      <div className='flex justify-center items-center'>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repat(2,2fr)',
          }}
        >
          {/* heading text and description section */}
          <div className='flex flex-row-reverse'>
            <div className='w-[614px] h-[437px]'>
              <Image src={RegistrationPcImg} />
            </div>

            <div className='flex flex-col justify-center items-center'>
              <p className='font-normal text-[16px] text-[#1E1E1E] leading-[32px]'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از
              </p>
              <p className='font-normal text-[16px] text-[#1E1E1E] leading-[32px]'>
                طراحان گرافیک است که این موضوع درباره طراحی و دیزاین چاپگرها و
                متون بلکه
              </p>
              <p className='font-normal text-[16px] text-[#1E1E1E] leading-[32px]'>
                روزنامه و مجله در ستون و سطرآنچنان که لازم است.
              </p>

              {/* checked-icons-section */}
              <div className='flex flex-row-reverse justify-center items-center mt-10'>
                <div className='flex flex-col justify-center items-center ml-10'>
                  <ul className=''>
                    <li className='mt-5' id='Registration-text-icon-2'>
                      <div className='flex justify-center items-center gap-2'>
                        <p className='font-normal text-[18px] leading-[18px] text-[#1E1E1E]'>
                          وب سایت فروشگاهی
                        </p>
                        <Image src={CheckCircleIcon} />
                      </div>
                    </li>

                    <li className='mt-5 ml-16' id='Registration-text-icon-2'>
                      <div className='flex justify-center items-center gap-2'>
                        <p className='font-normal text-[18px] leading-[18px] text-[#1E1E1E]'>
                          پنل اختصاصی
                        </p>
                        <Image src={CheckCircleIcon} className='ml-[1px]' />
                      </div>
                    </li>

                    <li className='mr-5 mt-5' id='Registration-text-icon-3'>
                      <div className='flex justify-center items-center gap-2'>
                        <p className='font-normal text-[18px] leading-[18px] text-[#1E1E1E]'>
                          سیستم مدیریت بیزنس
                        </p>
                        <Image src={CheckCircleIcon} />
                      </div>
                    </li>
                  </ul>
                </div>

                <div className='flex flex-col justify-center items-center mr-20'>
                  <ul>
                    <li
                      className='flex justify-center items-center'
                      id='Registration-text-icon-4'
                    >
                      <div className='flex justify-center items-center gap-2'>
                        <p className='font-normal text-[18px] leading-[18px] text-[#1E1E1E]'>
                          سیستم انبارداری
                        </p>
                        <Image src={CheckCircleIcon} />
                      </div>
                    </li>

                    <li
                      className='flex justify-center items-center mt-5'
                      id='Registration-text-icon-5'
                    >
                      <div className='flex justify-center items-center gap-2'>
                        <p className='font-normal text-[18px] leading-[18px] text-[#1E1E1E]'>
                          سیستم خزانه‌داری
                        </p>
                        <Image src={CheckCircleIcon} className='mr-[10px]' />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/*Buttons-section*/}
              <div className='flex flex-row-reverse justify-center items-center mt-20 gap-10'>
                <button
                  className='w-[254px] h-[66px] rounded-[36.55px] gap-[8px]'
                  style={{
                    border: '2px solid rgba(93, 95, 239, 1)',
                    boxShadow: '0px 4px 10px 0px rgba(20, 20, 43, 0.04)',
                    padding: '24px 36px 24px 36px',
                  }}
                >
                  <p className='font-bold text-[18px] text-[#5D5FEF] leading-[18px] '>
                    اطلاعات بیشتر
                  </p>
                </button>
                <button
                  className='w-[220px] h-[66px] rounded-[40px] gap-[8px]'
                  style={{
                    padding: '24p 36px 24px 36px',
                    backgroundColor: ' rgba(93, 95, 239, 1)',
                  }}
                >
                  <p className='font-bold text-[18px] text-[#FFFFFF] leading-[18px]'>
                    ثبت نام در سامانه
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ-section-Accordions */}
      <p className='font-bold text-[24px] text-[#151D48] text-center leading-[36px] mt-40'>
        سوالات متداول
      </p>
      <AccordionContainer />

      {/* Footer-Nav-Menu */}
      <nav
        className='flex justify-between items-center flex-row-reverse  mr-[19px] ml-[19px] h-[92px] mt-[17px] rounded-[46px] mb-5'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow: '0px 0px 12px 4px rgba(227, 227, 227, 0.5)',
        }}
        id='dashboard-navbar-container'
      >
        {/* right section of the menu */}
        <div className='flex items-center'>
          {/* center-text */}

          {/* right text */}
          <Link href='/' className='mr-10'>
            <p className='font-bold text-[24px] text-[#5D5FEF] leading-[40.7px]'>
              لکسا
            </p>
          </Link>
        </div>
        <p>تمامی حقوق مادی و معنوی این وب متعلق به سامانه لکسا است</p>
        {/* left-side-of-the-navbar*/}
        <div className='flex justify-center items-center cursor-pointer gap-10 ml-10'>
          <Image src={FooterNavMenuIcon1} />
          <Image src={FooterNavMenuIcon2} />
          <Image src={FooterNavMenuIcon3} />
          <Image src={FooterNavMenuIcon4} />
        </div>
      </nav>
    </main>
  )
}

export default page
