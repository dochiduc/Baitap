const { MongoClient } = require('mongodb');

// URL kết nối tới MongoDB đang chạy trên máy (Localhost)
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Tên cơ sở dữ liệu và bộ sưu tập (collection)
const dbName = 'qlsinhvien';
const collectionName = 'students';

async function main() {
  try {
    // 1. Kết nối MongoDB đang chạy trên máy
    await client.connect();
    console.log("Đã kết nối thành công đến MongoDB server!");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Xóa dữ liệu cũ nếu chạy lại nhiều lần (tùy chọn để tránh trùng lặp)
    await collection.deleteMany({});

    // 2. Thêm ít nhất 3 sinh viên bằng insertMany()
    const danhSachSinhVien = [
      { masv: 'SV01', hoten: 'Đỗ Chí Đức', tuoi: 20, diem: 8.5 },
      { masv: 'SV02', hoten: 'Võ Duy Anh', tuoi: 20, diem: 7.0 },
      { masv: 'SV03', hoten: 'Lưu Huỳnh Đức Anh', tuoi: 20, diem: 9.0 }
    ];

    const insertResult = await collection.insertMany(danhSachSinhVien);
    console.log(`Đã thêm thành công ${insertResult.insertedCount} sinh viên vào collection '${collectionName}'.\n`);

    // 3. Sử dụng find() hiển thị danh sách sinh viên
    console.log("DANH SÁCH SINH VIÊN TRONG MONGODB:");
    const students = await collection.find({}).toArray();
    console.log(students);

  } catch (err) {
    console.error("Đã xảy ra lỗi:", err);
  } finally {
    // 4. Đóng kết nối sau khi hoàn thành
    await client.close();
    console.log("\nĐã đóng kết nối MongoDB.");
  }
}

main();
