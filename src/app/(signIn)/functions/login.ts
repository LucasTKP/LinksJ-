import { auth } from '@/src/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormEvent } from 'react'

export default async function login(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);

    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    if (email && password) {
        return signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            return user.user.displayName
        })
        .catch((error) => {
            return error
        });
    }
}
