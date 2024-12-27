'use client'

import Image from 'next/image'
import Link from 'next/link'

//assets we need for the Navbar
import LogoIcon from '@/public/assets/icons/dummylogo.svg'
import YellowNotificationIcon from '@/public/assets/icons/yellownotificationicon.svg'

//assets we need for the footer menu

import FooterNavMenuIcon1 from '@/public/assets/icons/FooterNavMenuIcons-telegram.svg'
import FooterNavMenuIcon2 from '@/public/assets/icons/FooterNavMenuIcons-instagram.svg'
import FooterNavMenuIcon3 from '@/public/assets/icons/FooterNavMenuIcons-email.svg'
import FooterNavMenuIcon4 from '@/public/assets/icons/FooterNavMenuIcons-phone.svg'

//other assets
import BlogPage1DashboardButtonIcon from '@/public/assets/icons/blog-page-1-dashboard-button-icon.svg'
import WhiteSearchIcon from '@/public/assets/icons/blog-page-1-hero-section-search-icon.svg'
import HeroImage from '@/public/assets/images/blog-page-1-hero-image.svg'
import TechCardImg from '@/public/assets/images/blog-page-1-tech-card-img.svg'
import EconomicCardImg from '@/public/assets/images/blog-pagep1-economic-card-img.svg'
import PoliticalCardImg from '@/public/assets/images/blog-page-1-political-caard-img.svg'
import DailyNewsCardImg from '@/public/assets/images/blog-page-1-daily-news-card-img.svg'
import SportCardImg from '@/public/assets/images/blog-page-1-sport-card-img.svg'
import VideoCrad1Img from '@/public/assets/images/blog-page-1-videos-cards-card-1-img.svg'
import VideoCrad2Img from '@/public/assets/images/blog-page-1-videos-cards-card-2-img.svg'
import VideoCrad3Img from '@/public/assets/images/blog-page-1-videos-cards-card-3-img.svg'
import WhitePlayIcon from '@/public/assets/icons/white-play-icon.svg'
import PosterImg from '@/public/assets/images/blog-page-1-podcats-videos-poster-img.svg'
import FavCard1Img from '@/public/assets/images/blog-page-1-fav-posts-card-1-img.svg'
import FavCard2Img from '@/public/assets/images/blog-page-1-fav-posts-card-2-img.svg'
import FavCard3Img from '@/public/assets/images/blog-page-1-fav-posts-card-3-img.svg'
import FavCard4Img from '@/public/assets/images/blog-page-1-fav-posts-card-4-img.svg'
import FavPostsPoster from '@/public/assets/images/blog-page-1-fav-posts-poster-img.svg'
import AllPostsCard1Img from '@/public/assets/images/blog-page-1-all-posts-card-1-img.svg'
import AllPostsCard2Img from '@/public/assets/images/blog-page-1-all-posts-card-2-img.svg'
import AllPostsCard3Img from '@/public/assets/images/blog-page-1-all-posts-card-3-img.svg'
import AllPostsCard4Img from '@/public/assets/images/blog-page-1-all-posts-card-4-img.svg'
import AllPostsCard5Img from '@/public/assets/images/blog-page-1-all-posts-card-5-img.svg'

function page() {
  return (
    <div id='blog-page-1-fully-container'>
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
          {/* purple-dashboard-button */}
          <div className='flex justify-center items-center'>
            <button
              className='flex justify-center items-center w-[160px] h-[63px] bg-[#5D5FEF] rounded-[31px]'
              style={{
                boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
              }}
            >
              <p className='font-medium text-[16px] text-[#FFFFFF] leading-[27px] mr-2'>
                داشبورد
              </p>
              <Image src={BlogPage1DashboardButtonIcon} />
            </button>
          </div>
        </div>
      </nav>

      {/* main-section of this page */}
      <div className='flex flex-col justify-center items-center'>
        {/* blog-page-1-hero-section-heading-box*/}
        <div
          className='w-[1238px] h-[511px] rounded-[20px] mt-10'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
          }}
        >
          {/* left-section of the box */}
          <div className='mt-20 ml-20'>
            <Image src={HeroImage} />
          </div>
          {/* right-section of the box */}
          <div className='flex flex-col justify-center items-end '>
            <div className='flex justify-center items-center mr-10'>
              <p className='font-bold text-end text-[32px] text-[#1E1E1E] leading-[70px]'>
                مجله محتوایی لکسا پلاس
              </p>
            </div>
            <div className='flex flex-col justify-center items-center mt-5'>
              <p className='font-light text-end text-[20px] text-[#1E1E1E] leading-[37px] mr-10'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                دنبال می‌کند
              </p>
              {/* blog-page-1-hero-section-search-input */}
              <div className='relative mt-20'>
                <input
                  dir='rtl'
                  type='search'
                  className='w-[530px] h-[60px] rounded-[30px] border p-5 placeholder:font-normal placeholder:text-[18px] placeholder:text-[#737791] placeholder:leading-[30px]'
                  placeholder='عبارت مورد نظر'
                />
                <div className='absolute top-3 left-3'>
                  <button
                    className='flex justify-center items-center w-[129px] h-[43px] bg-[#5D5FEF] rounded-[61px]'
                    style={{
                      boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                    }}
                  >
                    <p className='font-bold text-[16px] text-[#FFFFFF] leading-[27px] mr-2'>
                      جستجو
                    </p>
                    <Image src={WhiteSearchIcon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hero-section-category-heading-texts */}
        <div className='flex flex-col justify-center items-center mt-20'>
          <p className='font-bold text-[24px] text-[#151D48] leading-[36px]'>
            دسته بندی‌ها
          </p>
          <div className='w-[734px] border-[2px] border-[#9E9FF0] opacity-[20%] mt-5' />
          <p className='font-light text-[16px] text-[#000000] leading-[27px] mt-3'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون
          </p>
          <p className='font-light text-[16px] text-[#000000] leading-[27px]'>
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </p>
        </div>
        {/* hero-section-category-cards */}
        <div className='flex justify-center items-center mt-20 gap-10'>
          {/* Tech-card */}
          <div>
            <div
              className='flex justify-center items-center w-[198px] h-[198px] rounded-[20px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <Image src={TechCardImg} />
            </div>
            <p className='font-medium text-center text-[20px] text-[#151D48] rounded-[30px]'>
              تکنولوژی
            </p>
          </div>

          {/* Economy-card*/}
          <div>
            <div
              className='flex justify-center items-center w-[198px] h-[198px] rounded-[20px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <Image src={EconomicCardImg} />
            </div>
            <p className='font-medium text-center text-[20px] text-[#151D48] rounded-[30px]'>
              اقتصادی
            </p>
          </div>

          {/* Political-card */}
          <div>
            <div
              className='flex justify-center items-center w-[198px] h-[198px] rounded-[20px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <Image src={PoliticalCardImg} />
            </div>
            <p className='font-medium text-center text-[20px] text-[#151D48] rounded-[30px]'>
              سیاسی
            </p>
          </div>

          {/* Daily-news-card */}
          <div>
            <div
              className='flex justify-center items-center w-[198px] h-[198px] rounded-[20px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <Image src={DailyNewsCardImg} />
            </div>
            <p className='font-medium text-center text-[20px] text-[#151D48] rounded-[30px]'>
              اخبار روز
            </p>
          </div>

          {/* Sport-card */}
          <div>
            <div
              className='flex justify-center items-center w-[198px] h-[198px] rounded-[20px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <Image src={SportCardImg} />
            </div>
            <p className='font-medium text-center text-[20px] text-[#151D48] rounded-[30px]'>
              ورزشی
            </p>
          </div>
        </div>

        {/* hr-div */}
        <div className='w-[1238px] h-[1px] border-[2px] border-[#9E9FF0] opacity-[20%] mt-20' />
        <div className='w-[1220px] flex justify-around items-center mt-10'>
          <p className='font-bold text-[24px] text-[#151D48] leading-[36px]'>
            معرفی لکسا پلاس
          </p>
          <p className='font-bold text-[24px] text-[#151D48] leading-[36px]'>
            ویدیو‌ها و پادکست‌ها
          </p>
        </div>
        {/* Podcasts-videos section */}
        <div className='flex  justify-center items-center mt-10'>
          <div
            className='w-[1220px]'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
            }}
          >
            {/* right-side-container videos-cards */}

            <Image src={PosterImg} />

            {/* left-side-container videos-cards*/}
            <div className='flex flex-col justify-center items-center'>
              <div
                id='podcasts-videos-card-1'
                className='flex justify-center items-center w-[387px] h-[123px] rounded-[15px]'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                }}
              >
                <div className='flex flex-row-reverse justify-evenly items-center ml-20'>
                  {/* Image */}
                  <div
                    className='relative flex justify-center items-center w-[109px] h-[97px] rounded-[10px] cursor-pointer'
                    style={{
                      background: 'rgba(30, 30, 30, 0.5)',
                    }}
                  >
                    <Image src={VideoCrad1Img} />
                    {/* icon */}
                    <div className='absolute top-12'>
                      <Image src={WhitePlayIcon} />
                    </div>
                  </div>
                  {/* texts-container */}
                  <div className='flex flex-col justify-center items-center mr-3'>
                    <div>
                      <p className='font-bold text-[14px] text-[#1E1E1E] leading-[22px]'>
                        به روز رسانی سیستم حسابداری
                      </p>
                      <p className='font-medium text-[12px] text-[#1E1E1E] text-end leading-[20px] mt-3'>
                        تکنولوژی و سرگرمی
                      </p>
                    </div>
                    <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                      <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                        1402/05/23
                      </p>
                      <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                      <div className='flex flex-row-reverse justify-center items-center'>
                        <div className='flex flex-row-reverse justify-center items-center mr-2'>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                            125
                          </p>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                            بازدید
                          </p>
                        </div>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center mr-2'>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                            14
                          </p>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                            نظر
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id='podcasts-videos-card-2'
                className='flex justify-center items-center w-[387px] h-[123px] rounded-[15px]  mt-10'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                }}
              >
                <div className='flex flex-row-reverse justify-evenly items-center ml-20'>
                  {/* Image */}
                  <div
                    className='relative flex justify-center items-center w-[109px] h-[97px] rounded-[10px] cursor-pointer'
                    style={{
                      background: 'rgba(30, 30, 30, 0.5)',
                    }}
                  >
                    <Image src={VideoCrad2Img} />
                    {/* icon */}
                    <div className='absolute top-12'>
                      <Image src={WhitePlayIcon} />
                    </div>
                  </div>
                  {/* texts-container */}
                  <div className='flex flex-col justify-center items-center mr-3'>
                    <div>
                      <p className='font-bold text-[14px] text-[#1E1E1E] leading-[22px]'>
                        به روز رسانی سیستم حسابداری
                      </p>
                      <p className='font-medium text-[12px] text-[#1E1E1E] text-end leading-[20px] mt-3'>
                        تکنولوژی و سرگرمی
                      </p>
                    </div>
                    <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                      <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                        1402/05/23
                      </p>
                      <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                      <div className='flex flex-row-reverse justify-center items-center'>
                        <div className='flex flex-row-reverse justify-center items-center mr-2'>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                            125
                          </p>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                            بازدید
                          </p>
                        </div>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center mr-2'>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                            14
                          </p>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                            نظر
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id='podcasts-videos-card-3'
                className='flex justify-center items-center w-[387px] h-[123px] rounded-[15px]  mt-10'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                }}
              >
                <div className='flex flex-row-reverse justify-evenly items-center ml-20'>
                  {/* Image */}
                  <div
                    className='relative flex justify-center items-center w-[109px] h-[97px] rounded-[10px] cursor-pointer'
                    style={{
                      background: 'rgba(30, 30, 30, 0.5)',
                    }}
                  >
                    <Image src={VideoCrad3Img} />
                    {/* icon */}
                    <div className='absolute top-12'>
                      <Image src={WhitePlayIcon} />
                    </div>
                  </div>
                  {/* texts-container */}
                  <div className='flex flex-col justify-center items-center mr-3'>
                    <div>
                      <p className='font-bold text-[14px] text-[#1E1E1E] leading-[22px]'>
                        به روز رسانی سیستم حسابداری
                      </p>
                      <p className='font-medium text-[12px] text-[#1E1E1E] text-end leading-[20px] mt-3'>
                        تکنولوژی و سرگرمی
                      </p>
                    </div>
                    <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                      <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                        1402/05/23
                      </p>
                      <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                      <div className='flex flex-row-reverse justify-center items-center'>
                        <div className='flex flex-row-reverse justify-center items-center mr-2'>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                            125
                          </p>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                            بازدید
                          </p>
                        </div>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center mr-2'>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                            14
                          </p>
                          <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                            نظر
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hr-div */}
        <div className='w-[1238px] h-[1px] border-[2px] border-[#9E9FF0] opacity-[20%] mt-20' />

        {/* All and Favorite posts section */}
        <div className='flex justify-center items-center mt-10'>
          <div
            className=''
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
            }}
          >
            {/* Favorite-posts */}
            <div className='flex flex-col justify-center items-center'>
              <div
                className='flex flex-col justify-center items-center w-[430px] h-[669px] rounded-[15px]'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                }}
              >
                <p className='font-bold text-[20px] text-[#151D48] mt-5'>
                  پست‌های محبوب
                </p>

                {/* favorite-posts-card-1 */}
                <div
                  id='favorite-posts-card-1'
                  className='flex justify-center items-center w-[387px] h-[123px] rounded-[15px] mt-5'
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                  }}
                >
                  <div className='flex flex-row-reverse justify-evenly items-center ml-20'>
                    {/* Image */}
                    <div
                      className='flex justify-center items-center w-[109px] h-[97px] rounded-[10px] cursor-pointer'
                      style={{
                        background: 'rgba(30, 30, 30, 0.5)',
                      }}
                    >
                      <Image src={FavCard1Img} />
                    </div>
                    {/* texts-container */}
                    <div className='flex flex-col justify-center items-center mr-3'>
                      <div>
                        <p className='font-bold text-[14px] text-[#1E1E1E] leading-[22px]'>
                          به روز رسانی سیستم حسابداری
                        </p>
                        <p className='font-medium text-[12px] text-[#1E1E1E] text-end leading-[20px] mt-3'>
                          تکنولوژی و سرگرمی
                        </p>
                      </div>
                      <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                        <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                          1402/05/23
                        </p>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center'>
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                              125
                            </p>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                              بازدید
                            </p>
                          </div>
                          <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                              14
                            </p>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                              نظر
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id='favorite-posts-card-2'
                  className='flex justify-center items-center w-[387px] h-[123px] rounded-[15px] mt-5'
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                  }}
                >
                  <div className='flex flex-row-reverse justify-evenly items-center ml-20'>
                    {/* Image */}
                    <div
                      className='flex justify-center items-center w-[109px] h-[97px] rounded-[10px] cursor-pointer'
                      style={{
                        background: 'rgba(30, 30, 30, 0.5)',
                      }}
                    >
                      <Image src={FavCard2Img} />
                    </div>
                    {/* texts-container */}
                    <div className='flex flex-col justify-center items-center mr-3'>
                      <div>
                        <p className='font-bold text-[14px] text-[#1E1E1E] leading-[22px]'>
                          به روز رسانی سیستم حسابداری
                        </p>
                        <p className='font-medium text-[12px] text-[#1E1E1E] text-end leading-[20px] mt-3'>
                          تکنولوژی و سرگرمی
                        </p>
                      </div>
                      <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                        <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                          1402/05/23
                        </p>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center'>
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                              125
                            </p>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                              بازدید
                            </p>
                          </div>
                          <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                              14
                            </p>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                              نظر
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id='favorite-posts-card-3'
                  className='flex justify-center items-center w-[387px] h-[123px] rounded-[15px] mt-5'
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                  }}
                >
                  <div className='flex flex-row-reverse justify-evenly items-center ml-20'>
                    {/* Image */}
                    <div
                      className='flex justify-center items-center w-[109px] h-[97px] rounded-[10px] cursor-pointer'
                      style={{
                        background: 'rgba(30, 30, 30, 0.5)',
                      }}
                    >
                      <Image src={FavCard3Img} />
                    </div>
                    {/* texts-container */}
                    <div className='flex flex-col justify-center items-center mr-3'>
                      <div>
                        <p className='font-bold text-[14px] text-[#1E1E1E] leading-[22px]'>
                          به روز رسانی سیستم حسابداری
                        </p>
                        <p className='font-medium text-[12px] text-[#1E1E1E] text-end leading-[20px] mt-3'>
                          تکنولوژی و سرگرمی
                        </p>
                      </div>
                      <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                        <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                          1402/05/23
                        </p>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center'>
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                              125
                            </p>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                              بازدید
                            </p>
                          </div>
                          <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                              14
                            </p>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                              نظر
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id='favorite-posts-card-4'
                  className='flex justify-center items-center w-[387px] h-[123px] rounded-[15px] mt-5'
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                  }}
                >
                  <div className='flex flex-row-reverse justify-evenly items-center ml-20'>
                    {/* Image */}
                    <div
                      className='flex justify-center items-center w-[109px] h-[97px] rounded-[10px] cursor-pointer'
                      style={{
                        background: 'rgba(30, 30, 30, 0.5)',
                      }}
                    >
                      <Image src={FavCard4Img} />
                    </div>
                    {/* texts-container */}
                    <div className='flex flex-col justify-center items-center mr-3'>
                      <div>
                        <p className='font-bold text-[14px] text-[#1E1E1E] leading-[22px]'>
                          به روز رسانی سیستم حسابداری
                        </p>
                        <p className='font-medium text-[12px] text-[#1E1E1E] text-end leading-[20px] mt-3'>
                          تکنولوژی و سرگرمی
                        </p>
                      </div>
                      <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                        <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                          1402/05/23
                        </p>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center'>
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                              125
                            </p>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                              بازدید
                            </p>
                          </div>
                          <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px]'>
                              14
                            </p>
                            <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] mr-1'>
                              نظر
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* fav-posts-poster */}
              <div id='fav-posts-poster' className='ml-5'>
                <Image src={FavPostsPoster} />
              </div>
            </div>

            {/* All-posts */}
            <div className='flex flex-col justify-center items-center'>
              <div className='mb-5'>
                <p className='font-bold text-[24px] text-[#151D48] leading-[36px]'>
                  همه پست‌ها
                </p>
              </div>

              <div
                id='all-posts-card-1'
                className='flex flex-row-reverse justify-around items-center w-[744px] h-[192px] rounded-[15px]'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                }}
              >
                {/* image */}
                <div>
                  <Image src={AllPostsCard1Img} />
                </div>

                {/* texts */}
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex justify-center items-center'>
                    <p className='font-bold text-[18px] text-[#1E1E1E] leading-[30px]'>
                      به روز رسانی سیستم حسابداری
                    </p>
                  </div>

                  <div className='w-[450px] flex justify-between items-center mt-5'>
                    <div className='flex flex-col justify-center items-center mr-3'>
                      <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                        <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                          1402/05/23
                        </p>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center'>
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                              125
                            </p>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px] mr-1'>
                              بازدید
                            </p>
                          </div>
                          <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                              14
                            </p>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px] mr-1'>
                              نظر
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[14px] leading-[23px]'>
                        تکنولوژی و سرگرمی
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col justify-end items-end mt-5'>
                    <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک
                    </p>
                    <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                      که لازم است و برای شرایط فعلی
                    </p>
                    <p className='font-normal text-[12px] text-end text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      تکنولوژی مورد نیاز است.
                    </p>
                  </div>
                </div>
              </div>

              <div
                id='all-posts-card-2'
                className='flex flex-row-reverse justify-around items-center w-[744px] h-[192px] rounded-[15px] mt-10'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                }}
              >
                {/* image */}
                <div>
                  <Image src={AllPostsCard2Img} />
                </div>

                {/* texts */}
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex justify-center items-center'>
                    <p className='font-bold text-[18px] text-[#1E1E1E] leading-[30px]'>
                      به روز رسانی سیستم حسابداری
                    </p>
                  </div>

                  <div className='w-[450px] flex justify-between items-center mt-5'>
                    <div className='flex flex-col justify-center items-center mr-3'>
                      <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                        <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                          1402/05/23
                        </p>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center'>
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                              125
                            </p>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px] mr-1'>
                              بازدید
                            </p>
                          </div>
                          <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                              14
                            </p>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px] mr-1'>
                              نظر
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[14px] leading-[23px]'>
                        تکنولوژی و سرگرمی
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col justify-end items-end mt-5'>
                    <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک
                    </p>
                    <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                      که لازم است و برای شرایط فعلی
                    </p>
                    <p className='font-normal text-[12px] text-end text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      تکنولوژی مورد نیاز است.
                    </p>
                  </div>
                </div>
              </div>

              <div
                id='all-posts-card-3'
                className='flex flex-row-reverse justify-around items-center w-[744px] h-[192px] rounded-[15px] mt-10'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                }}
              >
                {/* image */}
                <div>
                  <Image src={AllPostsCard3Img} />
                </div>

                {/* texts */}
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex justify-center items-center'>
                    <p className='font-bold text-[18px] text-[#1E1E1E] leading-[30px]'>
                      به روز رسانی سیستم حسابداری
                    </p>
                  </div>

                  <div className='w-[450px] flex justify-between items-center mt-5'>
                    <div className='flex flex-col justify-center items-center mr-3'>
                      <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                        <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                          1402/05/23
                        </p>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center'>
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                              125
                            </p>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px] mr-1'>
                              بازدید
                            </p>
                          </div>
                          <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                              14
                            </p>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px] mr-1'>
                              نظر
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[14px] leading-[23px]'>
                        تکنولوژی و سرگرمی
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col justify-end items-end mt-5'>
                    <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک
                    </p>
                    <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                      که لازم است و برای شرایط فعلی
                    </p>
                    <p className='font-normal text-[12px] text-end text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      تکنولوژی مورد نیاز است.
                    </p>
                  </div>
                </div>
              </div>

              <div
                id='all-posts-card-4'
                className='flex flex-row-reverse justify-around items-center w-[744px] h-[192px] rounded-[15px] mt-10'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                }}
              >
                {/* image */}
                <div>
                  <Image src={AllPostsCard4Img} />
                </div>

                {/* texts */}
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex justify-center items-center'>
                    <p className='font-bold text-[18px] text-[#1E1E1E] leading-[30px]'>
                      به روز رسانی سیستم حسابداری
                    </p>
                  </div>

                  <div className='w-[450px] flex justify-between items-center mt-5'>
                    <div className='flex flex-col justify-center items-center mr-3'>
                      <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                        <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                          1402/05/23
                        </p>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center'>
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                              125
                            </p>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px] mr-1'>
                              بازدید
                            </p>
                          </div>
                          <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                              14
                            </p>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px] mr-1'>
                              نظر
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[14px] leading-[23px]'>
                        تکنولوژی و سرگرمی
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col justify-end items-end mt-5'>
                    <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک
                    </p>
                    <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                      که لازم است و برای شرایط فعلی
                    </p>
                    <p className='font-normal text-[12px] text-end text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      تکنولوژی مورد نیاز است.
                    </p>
                  </div>
                </div>
              </div>

              <div
                id='all-posts-card-5'
                className='flex flex-row-reverse justify-around items-center w-[744px] h-[192px] rounded-[15px] mt-10'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                }}
              >
                {/* image */}
                <div>
                  <Image src={AllPostsCard5Img} />
                </div>

                {/* texts */}
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex justify-center items-center'>
                    <p className='font-bold text-[18px] text-[#1E1E1E] leading-[30px]'>
                      به روز رسانی سیستم حسابداری
                    </p>
                  </div>

                  <div className='w-[450px] flex justify-between items-center mt-5'>
                    <div className='flex flex-col justify-center items-center mr-3'>
                      <div className='flex flex-row-reverse justify-center items-center  mt-3'>
                        <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                          1402/05/23
                        </p>
                        <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                        <div className='flex flex-row-reverse justify-center items-center'>
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                              125
                            </p>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px] mr-1'>
                              بازدید
                            </p>
                          </div>
                          <div className='w-[8px] h-[8px] bg-[#5D5FEF] rounded-[50%] mr-2' />
                          <div className='flex flex-row-reverse justify-center items-center mr-2'>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                              14
                            </p>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px] mr-1'>
                              نظر
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[14px] leading-[23px]'>
                        تکنولوژی و سرگرمی
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col justify-end items-end mt-5'>
                    <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک
                    </p>
                    <p className='font-normal text-[12px] text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                      که لازم است و برای شرایط فعلی
                    </p>
                    <p className='font-normal text-[12px] text-end text-[#1E1E1E] leading-[20px] opacity-[80%]'>
                      تکنولوژی مورد نیاز است.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog-page-1-footer-menu */}
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
    </div>
  )
}

export default page


