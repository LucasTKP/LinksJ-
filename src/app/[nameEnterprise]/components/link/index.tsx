import Content from "./content"
import Copy from "./CopyButton"
import Delete from "./DeleteButton"
import Edit from "./EditButton"

export const Link = {
    Root: LinkDiv,
    Content: Content,
}

export const Actions = {
    Copy: Copy,
    Edit: Edit,
    Delete: Delete
}

function LinkDiv({children, color}: {children?: React.ReactNode, color: string}) {
    return (
        <div className="bg-white border-2 rounded-md py-1 px-4 max-lsm:px-2 flex justify-between items-center  my-4 cursor-pointer hover:drop-shadow-none hover:bg-neutral-100 duration-100"
            style={{borderColor: color, boxShadow: `4px 4px 0px ${color}`}}
        >
            {children}
        </div>
    )
}