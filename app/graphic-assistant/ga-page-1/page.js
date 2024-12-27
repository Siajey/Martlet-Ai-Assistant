'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//assets we need for the Navbar
import LogoIcon from '@/public/assets/icons/dummylogo.svg'
import YellowNotificationIcon from '@/public/assets/icons/yellownotificationicon.svg'
import BusinessLitsItem1Logo from '@/public/assets/icons/BusinessLitsItem1Logo.svg'
import BusinessLitsItem2Logo from '@/public/assets/icons/BusinessLitsItem2Logo.svg'
import BusinessLitsItem3Logo from '@/public/assets/icons/BusinessLitsItem3Logo.svg'
import BusinessLitsItem4Logo from '@/public/assets/icons/BusinessLitsItem4Logo.svg'
import DashboardDropdwonIcon from '@/public/assets/icons/navbar-dropdown-arrowdown-icon.svg'
import PurplePlusIcon from '@/public/assets/icons/purple-plus-icon.svg'

//fake assets for our static cards
import GALogoCradImg from '@/public/assets/images/GA-logo-card-img.svg'
import GAVisitCrardImg from '@/public/assets/images/GA-visit-card-img.svg'
import GAAfourHeaderPaper from '@/public/assets/images/GA-A4-header-paper-card-img.svg'
import GAAfiveHeaderPaper from '@/public/assets/images/GA-A5-header-paper-card-img.svg'
import GAInstagramPostCardImg from '@/public/assets/images/GA-instagram-post-card-img.svg'
import GAInstagaramStoryCardImg from '@/public/assets/images/GA-instagram-story-card-img.svg'
import GAEnvelopeCardImage from '@/public/assets/images/GA-envelope-card-img.svg'
import DashboardFooter from '@/components/dashboard-footer/DashboardFooter'

function page() {
  //handle the dropdwon toggle in this state
  const [dropdownToggle, setDropdownToggle] = useState(false)
  return (
    <div id='ga-page-1-fully-container' className='h-[100vh] overflow-scroll'>
      {/* Navbar-section */}
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
          <div className='flex justify-center items-center mr-3'>
            <p className='font-medium text-[20px] text-[#151D48] leading-[30px] mr-3'>
              دستیار گرافیکی
            </p>
            <div className='rounded-[50%] bg-[#151D48] w-[5px] h-[5px]'></div>
          </div>
          <div className='w-[130px] h-[41px] mr-[5px]'>
            <p className='font-bold text-[27px]  leading-[40.5px] text-[#151D48]'>
              لکسا پلاس
            </p>
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
          {/* collapse-menu */}
          <div
            className='flex relative justify-evenly flex-row-reverse items-center w-[299px] h-[63px]  rounded-[31.5px] dropdown'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
            }}
          >
            <div
              className='flex justify-center items-center w-[47px] h-[47px] rounded-[14.4px]  gap-[9px]'
              style={{
                backgroundColor: ' rgba(255, 255, 255, 1)',
              }}
            >
              <div className='w-[22.18px] h-[22.17px]'>
                <Image src={BusinessLitsItem1Logo} />
              </div>
            </div>
            {/* Text section of the dropdown */}
            <div className='text-center'>
              <div className='w-[115px] h-[24px] '>
                <p className='font-medium text-[16px] leading-6 text-[#151D48]'>
                  شرکت کیان تجهیز
                </p>
                <div className='w-[146px] h-[20px] '>
                  <p className='font-normal text[14px] leading-[20px] text[#737791] mr-5'>
                    کسب و کار پیشرفته
                  </p>
                </div>
              </div>
            </div>
            {/* dropdown-list-notification-icon */}
            <div
              className='flex justify-center items-center w-[38px] h-[38px]  rounded-[24px]'
              style={{
                backgroundColor: 'rgba(93, 95, 239, 0.1)',
              }}
            >
              <div
                className='flex  justify-center items-center w-[24px] h-[24px]'
                onClick={() => setDropdownToggle((prev) => !prev)}
              >
                <div className='w-[10px] h-[5px]'>
                  <Image src={DashboardDropdwonIcon} />
                </div>
              </div>
            </div>
            {/* dropdown-toggle */}
            {dropdownToggle ? (
              <div
                className='absolute top-20'
                style={{
                  backgroundColor: '#FFFFFFCC',
                  boxShadow: '3px 3px 13.199999809265137px 4px #E1E1E180',
                }}
              >
                <ul>
                  <li id='business-lits-item-1'>
                    <div
                      className='flex  justify-evenly flex-row-reverse items-center w-[299px] h-[63px] border-t-[2px]'
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
                      }}
                    >
                      <div
                        className='flex justify-center items-center w-[47px] h-[47px] rounded-[14.4px]  gap-[9px]'
                        style={{
                          backgroundColor: ' rgba(255, 255, 255, 1)',
                        }}
                      >
                        <div className='w-[22.18px] h-[22.17px]'>
                          <Image src={BusinessLitsItem2Logo} />
                        </div>
                      </div>
                      {/* Text section of the dropdown */}
                      <div className='text-center'>
                        <div className='w-[115px] h-[24px] '>
                          <p className='font-medium text-[16px] leading-6 text-[#151D48]'>
                            شرکت کیان تجهیز
                          </p>
                          <div className='w-[146px] h-[20px] '>
                            <p className='font-normal text[14px] leading-[20px] text[#737791] mr-5'>
                              کسب و کار پیشرفته
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* dropdown-list-notification-icon */}
                      <div
                        className='flex justify-center items-center w-[38px] h-[38px]  rounded-[24px]'
                        style={{
                          backgroundColor: 'rgba(93, 95, 239, 0.1)',
                        }}
                      >
                        <div className='flex  justify-center items-center w-[24px] h-[24px]'>
                          <div className='w-[10px] h-[5px]'>
                            <Image src={DashboardDropdwonIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id='business-lits-item-2'>
                    <div
                      className='flex  justify-evenly flex-row-reverse items-center w-[299px] h-[63px] border-t-[2px]'
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
                      }}
                    >
                      <div
                        className='flex justify-center items-center w-[47px] h-[47px] rounded-[14.4px]  gap-[9px]'
                        style={{
                          backgroundColor: ' rgba(255, 255, 255, 1)',
                        }}
                      >
                        <div className='w-[22.18px] h-[22.17px]'>
                          <Image src={BusinessLitsItem3Logo} />
                        </div>
                      </div>
                      {/* Text section of the dropdown */}
                      <div className='text-center'>
                        <div className='w-[115px] h-[24px] '>
                          <p className='font-medium text-[16px] leading-6 text-[#151D48]'>
                            شرکت کیان تجهیز
                          </p>
                          <div className='w-[146px] h-[20px] '>
                            <p className='font-normal text[14px] leading-[20px] text[#737791] mr-5'>
                              کسب و کار پیشرفته
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* dropdown-list-notification-icon */}
                      <div
                        className='flex justify-center items-center w-[38px] h-[38px]  rounded-[24px]'
                        style={{
                          backgroundColor: 'rgba(93, 95, 239, 0.1)',
                        }}
                      >
                        <div className='flex  justify-center items-center w-[24px] h-[24px]'>
                          <div className='w-[10px] h-[5px]'>
                            <Image src={DashboardDropdwonIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>{' '}
                  <li id='business-lits-item-3'>
                    <div
                      className='flex  justify-evenly flex-row-reverse items-center w-[299px] h-[63px] border-t-[2px]'
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
                      }}
                    >
                      <div
                        className='flex justify-center items-center w-[47px] h-[47px] rounded-[14.4px]  gap-[9px]'
                        style={{
                          backgroundColor: ' rgba(255, 255, 255, 1)',
                        }}
                      >
                        <div className='w-[22.18px] h-[22.17px]'>
                          <Image src={BusinessLitsItem4Logo} />
                        </div>
                      </div>
                      {/* Text section of the dropdown */}
                      <div className='text-center'>
                        <div className='w-[115px] h-[24px] '>
                          <p className='font-medium text-[16px] leading-6 text-[#151D48]'>
                            شرکت کیان تجهیز
                          </p>
                          <div className='w-[146px] h-[20px] '>
                            <p className='font-normal text[14px] leading-[20px] text[#737791] mr-5'>
                              کسب و کار پیشرفته
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* dropdown-list-notification-icon */}
                      <div
                        className='flex justify-center items-center w-[38px] h-[38px]  rounded-[24px]'
                        style={{
                          backgroundColor: 'rgba(93, 95, 239, 0.1)',
                        }}
                      >
                        <div className='flex  justify-center items-center w-[24px] h-[24px]'>
                          <div className='w-[10px] h-[5px]'>
                            <Image src={DashboardDropdwonIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* adding a business logic will be applied through this button */}
                  <li id='business-lits-item-add-button'>
                    <div
                      className='flex justify-center  items-center w-[299px] h-[63px] border-t-[2px]'
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
                      }}
                    >
                      <p className='font-bold text-[14px] text-[#5D5FEF] leading-[24px]'>
                        افزودن کسب و کار
                      </p>
                      <button>
                        <Image src={PurplePlusIcon} />
                      </button>
                      <div className='text-center'></div>
                    </div>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>

      {/* main-section of the GA page-1 */}
      <div
        id='graphic-assistant-page-1-main-section-container'
        className='flex flex-col justify-center items-center mt-20'
      >
        {/* GA-cards-section */}
        {/* first-4-cards */}
        <div className='flex flex-row-reverse justify-center items-center gap-10'>
          <div
            id='GA-logo-card'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GALogoCradImg} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                لوگو
              </p>
            </div>
          </div>

          <div
            id='GA-visit-card'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GAVisitCrardImg} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                کارت ویزیت
              </p>
            </div>
          </div>

          <div
            id='GA-A4-header-paper-card'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GAAfourHeaderPaper} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                سربرگ آ چهار
              </p>
            </div>
          </div>

          <div
            id='GA-A5-header-paper-card'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GAAfiveHeaderPaper} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                سربرگ آ پنج
              </p>
            </div>
          </div>
        </div>

        {/* second-4-cards */}
        <div className='flex flex-row-reverse justify-center items-center gap-10 mt-10'>
          <div
            id='GA-instagram-post-card'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GAInstagramPostCardImg} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                پست اینستاگرام
              </p>
            </div>
          </div>

          <div
            id='GA-instagram-story-card'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GAInstagaramStoryCardImg} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                استوری اینستاگرام
              </p>
            </div>
          </div>

          <div
            id='GA-instagram-story-card'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GAEnvelopeCardImage} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                پاکت نامه
              </p>
            </div>
          </div>

          <div
            id='GA-locust-envelope'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GAVisitCrardImg} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                پاکت ملخی
              </p>
            </div>
          </div>
        </div>

        {/* third-4-cards */}
        <div className='flex flex-row-reverse justify-center items-center gap-10 mt-10'>
          <div
            id='GA-highlight-template'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GAAfourHeaderPaper} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                قالب هایلایت
              </p>
            </div>
          </div>

          <div
            id='GA-reels-template-cover'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GAAfiveHeaderPaper} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                قالب کاور ریلز
              </p>
            </div>
          </div>

          <div
            id='GA-standing-stand'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GAEnvelopeCardImage} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                ایستند ایستاده
              </p>
            </div>
          </div>

          <div
            id='GA-mesh-banner'
            className='flex flex-col justify-center items-center w-[283px] h-[283px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex justify-center items-center'>
              <Image src={GAInstagaramStoryCardImg} />
            </div>
            <div className='flex justify-center items-center mt-5'>
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                بنر مش
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GA-pag1-footer */}
      <div className='mb-10'>
        <DashboardFooter />
      </div>
    </div>
  )
}

export default page