import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth()

export default function checkIfIsLoggedIn(idName: string): boolean {
    if(auth.currentUser?.displayName == idName) {
      return true
    } else {
      return false
    }
}

