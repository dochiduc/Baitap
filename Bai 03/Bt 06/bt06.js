// Sử dụng require() để gọi các hàm từ module xulyDiem.js
const xuLy = require('./xulyDiem');

// Tạo dữ liệu 3 sinh viên gồm họ tên và điểm 3 môn
const danhSachSinhVien = [
  { hoTen: "Nguyen Van A", toan: 8.5, ly: 8.0, hoa: 9.0 },
  { hoTen: "Tran Thi B", toan: 7.0, ly: 6.5, hoa: 7.0 },
  { hoTen: "Le Van C", toan: 4.5, ly: 5.0, hoa: 4.0 }
];

console.log("--- BẢNG XẾP LOẠI HỌC TẬP SINH VIÊN ---");

// Duyệt danh sách, tính toán và hiển thị kết quả trên Terminal
danhSachSinhVien.forEach((sv, index) => {
  // Tính điểm trung bình (làm tròn 2 chữ số thập phân)
  const dtb = xuLy.tinhDiemTrungBinh(sv.toan, sv.ly, sv.hoa);
  // Xếp loại học tập
  const xepLoai = xuLy.xepLoaiHocTap(dtb);

  console.log(`\n[${index + 1}] Họ tên: ${sv.hoTen}`);
  console.log(`    Điểm 3 môn (Toán: ${sv.toan}, Lý: ${sv.ly}, Hóa: ${sv.hoa})`);
  console.log(`    Điểm trung bình: ${dtb.toFixed(2)}`);
  console.log(`    Xếp loại: ${xepLoai}`);
});
