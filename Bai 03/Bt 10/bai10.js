const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

const dbName = 'qlsinhvien';

async function runJoinDemo() {
  try {
    await client.connect();
    console.log('Đã kết nối thành công tới MongoDB.');

    const db = client.db(dbName);
    const departmentsCol = db.collection('departments');
    const studentsJoinCol = db.collection('students_join');

    // Làm sạch dữ liệu cũ để chạy lại nhiều lần không bị trùng lặp
    await departmentsCol.deleteMany({});
    await studentsJoinCol.deleteMany({});

    // 1. Tạo collection departments gồm ít nhất 2 khoa (makhoa, tenkhoa)
    const departmentsData = [
      { makhoa: 'CNTT', tenkhoa: 'Công nghệ Thông tin' },
      { makhoa: 'KT', tenkhoa: 'Kế toán - Tài chính' },
      { makhoa: 'DDT', tenkhoa: 'Điện - Điện tử' }
    ];
    await departmentsCol.insertMany(departmentsData);
    console.log(`Đã khởi tạo ${departmentsData.length} khoa trong collection 'departments'.`);

    // 2. Tạo collection students_join gồm ít nhất 4 sinh viên (masv, hoten, makhoa)
    const studentsJoinData = [
      { masv: 'SV101', hoten: 'Trần Quốc Huy', makhoa: 'CNTT' },
      { masv: 'SV102', hoten: 'Đỗ Chí Đức', makhoa: 'KT' },
      { masv: 'SV103', hoten: 'Đoàn Mai Nhật Anh', makhoa: 'CNTT' },
      { masv: 'SV104', hoten: 'Nguyễn Lê Duy Anh', makhoa: 'DDT' },
      { masv: 'SV105', hoten: 'Đỗ Trung Ngọc Bảo', makhoa: 'KT' }
    ];
    await studentsJoinCol.insertMany(studentsJoinData);
    console.log(`Đã khởi tạo ${studentsJoinData.length} sinh viên trong collection 'students_join'.\n`);

    // 3. Sử dụng aggregate() kết hợp $lookup để liên kết sinh viên với khoa qua makhoa
    const joinedStudents = await studentsJoinCol.aggregate([
      {
        $lookup: {
          from: 'departments',
          localField: 'makhoa',
          foreignField: 'makhoa',
          as: 'thong_tin_khoa'
        }
      },
      {
        $unwind: {
          path: '$thong_tin_khoa',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $project: {
          _id: 0,
          masv: 1,
          hoten: 1,
          makhoa: 1,
          tenkhoa: { $ifNull: ['$thong_tin_khoa.tenkhoa', 'Chưa xác định'] }
        }
      }
    ]).toArray();

    // 4. Hiển thị danh sách sinh viên kèm mã khoa và tên khoa tương ứng
    console.log('--- DANH SÁCH SINH VIÊN KÈM TÊN KHOA ---');
    console.table(joinedStudents);
  } catch (err) {
    console.error('Lỗi khi chạy bai10.js:', err);
  } finally {
    await client.close();
    console.log('\nĐã đóng kết nối MongoDB.');
  }
}

runJoinDemo();
