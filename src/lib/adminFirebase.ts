var admin = require("firebase-admin");
var serviceAccount = require("./credentials.ts");
import {getAuth} from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore';


if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch(e) {
    console.log(e)
  }
}

const db = getFirestore()

export {getAuth, db}
