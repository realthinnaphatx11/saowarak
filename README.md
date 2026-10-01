# 💗 Our Love Story — เส้นทางความทรงจำของเรา

เว็บไซต์เก็บความทรงจำของคนสองคนในรูปแบบ **ไทม์ไลน์** พร้อมนับจำนวนวันที่คบกัน เก็บรูปภาพ เรื่องราว อารมณ์ในแต่ละวัน และมีลูกเล่นน่ารัก ๆ เช่น สุ่มความทรงจำ, "วันนี้เมื่อปีก่อน", เพลงประกอบ และโหมดมืด

> สร้างด้วย HTML + Tailwind CSS + JavaScript ล้วน ๆ ไม่ต้อง build เก็บข้อมูลบน Firebase Firestore

---

## ✨ ฟีเจอร์หลัก

### 🗓️ ความทรงจำ
- **ตัวนับวัน** แสดงจำนวนวันที่คบกัน และนับถอยหลังถึงวันครบรอบถัดไป (มีคอนเฟตติฉลอง 🎉)
- **เพิ่ม / แก้ไข / ลบ** ความทรงจำ ใส่ชื่อเรื่อง วันที่ สถานที่ เรื่องราว และ Mood
- **อัปโหลดหลายรูปต่อหนึ่งความทรงจำ** ย่อและบีบอัดรูปอัตโนมัติก่อนบันทึก
- **ปรับจุดโฟกัสรูป** (Focal Point) เลือกได้ว่าจะให้ส่วนไหนของรูปโชว์ในการ์ด
- **Lightbox** ดูรูปเต็มจอ เลื่อนดูรูปก่อนหน้า/ถัดไปได้
- **รายการโปรด** กดหัวใจเพื่อเก็บความทรงจำที่ชอบ

### 🔎 การแสดงผลและค้นหา
- สลับมุมมอง **Timeline** / **Gallery Grid**
- ค้นหาความทรงจำด้วยคีย์เวิร์ด
- กรองตาม **Mood** และเฉพาะรายการโปรด
- เรียงลำดับ ล่าสุด→อดีต หรือ อดีต→ล่าสุด
- ซ่อน/แสดงเรื่องราวในการ์ด

| Mood | ความหมาย |
|------|----------|
| ❤️ | มีความสุขมาก ๆ |
| 🥰 | อบอุ่นหัวใจ |
| 😊 | อารมณ์ดี |
| 😋 | ของกินอร่อย |
| ✈️ | เที่ยวด้วยกัน |
| 🥺 | คิดถึงจัง |

### 🎁 ลูกเล่นพิเศษ
- **🎲 สุ่มความทรงจำ** หยิบความทรงจำเก่ามาให้ย้อนดูแบบไม่คาดคิด
- **📅 วันนี้เมื่อปีก่อน** แจ้งเตือนความทรงจำที่ตรงกับวันนี้ในปีที่ผ่านมา
- **🎵 เพลงประกอบ** เปิด/ปิดได้ (จำสถานะไว้)
- **🌙 Dark Mode** จำค่าที่เลือก หรือใช้ตามระบบอัตโนมัติ
- **💕 เอฟเฟกต์หัวใจ** ลอยตามเมาส์/นิ้วที่แตะ
- **🔐 หน้า Login** กันคนอื่นเข้ามาดู

### 🔗 หน้าที่เชื่อมต่อกัน
| หน้า | หน้าที่ |
|------|---------|
| `index.html` | หน้าหลัก — ไทม์ไลน์ความทรงจำ (ไฟล์นี้) |
| `login.html` | หน้าเข้าสู่ระบบ |
| `map.html` | แผนที่ความทรงจำ |
| `marquee.html` | แกลเลอรีรูป |
| `puzzle.html` | เกมจิ๊กซอว์ |

---

## 🛠️ เทคโนโลยีที่ใช้

- **HTML / CSS / Vanilla JavaScript**
- [Tailwind CSS](https://tailwindcss.com/) (CDN)
- [Lucide Icons](https://lucide.dev/)
- [canvas-confetti](https://github.com/catdad/canvas-confetti)
- [Firebase Firestore](https://firebase.google.com/docs/firestore) สำหรับเก็บความทรงจำ
- Google Fonts: **Prompt**, **Mitr**, **Sacramento**

---

## 📁 โครงสร้างโปรเจกต์

```
.
├── index.html           # หน้าหลัก (ไทม์ไลน์)
├── login.html           # หน้า Login
├── map.html             # แผนที่ความทรงจำ
├── marquee.html         # แกลเลอรีรูป
├── puzzle.html          # จิ๊กซอว์
├── firebase-config.js   # ค่า config ของ Firebase (สร้างเอง)
├── firebase-app.js      # ฟังก์ชันเชื่อมต่อ Firestore
└── bgm.mp3              # เพลงประกอบ (ใส่เอง)
```

---

## 🚀 วิธีติดตั้งและใช้งาน

### 1. Clone โปรเจกต์
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. ตั้งค่า Firebase
1. สร้างโปรเจกต์ที่ [Firebase Console](https://console.firebase.google.com/)
2. เปิดใช้งาน **Cloud Firestore**
3. สร้างไฟล์ `firebase-config.js` ในโฟลเดอร์หลัก:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

`index.html` จะนำค่านี้ไปใช้ผ่าน `window.firebaseConfig` แล้วโหลด `firebase-app.js` ซึ่งต้องมีฟังก์ชันเหล่านี้ใน `window.firestoreApi`:

| ฟังก์ชัน | หน้าที่ |
|----------|---------|
| `loadMemoriesFromFirestore()` | โหลดความทรงจำทั้งหมด |
| `addMemoryToFirestore(memory)` | เพิ่มความทรงจำใหม่ |
| `updateMemoryInFirestore(memory)` | แก้ไขความทรงจำ / สลับโปรด |
| `deleteMemoryFromFirestore(id)` | ลบความทรงจำ |

### 3. ใส่เพลงประกอบ (ไม่บังคับ)
วางไฟล์เพลงชื่อ `bgm.mp3` ไว้ในโฟลเดอร์เดียวกับ `index.html` (หรือแก้ path ในแท็ก `<audio id="bgm-audio">`)

### 4. รันเว็บ
เปิดผ่านเว็บเซิร์ฟเวอร์ภายในเครื่อง (จำเป็น เพราะใช้ ES Module):

```bash
# ตัวเลือกที่ 1: Python
python3 -m http.server 8000

# ตัวเลือกที่ 2: Node.js
npx serve .
```

แล้วเข้า `http://localhost:8000/login.html`

### 5. Deploy (ตัวอย่าง GitHub Pages)
1. ไปที่ **Settings → Pages**
2. เลือก Branch `main` และโฟลเดอร์ `/ (root)`
3. รอสักครู่ เว็บจะออนไลน์ที่ `https://<your-username>.github.io/<your-repo>/`

---

## ⚙️ การปรับแต่ง

- **ชื่อคู่รักและวันที่เริ่มคบกัน** — คลิกที่ชื่อ หรือเปิดหน้าตั้งค่าในเว็บเพื่อแก้ไข (เก็บไว้ใน `localStorage` ของเบราว์เซอร์) ค่าเริ่มต้นอยู่ในตัวแปร `settings` ใน `index.html`
- **คุณภาพรูป** — ปรับได้ที่ฟังก์ชัน `compressImage(file, maxSize = 900, quality = 0.7)`
- **สีและธีม** — แก้ที่ `tailwind.config` (กลุ่มสี `pastel` และ `mood`) ในส่วน `<head>`

---

## 🔒 ข้อควรระวังด้านความปลอดภัย

โปรเจกต์นี้เก็บข้อมูลส่วนตัว ควรตรวจสอบก่อนเผยแพร่:

- การตรวจสอบ Login ใน `index.html` ใช้ `localStorage` ฝั่งเบราว์เซอร์เท่านั้น **ไม่ใช่ระบบความปลอดภัยจริง** ใครก็ตามที่เปิด DevTools ก็ข้ามได้
- ตั้ง **Firestore Security Rules** ให้เหมาะสม ไม่ปล่อยให้อ่าน/เขียนได้ทุกคน (เช่น ผูกกับ Firebase Authentication)
- ถ้าเป็น repo สาธารณะ อย่า commit ข้อมูลส่วนตัว เช่น รูปภาพ หรือรหัสผ่านที่ hardcode ไว้ใน `login.html` ควรเปลี่ยนเป็น **Private repository** หรือเพิ่มไฟล์ที่ไม่ต้องการเผยแพร่ลง `.gitignore`
- รูปถูกบันทึกเป็น Base64 ใน Firestore (เอกสารละไม่เกิน 1 MiB) ถ้ามีรูปจำนวนมากต่อความทรงจำ ควรพิจารณาย้ายไปเก็บบน Firebase Storage

---

## 📸 ตัวอย่างหน้าจอ

> วางภาพหน้าจอของเว็บที่นี่ เช่น

```md
![Timeline](docs/screenshot-timeline.png)
![Gallery](docs/screenshot-grid.png)
```

---

## 📄 License

โปรเจกต์ส่วนตัว — ปรับใช้ตามต้องการ หรือเพิ่มไฟล์ `LICENSE` ตามที่เหมาะสม (เช่น MIT)

---

<p align="center">Made with 💗 for the moments we never want to forget.</p>
