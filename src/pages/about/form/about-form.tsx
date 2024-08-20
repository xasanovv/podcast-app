import Title from '../../../components/Title/title';
import { Button } from '../../../components/button/button';

const AboutForm = () => {
  return (
    <div className="container py-[140px] relative">
      <div className='absolute right-[15%] top-[100px]'>
        <svg
          width="70"
          height="32"
          viewBox="0 0 70 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8455 3.98285C15.7481 5.16747 13.7556 6.15193 11.7444 7.50053C8.79734 9.46699 5.96873 11.6377 3.09225 13.7174C2.34498 14.2521 1.63483 15.152 0.669269 14.2825C0.0374764 13.7114 0.258281 12.8061 1.31604 11.5157C1.93182 10.7728 2.59291 10.0741 3.31846 9.45596C7.42906 5.93757 11.9418 3.18446 16.8463 1.23975C17.6823 0.915971 18.5732 0.65456 19.4577 0.591515C21.1379 0.485432 22.0899 1.81301 21.5114 3.55259C21.1394 4.67526 20.4928 5.71708 19.9055 6.74556C18.7851 8.69525 17.5836 10.5749 16.4859 12.5466C16.1852 13.0896 15.7402 14.0522 15.9585 14.5939C16.3598 15.4205 18.4967 14.0165 19.456 13.3594C22.3935 11.3747 25.2735 9.2807 28.1918 7.25958C31.1136 5.22409 34.2042 3.53095 37.5662 2.56458C38.5461 2.28316 39.5739 2.09284 40.5823 2.09704C42.2082 2.09822 43.1417 3.55899 42.613 5.267C42.3574 6.08508 41.9247 6.88185 41.412 7.54721C40.1087 9.21204 38.7052 10.7704 37.3697 12.3949C35.9739 14.0941 34.5389 15.7818 33.5469 18.3545C34.3421 17.9109 34.8482 17.6749 35.3066 17.3477C38.2746 15.295 41.2008 13.1839 44.188 11.1676C46.9064 9.33406 49.73 7.70095 52.8563 6.89622C54.0369 6.59686 55.3167 6.46534 56.5098 6.63174C58.1617 6.87158 58.9345 8.53147 58.1965 10.1779C57.6491 11.3875 56.8506 12.4771 56.0662 13.5091C54.5681 15.4554 52.9924 17.3173 51.4751 19.2272C51.1336 19.6503 50.1731 20.5997 50.7598 20.8957C51.5996 20.3266 52.4428 19.7431 53.2922 19.1922C55.5522 17.6858 57.78 16.1391 60.0783 14.7056C62.1479 13.405 64.3411 12.4026 66.8096 12.5132C68.8908 12.6021 69.9513 14.3467 69.1047 16.4386C68.6919 17.4415 68.1151 18.4268 67.439 19.2444C64.4832 22.8563 61.4726 26.4058 58.4715 29.9736C58.1404 30.3536 57.7763 30.7546 57.346 30.9668C56.9489 31.158 56.3189 31.3268 56.0365 31.105C55.7541 30.8833 55.2908 30.254 55.577 29.3679C55.8457 28.5537 56.2187 28.0012 56.7018 27.3425C58.9295 24.3018 61.2251 21.3273 63.4981 18.3307C64.1148 17.5265 64.7542 16.7444 65.384 15.944C65.5945 15.7133 65.5657 15.6587 65.5118 15.535C65.185 15.2078 63.9248 15.7763 63.381 16.1091C60.271 17.9968 57.1932 19.9247 54.1249 21.8709C52.9142 22.6388 51.7574 23.5305 50.5467 24.2984C49.5516 24.9296 48.4645 25.1333 47.5191 24.2389C46.5736 23.3445 46.5671 22.0488 47.0307 20.9531C47.7023 19.3487 48.4464 17.7349 49.4493 16.3821C50.9623 14.317 52.7316 12.4659 54.3841 10.5188C54.6619 10.1847 54.9205 9.81419 55.4036 9.15549C54.6463 9.27141 54.1962 9.27753 53.7608 9.39579C50.904 10.1874 48.2969 11.6225 45.843 13.349C42.8976 15.4238 40.0611 17.6846 37.1313 19.8102C35.972 20.6548 34.7795 21.5206 33.5027 22.0996C31.0215 23.2483 29.1957 21.7097 29.6246 18.8017C29.8328 17.4306 30.3594 16.0762 30.9661 14.8532C32.4951 11.7454 34.8347 9.33831 37.0896 6.87549C37.5673 6.35383 38.045 5.83216 38.4261 5.18962C35.6527 5.46677 33.1846 6.61927 30.8566 8.05946C27.242 10.2915 23.7388 12.7565 20.1756 15.0652C19.2599 15.6582 18.2727 16.1993 17.2527 16.5305C15.5197 17.0831 14.0835 15.844 14.1729 13.868C14.2311 12.422 14.5861 10.9092 15.1187 9.58743C15.8876 7.64207 17.9987 4.27439 18.0025 4.02906C18.0551 3.8135 17.8455 3.98285 17.8455 3.98285Z"
            fill="#81ADC8"
          />
        </svg>
      </div>
      <div className="pb-[60px] border-b border-b-grey-color">
        <Title text="Get in touch" subtitle="Send your message to us" />
      </div>
      <form className="relative grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2 pt-10">
        <label className="flex flex-col gap-4 text-[1rem]">
          <span className="font-bold">
            Full Name <span className="text-orange-color">*</span>
          </span>
          <input
            className="py-5 pl-5 border border-black focus:border-orange-color outline-none rounded-xl"
            type="text"
            name="fullName"
            placeholder="full name..."
          />
        </label>
        <label className="flex flex-col gap-4">
          <span className="font-bold">
            Email <span className="text-orange-color">*</span>
          </span>
          <input
            className="py-5 pl-5 border border-black focus:border-orange-color outline-none rounded-xl"
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
          />
        </label>
        <label className="flex flex-col gap-4">
          <span className="font-bold">
            Phone <span className="text-orange-color">*</span>
          </span>
          <input
            className="py-5 pl-5 border border-black focus:border-orange-color outline-none rounded-xl"
            type="tel"
            name="phone"
            placeholder="Phone"
          />
        </label>
        <label className="flex flex-col gap-4">
          <span className="font-bold">
            Subject <span className="text-orange-color">*</span>
          </span>
          <input
            className="py-5 pl-5 border border-black focus:border-orange-color outline-none rounded-xl"
            type="text"
            name="subject"
            placeholder="Subject..."
          />
        </label>
        <label className="flex flex-col gap-4 lg:col-span-2">
          <span className="font-bold">
            Message <span className="text-orange-color">*</span>
          </span>
          <textarea
            className="h-[165px] border-black resize-none py-5 pl-5 border focus:border-orange-color outline-none rounded-xl"
            name="textarea"
            placeholder="full name..."
          />
        </label>
        <div className="lg:col-span-2 flex justify-between text-[12px] sm:text-[16px] items-center gap-x-2">
          <span className="w-[176px]">
            required <span className="text-orange-color">*</span>
          </span>
          <button className="m-auto">
            <Button
              text="SEND MESSAGE"
              classes="sm:py-[20px] sm:px-[36px] bg-black text-white"
            />
          </button>
          <span className="lg:max-w-[176px]">
            Viverra at port accumsan.
            <a className="text-orange-color inline-block">Orci non</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default AboutForm;
