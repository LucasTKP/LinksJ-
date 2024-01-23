import axios from "axios";
import { createUserFireStore } from "./createUserFireStore";
import { User } from "@/types/user";
import { verifyNameEnterprise } from "@/src/utils/functions/firebase/verifyNameEnterprise";

interface Props {
    event: React.FormEvent<HTMLFormElement>
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export async function createUser({event, setUsers} : Props) {
    const formData = new FormData(event.target as HTMLFormElement);
    const response = await verifyNameEnterprise(formData.get('email') as string)

    if(response){
        return alert(response);
    }


    let dataUser = {
        id: '',
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        nameEnterprise: formData.get('nameEnterprise')!.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z0-9]+/ig, "_").toLowerCase()
    }

    const { data } = await axios.post('/api/user/create', dataUser)
    if (data.status === 500) {
        return console.log(data.err.message)
    }

    dataUser.id = data.response.uid

    const result = await createUserFireStore(dataUser)
    setUsers((users) => [...users, result])

    const form = event.target as HTMLFormElement;
    form.reset();
}