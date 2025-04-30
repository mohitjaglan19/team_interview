import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    initializeApp({
      credential: cert({
        projectId: process.env.firebase_project_id,
        clientEmail: process.env.firebase_client_email,
        // Replace newlines in the private key
        privateKey: process.env.firebase_private_key?.replace(/\\n/g, "\n"),
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
