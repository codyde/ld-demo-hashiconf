import ld from '../ld-white-wide.png'


export default function Header(props) {
  return (
    <div className='grid w-full bg-ldgray shadow-2xl place-items-center'>
      <div className="mx-auto xl:w-full p-4 lg:p-4 px-7 lg:px-28">
        <div>
        <img src={ld} className="mx-auto max-h-30" alt="logo" />
        </div>
        <div className="text-base md:text-4xl pb-4 2xl:text-6xl">
          <p className="text-m xl:text-4xl">Welcome to<span className="text-ldyellow">HashiConf 2022</span>!</p>        
        </div>      
      </div>
    </div>
  );
}
