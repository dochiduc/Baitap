# Báo cáo Bài tập 09: Xóa Dữ liệu và Truy vấn Danh sách Còn lại trong MongoDB (`bai09.js`)

Tài liệu này mô tả chi tiết các bước thực hiện, lệnh chạy theo đường dẫn dự án cá nhân và kết quả kiểm tra thực tế khi thao tác với collection `students_test` trong database `qlsinhvien` bằng MongoDB Node.js Driver.

---

## 1. Nội dung yêu cầu của bài tập (`bai09.js`)
- Kết nối tới MongoDB đang chạy trên máy, sử dụng database `qlsinhvien` và collection `students_test`.
- Thêm ít nhất 5 sinh viên mẫu gồm các trường `masv`, `hoten`, `tuoi`, `diem`.
- Sử dụng `deleteOne()` để xóa một sinh viên theo mã sinh viên (`masv`).
- Sử dụng `deleteMany()` để xóa các sinh viên có điểm dưới 5 (`diem < 5`).
- Hiển thị số bản ghi đã xóa và danh sách sinh viên còn lại bằng `find()`.

---

## 2. Các bước thực hiện và lệnh chạy

### Bước 1: Tạo tập tin `bai09.js` tại thư mục dự án
Tạo tập tin `bai09.js` trong thư mục làm việc của bạn (ví dụ `D:\NodeJS\Bai03\Bt09`) và nhập mã nguồn thao tác `insertMany()`, `deleteOne()`, `deleteMany()` và `find()`.
<img width="176" height="80" alt="image" src="https://github.com/user-attachments/assets/437aff0d-2963-441c-b056-3dfd8ade5228" />

### Bước 2: Chạy chương trình trên Terminal theo đường dẫn cá nhân
Mở Terminal và thực thi lệnh tại đường dẫn thư mục dự án:
<img width="351" height="84" alt="image" src="https://github.com/user-attachments/assets/aff92fb4-6d5f-4943-98a3-f5b75f4e3891" />

## 3. Kết quả cuối cùng
Sau khi thực thi lệnh node bai09.js, Terminal hiển thị số lượng sinh viên đã thêm vào students_test, số bản ghi bị xóa bởi deleteOne() và deleteMany(), cùng danh sách sinh viên còn lại truy vấn từ find().
<img width="398" height="497" alt="image" src="https://github.com/user-attachments/assets/325768a7-c2ce-4ee9-9766-c8e59361d9bc" />
