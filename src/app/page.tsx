import Image from 'next/image'
import Form from './(signIn)/components/form'

export default function Home() {
  return (
    <main className="w-full h-full flex sm:items-center sm:justify-center">
      <div className='max-sm:mt-[30px] relative overflow-hidden text-black w-[490px] max-sm:w-full sm:border sm:border-[#BBBBBB] sm:bg-white sm:drop-shadow-[4px_4px_0px_rgba(188,188,188,1)] sm:rounded-[10px] pt-[25px] pb-[70px]'>
        <div className='w-full flex items-center justify-center'>
          <Image src={'/logo.svg'} alt='a' width={0} height={0} quality={100} className='w-auto h-[30px]' />
          <p className='ml-[5px] font-[700] text-[20px]'>Link<span className='text-blue'>Já</span></p>
        </div>

        <p className='text-center mt-[25px] text-[26px]'>Faça Login no LinkJá</p>
        <p className='text-center text-[20px] opacity-80'>Insira seu email e senha</p>
        <Form />
      </div>
    </main>
  )
}
