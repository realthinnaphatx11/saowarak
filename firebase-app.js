import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const app = initializeApp(window.firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const memoriesCollection = collection(db, "memories");

async function ensureSignedIn() {
  if (!auth.currentUser) await signInAnonymously(auth);
}

async function loadMemoriesFromFirestore() {
  await ensureSignedIn();
  const snapshot = await getDocs(query(memoriesCollection, orderBy("date", "desc")));
  return snapshot.docs.map(item => ({ id: item.id, ...item.data() }));
}

async function addMemoryToFirestore(memory) {
  await ensureSignedIn();
  const record = { ...memory, createdAt: new Date().toISOString() };
  const result = await addDoc(memoriesCollection, record);
  return { id: result.id, ...record };
}

async function updateMemoryInFirestore(id, memory) {
  await ensureSignedIn();
  await updateDoc(doc(db, "memories", id), { ...memory, updatedAt: new Date().toISOString() });
}

async function deleteMemoryFromFirestore(id) {
  await ensureSignedIn();
  await deleteDoc(doc(db, "memories", id));
}

window.firestoreApi = {
  loadMemoriesFromFirestore,
  addMemoryToFirestore,
  updateMemoryInFirestore,
  deleteMemoryFromFirestore
};
window.dispatchEvent(new Event("firebase-ready"));
