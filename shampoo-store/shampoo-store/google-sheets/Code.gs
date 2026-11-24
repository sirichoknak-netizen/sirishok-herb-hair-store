// Google Apps Script สำหรับรับคำสั่งซื้อจากหน้าเว็บไซต์
// สร้าง Google Sheet แล้วเปิด Extensions > Apps Script จากนั้นวางโค้ดนี้
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = 'Orders';
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) sheet = ss.insertSheet(sheetName);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Order ID','วันที่','ชื่อลูกค้า','เบอร์โทร','ที่อยู่','SKU','ชื่อสินค้า','จำนวน','ราคาต่อหน่วย','รวมรายการ','ยอดรวมคำสั่งซื้อ','หมายเหตุ']);
  }
  const order = JSON.parse(e.postData.contents);
  order.items.forEach(item => sheet.appendRow([
    order.id, order.createdAt, order.customer, order.phone, order.address,
    item.sku, item.name, item.qty, item.unitPrice, item.lineTotal, order.total, order.note || ''
  ]));
  return ContentService.createTextOutput(JSON.stringify({ok:true, orderId:order.id}))
    .setMimeType(ContentService.MimeType.JSON);
}
