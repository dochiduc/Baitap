class SinhVien {
  constructor(ma, hoTen, tuoi, diem) {
    this.ma = ma;
    this.hoTen = hoTen;
    this.tuoi = tuoi;
    this.diem = diem;
  }
}

const danhSachSinhVien = [
  new SinhVien("SV01", "Đỗ Chí Đức", 20, 8.5),
  new SinhVien("SV02", "Lưu Huỳnh Đức Anh", 20, 4.5),
  new SinhVien("SV03", "Võ Duy Anh", 20, 6.0),
  new SinhVien("SV04", "Đoàn Mai Nhật Anh", 20, 3.8),
  new SinhVien("SV05", "Võ Thành Phúc", 20, 7.2)
];

const svDatYeuCau = danhSachSinhVien.filter(sv => sv.diem >= 5);

console.log("DANH SÁCH SINH VIÊN ĐẠT YÊU CẦU (ĐIỂM >= 5):");
console.log(svDatYeuCau);
