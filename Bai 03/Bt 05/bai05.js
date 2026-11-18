const { MongoClient } = require('mongodb');

// URL kết nối tới MongoDB đang chạy trên máy
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'qlsinhvien';
const collectionName = 'students';

async function main() {
  try {
    // Kết nối MongoDB
    await client.connect();
    console.log("Đã kết nối thành công đến MongoDB server!");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // 1. Tìm các sinh viên có diem >= 7 bằng find() và $gte
    console.log("\n--- [1] DANH SÁCH SINH VIÊN CÓ ĐIỂM >= 7 ---");
    const filterQuery = { diem: { $gte: 7 } };
    const listGte7 = await collection.find(filterQuery).toArray();
    console.log(listGte7);

    // 2. Sắp xếp kết quả theo điểm giảm dần bằng sort() (diem: -1)
    console.log("\n--- [2] DANH SÁCH LỌC VÀ SẮP XẾP GIẢM DẦN THEO ĐIỂM ---");
    const listSorted = await collection.find(filterQuery).sort({ diem: -1 }).toArray();
    console.log(listSorted);

    // 3. Cập nhật điểm của một sinh viên theo masv bằng updateOne() và $set
    // Ví dụ: Cập nhật sinh viên có masv là 'SV02' thành diem mới là 9.5
    console.log("\n--- [3] CẬP NHẬT ĐIỂM CHO SINH VIÊN (SV02 -> 9.5) ---");
    const updateResult = await collection.updateOne(
      { masv: 'SV02' },
      { $set: { diem: 9.5 } }
    );
    console.log(`Đã cập nhật thành công! Số lượng bản ghi thay đổi: ${updateResult.modifiedCount}`);

    // 4. Hiển thị lại thông tin toàn bộ danh sách sau cập nhật để kiểm tra kết quả
    console.log("\n--- [4] DANH SÁCH SINH VIÊN SAU KHI CẬP NHẬT ---");
    const allStudents = await collection.find({}).toArray();
    console.log(allStudents);

  } catch (err) {
    console.error("Đã xảy ra lỗi:", err);
  } finally {
    // Đóng kết nối
    await client.close();
    console.log("\nĐã đóng kết nối MongoDB.");
  }
}

main();
