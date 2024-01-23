import React from 'react'
import Image from 'next/image'
import * as Select from '@radix-ui/react-select';

interface Props extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  title: string
}
function InputSelect({ title, ...rest }: Props) {
  const optionsSelect = [
    { name: 'Instagram', icon: 'instagram.svg', type:'instagram' },
    { name: 'Facebook', icon: 'facebook.svg', type:'facebook'},
    { name: 'Google Meu Negocio', icon: 'GMN.svg', type:'GMN' },
    { name: 'Telefone', icon: 'telefone.svg', type: 'telefone' },
    { name: 'WhatsApp', icon: 'whatsapp.svg', type:'whatsapp' },
    { name: 'WebSite', icon: 'website.svg', type: 'website' },
    { name: 'Email', icon: 'email.svg', type:'email' },
  ]

  return (
    <div className={`flex flex-col text-[20px] mt-[20px]`}>
      {title}
      <div >
        <Select.Root name='selectSocialMedia' required>
          <Select.Trigger className={`flex data-[state=closed]:px-[10px] justify-between items-center py-[5px] w-full bg-white relative text-[#4D4D4D] mt-[5px] outline outline-[1px] rounded-[4px] focus-within:outline-[2px]  outline-black focus-within:outline-blue    
        before:w-full before:h-full before:absolute before:bottom-[-5px] before:left-[5px] before:rounded-[4px] before:outline before:outline-[1px]  before:z-[-1] before:focus-within:outline  before:focus-within:outline-[2px] before:outline-black before:focus-within:outline-blue`}>
            <Select.Value  placeholder={"Rede Social"} className='bg-black' />
            <Image src={'/linksJa/chevronDown.svg'} alt='' width={18} height={0} className='h-auto' />
          </Select.Trigger>

          <Select.Portal>
            <Select.Content  sticky='always' className=" mt-[20px] overflow-hidden bg-white rounded-[4px] border border-black ">
              <Select.Viewport className="p-[5px]">
                <Select.Group className="text-[#737373] font-[500]">
                  <Select.Label className="text-[#737373] px-[10px] text-[18px] flex justify-between items-center">
                    Redes Sociais
                    <Image src={'/linksJa/chevronDown.svg'} alt='' width={18} height={0} className='h-auto' />
                  </Select.Label>
                  {optionsSelect.map((socialMedia) => {
                    return (
                      <Select.Item key={socialMedia.name} value={socialMedia.type} className='flex justify-between px-[10px] py-[5px] hover:bg-gray-200 outline-none rounded-[4px] cursor-pointer'>
                        <Select.ItemText className='text-[20px]'>{socialMedia.name}</Select.ItemText>
                        <Image src={`/linksJa/${socialMedia.icon}`} alt='aa' width={0} height={0} className='w-[22px] h-auto' />
                      </Select.Item>
                    )
                  })
                  }
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
  )
}

export default InputSelect