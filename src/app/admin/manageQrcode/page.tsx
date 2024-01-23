'use client'
import React, { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';
import { uploadFirestore } from './functions/uploadQrcodeFirestores';
import { uploadStorage } from './functions/uploadQrcodeStorage';
import { updateQrcode } from './functions/updateQrcode';
import { downloadQrcode } from './functions/downlaodQrcode';
import { generateUrlQrcode } from './functions/generateQrcode';
import { getQrcodes } from './functions/getQrcodes';
import { useRouter } from 'next/navigation';
import { QrCode } from '@/src/app/admin/types/qrcode';



function Page() {
  const [dataQrcode, setDataQrcode] = useState<QrCode>()
  const [buttonLoading, setButtonLoading] = useState(false)
  const [qrcodes, setQrcodes] = useState<QrCode[]>([])
  const [type, setType] = useState<'links' | 'gmn'>('gmn')
  const [loading, setLoading] = useState(true)
  const router = useRouter()


  useEffect(() => {
    getQrcodes({ setQrcodes, setLoading })
  }, [])


  useEffect(() => {
    if (dataQrcode) {
      uploadQrcode()
    }

    async function uploadQrcode() {
      if (dataQrcode) {
        setButtonLoading(true)
        const svgElement = document.getElementById('qrCodeSvg')
        await Promise.all([uploadStorage({ svgElement, idQrcode: dataQrcode.id }), uploadFirestore({ qrcode: dataQrcode, setQrcodes })])
        setButtonLoading(false)
      }
    }
  }, [dataQrcode])


  function onChangeQrcodeUrl({ index, redirectUrl }: { index: number, redirectUrl: string }) {
    setQrcodes((qrcodes) => {
      const result = [...qrcodes]
      result[index].redirectUrl = redirectUrl
      return result
    })
  }

  function onChangeQrcodeNameEnterprise({ index, nameEnterprise }: { index: number, nameEnterprise: string }) {
    setQrcodes((qrcodes) => {
      const result = [...qrcodes]
      result[index].nameEnterprise = nameEnterprise
      return result
    })
  }


  return (
    <section className='w-full h-full flex flex-col items-center py-[20px]'>
      {dataQrcode && <QRCodeSVG level='L' value={dataQrcode.url} id="qrCodeSvg" size={150} className='hidden' />}
      <button onClick={() => router.push('/admin/manageUser')} className='text-[20px] border-black border px-[5px] py-[3px] rounded-[4px] hover:bg-zinc-300 duration-100'>
        Ir para o manage User
      </button>
      {loading ?
        <svg className="h-[40px] w-[40px] animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" style={{ strokeWidth: 4 }} />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        :
        <>
          <div className='mt-[20px] flex items-center justify-between gap-x-[15px]'>
            <button onClick={() => setType('gmn')} className={`border border-black px-[15px] rounded-[4px] py-[5px] ${type === 'gmn' && 'bg-green'}`}>
              GMN
            </button>

            <button onClick={() => setType('links')} className={`border border-black px-[15px] rounded-[4px] py-[5px] ${type === 'links' && 'bg-green'}`}>
              Links
            </button>
          </div>

          {qrcodes?.map((qrcode, index) => {
            if(qrcode.type != type){
              return
            }
            
              return (
                <div key={qrcode.id} className='mt-[20px] border border-black px-[10px] py-[10px] rounded-[4px]'>
                  <p> <span className='font-[600]'>Id:</span> {qrcode.id}</p>
                  <div className='flex items-center gap-x-[10px] max-lsm:gap-x-[5px]'>
                    <p className='text-[18px] max-lsm:text-[18px] font-[600]'>{index + 1}</p>
                    <div className='flex flex-col gap-y-[10px]'>
                      <input id={index.toString()} className='placeholder:text-black text-[18px] max-lsm:text-[18px] px-[5px] py-[3px] bg-zinc-300 rounded-[4px] max-lsm:max-w-[250px]' type="text" value={qrcodes[index].nameEnterprise} onChange={(text) => onChangeQrcodeNameEnterprise({ index, nameEnterprise: text.target.value })} placeholder='Nome da empresa' />
                      <input id={index.toString()} className='placeholder:text-black text-[18px] max-lsm:text-[18px] px-[5px] py-[3px] bg-zinc-300 rounded-[4px] max-lsm:max-w-[250px]' type="text" value={qrcodes[index].redirectUrl} onChange={(text) => onChangeQrcodeUrl({ index, redirectUrl: text.target.value })} placeholder='url' />
                    </div>
                    <Image className='cursor-pointer hover:opacity-70 duration-100 max-lsm:w-[35px] max-lsm:h-[35px]' onClick={() => downloadQrcode(qrcode)} src={'/qrcode/download.svg'} alt='Download' width={40} height={40} />
                    <button className='text-emerald-600 font-[600] bg-emerald-100 border border-emerald-600 px-[5px] py-[3px] rounded-[4px] duration-100 hover:bg-emerald-300' onClick={() => updateQrcode(qrcode)}>Salvar</button>
                  </div>
                </div>
              )

            })}

          <div className='mt-[30px]'>
            {buttonLoading ?
              <svg className="h-[40px] w-[40px] animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" style={{ strokeWidth: 4 }} />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>

              :
              <button onClick={() => setDataQrcode(generateUrlQrcode(type))} className='text-[20px] border-black border px-[5px] py-[3px] rounded-[4px] hover:bg-zinc-300 duration-100'>
                Gerar Qr
              </button>
            }
          </div>
        </>
      }
    </section>
  );

}

export default Page