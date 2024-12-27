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
import BlogPage2HeroImg from '@/public/assets/images/blog-page-2-hero-section-img.svg'
import BlogPage2AfterHeroSectionImg from '@/public/assets/images/blog-page-2-after-hero-section-img.svg'
import BlogPage2LastTextSectionImg from '@/public/assets/images/blog-page-2-last-text-section-img.svg'
import UserCommentCardAvatar from '@/public/assets/icons/comment-card-user-avatar-icon.svg'

function page() {
  return (
    <div id='blog-page-2-fully-container'>
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
      <div
        id='blog-page-2-section-container'
        className='flex flex-col justify-center items-center'
      >
        {/* Hero-banner */}
        <div className='mt-20' id='blog-page-2-hero-section-img'>
          <Image src={BlogPage2HeroImg} />
        </div>
        {/* hero-texts-container */}
        <div className='w-[915px] flex justify-end items-end mt-10'>
          <p className='font-bold text-[24px] text-[#151D48] text-end leading-[36px]'>
            به روز رسانی سیستم حسابداری
          </p>
        </div>
        <div className='w-[915px] flex flex-row-reverse justify-between items-center mt-10'>
          <div className='flex justify-center items-center'>
            <p className='font-medium text-[16px] text-[#1E1E1E] leading-[27px] '>
              تکنولوژی و سرگرمی
            </p>
          </div>
          <div className='flex flex-col justify-center items-center mr-3'>
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

        <div className='w-[915px] flex flex-col justify-center items-center mt-10'>
          <p className='font-light text-[16px] leading-[33px] text-end'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
          </p>
        </div>

        {/* after-hero */}
        <div className='w-[915px] flex flex-col justify-center items-center mt-20'>
          <Image src={BlogPage2AfterHeroSectionImg} />
          <div className='w-[915px] flex justify-end items-end'>
            <p className='font-bold text-[24px] text-[#151D48] text-end leading-[36px] mt-10'>
              اضافه کردن فیچرهای جدید به وبسایت
            </p>
          </div>
          <div className='flex flex-col justify-center items-center mt-10'>
            <p className='font-light text-[16px] leading-[33px] text-end'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد.
            </p>
          </div>
        </div>

        {/* last-text-section */}
        <div className='w-[915px] flex flex-col justify-center items-center mt-20'>
          <Image src={BlogPage2LastTextSectionImg} />
          <div className='w-[915px] flex justify-end items-end'>
            <p className='font-bold text-[24px] text-[#151D48] text-end leading-[36px] mt-10'>
              اضافه کردن فیچرهای جدید به وبسایت
            </p>
          </div>
          <div className='flex flex-col justify-center items-center mt-10'>
            <p className='font-light text-[16px] leading-[33px] text-end'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد.
            </p>
          </div>
        </div>

        {/* comment-section-container */}
        <div className='flex flex-col justify-center items-center'>
          <p className='font-bold text-[24px] text-[#151D48] leading-[36px] mt-20'>
            نظرات
          </p>

          {/* comment-cards-section */}
          <div
            id='user-comment-full-card'
            className='w-[930px] h-[162px] rounded-[15px]  flex flex-col justify-center items-center p-5 mt-10'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* user-comment-card-user-avatar user-comment-card-name & user-comment-card-date*/}
            <div className='w-[920px] flex flex-row-reverse justify-between items-center p-5'>
              <div className='flex flex-row-reverse justify-center items-center'>
                <div
                  id='user-comment-card-avatar-container'
                  className='flex justify-center items-center w-[50px] h-[50px] bg-[#5D5FEF] rounded-[50%]'
                >
                  <Image id='user-comment-avatr' src={UserCommentCardAvatar} />
                </div>
                <p className='font-bold text-[16px] text-[#1E1E1E] leading-[27px] mr-5'>
                  مرتضی شیرین زاده
                </p>
              </div>
              <div>
                <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                  1402/05/23
                </p>
              </div>
            </div>

            {/* user-comment-card-comment */}
            <div className='flex justify-end items-end'>
              <p className='font-normal text-[14px] text-[#1E1E1E] text-end leading-[28px] '>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز است.
              </p>
            </div>
          </div>

          <div
            id='user-comment-full-card'
            className='w-[930px] h-[162px] rounded-[15px]  flex flex-col justify-center items-center p-5 mt-10'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* user-comment-card-user-avatar user-comment-card-name & user-comment-card-date*/}
            <div className='w-[920px] flex flex-row-reverse justify-between items-center p-5'>
              <div className='flex flex-row-reverse justify-center items-center'>
                <div
                  id='user-comment-card-avatar-container'
                  className='flex justify-center items-center w-[50px] h-[50px] bg-[#5D5FEF] rounded-[50%]'
                >
                  <Image id='user-comment-avatr' src={UserCommentCardAvatar} />
                </div>
                <p className='font-bold text-[16px] text-[#1E1E1E] leading-[27px] mr-5'>
                  مرتضی شیرین زاده
                </p>
              </div>
              <div>
                <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                  1402/05/23
                </p>
              </div>
            </div>

            {/* user-comment-card-comment */}
            <div className='flex justify-end items-end'>
              <p className='font-normal text-[14px] text-[#1E1E1E] text-end leading-[28px] '>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز است.
              </p>
            </div>
          </div>

          <div
            id='user-comment-full-card'
            className='w-[930px] h-[162px] rounded-[15px]  flex flex-col justify-center items-center p-5 mt-10'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* user-comment-card-user-avatar user-comment-card-name & user-comment-card-date*/}
            <div className='w-[920px] flex flex-row-reverse justify-between items-center p-5'>
              <div className='flex flex-row-reverse justify-center items-center'>
                <div
                  id='user-comment-card-avatar-container'
                  className='flex justify-center items-center w-[50px] h-[50px] bg-[#5D5FEF] rounded-[50%]'
                >
                  <Image id='user-comment-avatr' src={UserCommentCardAvatar} />
                </div>
                <p className='font-bold text-[16px] text-[#1E1E1E] leading-[27px] mr-5'>
                  مرتضی شیرین زاده
                </p>
              </div>
              <div>
                <p className='font-normal text-[14px] text-[#1E1E1E] leading-[23px]'>
                  1402/05/23
                </p>
              </div>
            </div>

            {/* user-comment-card-comment */}
            <div className='flex justify-end items-end'>
              <p className='font-normal text-[14px] text-[#1E1E1E] text-end leading-[28px] '>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز است.
              </p>
            </div>
          </div>
        </div>
        {/* hr-div */}
        <div className='w-[933px] h-[1px] border-[2px] border-[#9E9FF0] opacity-[20%] mt-20' />

        {/* add-comment-by-user-section */}
        <form>
          <div className='flex flex-row-reverse justify-center items-center gap-5 mt-10'>
            <input
              dir='rtl'
              className='flex justify-center items-center w-[452px] h-[60px] rounded-[30px] p-10 placeholder:font-normal placeholder:text-[16px] placeholder:text-[#5D5FEF] placeholder:leading-[27px] placeholder:opacity-[70%]'
              style={{
                backgroundColor: 'rgba(93, 95, 239, 0.1)',
                boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
              }}
              placeholder='نام'
            />

            <input
              dir='rtl'
              className='flex justify-center items-center w-[452px] h-[60px] rounded-[30px] p-10 placeholder:font-normal placeholder:text-[16px] placeholder:text-[#5D5FEF] placeholder:leading-[27px] placeholder:opacity-[70%]'
              style={{
                backgroundColor: 'rgba(93, 95, 239, 0.1)',
                boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
              }}
              placeholder='ایمیل'
            />
          </div>

          <div>
            <textarea
              dir='rtl'
              className='w-[933px] h-[174px] rounded-[20px] mt-5 p-10 overflow-scroll placeholder:font-normal placeholder:text-[16px] placeholder:text-[#5D5FEF] placeholder:leading-[27px] placeholder:opacity-[70%]'
              style={{
                backgroundColor: 'rgba(93, 95, 239, 0.1)',
                boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                resize: 'none',
              }}
              placeholder='متن دیدگاه'
            ></textarea>
          </div>

          {/* submit-button */}
          <div className=''>
            <button
              className='flex justify-center items-center w-[149px] h-[50px] rounded-[61px] mt-10'
              style={{
                backgroundColor: 'rgba(93, 95, 239, 1)',
                boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <p className='font-bold text-[16px] text-[#FFFFFF] leading-[27px] '>
                ارسال دیدگاه
              </p>
            </button>
          </div>
        </form>
      </div>
      {/* blog-page-2-footer-menu */}
      <div className='mt-20'>
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
    </div>
  )
}

export default page
