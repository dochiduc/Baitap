const { MongoClient } = require('mongodb');

// Kết nối tới MongoDB local
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

const dbName = 'qlsinhvien';
const collectionName = 'students_test';

async function run() {
  try {
    await client.connect();
    console.log('Đã kết nối thành công tới MongoDB.');

    const db = client.db(dbName);
    const studentsTest = db.collection(collectionName);

    // Làm sạch dữ liệu test cũ trước khi thêm mẫu để chạy lại nhiều lần không bị trùng
    await studentsTest.deleteMany({});

    // 1. Thêm ít nhất 5 sinh viên mẫu (masv, hoten, tuoi, diem)
    const sampleStudents = [
      { masv: 'NTU01', hoten: 'Đỗ Chí Đức', tuoi: 20, diem: 8.5 },
      { masv: 'NTU02', hoten: 'Võ Duy Anh', tuoi: 21, diem: 4.2 },
      { masv: 'NTU03', hoten: 'Lưu Huỳnh Đức Anh', tuoi: 19, diem: 7.4 },
      { masv: 'NTU04', hoten: 'Nguyễn Hoàng Hải', tuoi: 22, diem: 3.8 },
      { masv: 'NTU05', hoten: 'Phạm Hoàng Hải', tuoi: 20, diem: 9.1 }
    ];

    const insertRes = await studentsTest.insertMany(sampleStudents);
    console.log(`Đã thêm ${insertRes.insertedCount} sinh viên vào collection '${collectionName}'.\n`);

    // 2. Dùng deleteOne() xóa một sinh viên theo mã sinh viên (ví dụ: 'NTU03')
    const deleteOneRes = await studentsTest.deleteOne({ masv: 'NTU03' });
    console.log(`[deleteOne] Đã xóa ${deleteOneRes.deletedCount} sinh viên có masv = 'NTU03'.`);

    // 3. Dùng deleteMany() xóa các sinh viên có điểm dưới 5 (diem < 5)
    const deleteManyRes = await studentsTest.deleteMany({ diem: { $lt: 5 } });
    console.log(`[deleteMany] Đã xóa ${deleteManyRes.deletedCount} sinh viên có điểm dưới 5.\n`);

    // 4. Hiển thị danh sách sinh viên còn lại bằng find()
    const remainingStudents = await studentsTest.find({}).toArray();
    console.log('--- DANH SÁCH SINH VIÊN CÒN LẠI TRONG students_test ---');
    console.log(remainingStudents);
  } catch (error) {
    console.error('Lỗi khi thực thi bai09.js:', error);
  } finally {
    await client.close();
    console.log('\nĐã đóng kết nối MongoDB.');
  }
}

run();
