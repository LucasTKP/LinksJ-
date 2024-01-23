'use client'

import Image from "next/image"

export default function Edit() {
    return (
        <button className="hover:bg-neutral-200 p-2 rounded-lg max-lsm:p-1" onClick={() => {}}>
            <Image src='/linksJa/edit2.svg' alt="Butao de editar link" width={26} height={26} className="max-lsm:w-[24px] max-lsm:h-[24px]"></Image>
        </button>
    )
}