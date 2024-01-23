'use client'

import Image from "next/image"

export default function Copy({url} : {url: string}) {
    return (
        <button className="hover:bg-neutral-200 p-2 rounded-lg max-lsm:p-1" onClick={() => navigator.clipboard.writeText(url)}>
            <Image src='/linksJa/copy.svg' alt="Butao de copiar link" width={26} height={26} className="max-lsm:w-[24px] max-lsm:h-[24px]"></Image>
        </button>
    )
}