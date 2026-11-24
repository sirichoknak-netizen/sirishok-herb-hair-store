# HERB & HAIR — Shampoo Landing Page

เว็บไซต์ตัวอย่างภาษาไทยสำหรับงานสร้าง Landing Page ขายยาสระผม มีสินค้า 2 SKUs, ตะกร้าสินค้า, แบบฟอร์มสั่งซื้อ, รายการหยิบสินค้า (Picking List), รายการแพ็กสินค้า (Packing List) และส่งออกคำสั่งซื้อเป็น CSV

## โครงสร้างไฟล์
- `index.html` — หน้าเว็บไซต์
- `styles.css` — รูปแบบและการแสดงผลแบบ responsive
- `app.js` — ข้อมูลสินค้า ตะกร้า คำสั่งซื้อ และรายการจัดส่ง
- `assets/` — โฟลเดอร์รูปภาพสินค้าแยกต่างหาก
- `google-sheets/Code.gs` — Google Apps Script สำหรับบันทึกคำสั่งซื้อลง Google Sheets

## ทดลองใช้งาน
เปิด `index.html` ในเบราว์เซอร์ หรือใช้ VS Code Live Server

> หมายเหตุ: ก่อนเชื่อม Google Sheets ต้อง Deploy Apps Script เป็น Web App และนำ URL มาใส่ในตัวแปร `GOOGLE_SHEETS_WEB_APP_URL` ใน `app.js`

## เชื่อม Google Sheets
1. สร้าง Google Spreadsheet ใหม่
2. ไปที่ Extensions → Apps Script
3. คัดลอกโค้ดจาก `google-sheets/Code.gs` ไปวาง แล้วบันทึก
4. เลือก Deploy → New deployment → Web app
5. ตั้ง Execute as เป็น Me และกำหนด Who has access ให้เหมาะกับการทดสอบ/การใช้งาน จากนั้น Deploy และคัดลอก Web app URL
6. เปิด `app.js` แล้วกำหนดค่า `GOOGLE_SHEETS_WEB_APP_URL` เป็น URL ที่ได้
7. Deploy เว็บไซต์ใหม่บน Vercel และทดสอบสั่งซื้อ 1 รายการ ตรวจสอบว่ามีข้อมูลเพิ่มในชีต `Orders`

## Deploy ขึ้น GitHub และ Vercel
1. สร้าง GitHub repository ใหม่ แล้วอัปโหลดไฟล์ทั้งหมด โดยคงโฟลเดอร์ `assets/` และ `google-sheets/` ไว้
2. เข้า Vercel → Add New → Project → Import Git Repository
3. เลือก repository นี้; เป็น Static Site ไม่ต้องกำหนด Build Command และ Output Directory ใช้ค่า root (`.`)
4. กด Deploy แล้วเปิด URL ที่ Vercel ให้มาเพื่อทดสอบ

## ขอบเขตของเวอร์ชันตัวอย่าง
- คำสั่งซื้อถูกเก็บใน `localStorage` ของเบราว์เซอร์ที่เปิดเว็บ จึงยังไม่ใช่ฐานข้อมูลกลางสำหรับร้านค้าจริง
- Google Sheets จะบันทึกเมื่อกำหนด Apps Script URL แล้วเท่านั้น
- ไม่มีระบบชำระเงินออนไลน์และระบบติดตามพัสดุ
- ชื่อสินค้า ราคา และแบรนด์เป็นข้อมูลสมมติสำหรับงานตัวอย่าง ควรแก้ให้ตรงกับข้อมูลสินค้าจริงก่อนส่ง
- ก่อนเปิดใช้จริงควรเพิ่มระบบหลังบ้านที่ปลอดภัย การตรวจสอบข้อมูล และนโยบายความเป็นส่วนตัว เนื่องจากแบบฟอร์มเก็บข้อมูลติดต่อ/ที่อยู่ลูกค้า
