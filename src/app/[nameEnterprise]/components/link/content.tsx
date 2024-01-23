import Image from "next/image";

import upperCase from "@/src/utils/functions/uppercaseFirstLetter";

export default function Content({url, type}: {url: string, type: 'instagram' | 'facebook' | 'GMN' | 'telefone' | 'whatsapp' | 'website' | 'email'}) {
    return (
        <a href={url} target='__blank' className="flex items-center gap-10 w-full max-lsm:gap-5">
            <Image src={`/linksJa/${type}.svg`} alt="Icone do link" width={40} height={40} className="max-lsm:w-[25px] max-lsm:h-[25px]"></Image>
            <p className="text-[20px] font-medium max-lsm:text-[16px]">{upperCase(type)}</p>
        </a>
    )
}