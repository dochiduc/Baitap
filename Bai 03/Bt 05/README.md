# Báo cáo Bài tập: Lọc, Sắp xếp và Cập nhật Dữ liệu MongoDB (`bai05.js`)

Tài liệu này mô tả chi tiết các bước thực hiện, lệnh chạy chương trình và kết quả xử lý truy vấn nâng cao với MongoDB (lọc điểm $\ge 7$ bằng `$gte`, sắp xếp giảm dần bằng `sort()`, và cập nhật bản ghi bằng `updateOne` kết hợp `$set`).

---

## 1. Nội dung yêu cầu của bài tập (`bai05.js`)
- Kết nối tới MongoDB Server đang chạy cục bộ và sử dụng collection `students` trong cơ sở dữ liệu `qlsinhvien`.
- Sử dụng phương thức `find()` kết hợp toán tử `$gte` để lọc danh sách sinh viên có điểm từ 7 trở lên.
- Sử dụng phương thức `sort({ diem: -1 })` để sắp xếp kết quả theo thứ tự điểm giảm dần.
- Sử dụng phương thức `updateOne()` kết hợp toán tử `$set` để cập nhật điểm số mới cho sinh viên dựa theo mã sinh viên (`masv`).
- Hiển thị lại toàn bộ danh sách sinh viên sau khi cập nhật để kiểm chứng kết quả.

---

## 2. Các bước thực hiện và lệnh chạy

### Bước 1: Tạo tập tin `bai05.js`
Trong thư mục dự án trên Visual Studio Code, tạo tập tin `bai05.js` chứa mã nguồn xử lý truy vấn MongoDB.

> **Hình minh họa tạo file:**
<img width="197" height="39" alt="image" src="https://github.com/user-attachments/assets/1a1b9b02-4ef7-4815-a8a2-fe6aa709a599" />

### Bước 2: Chạy chương trình trên Terminal
Mở cửa sổ **Terminal** trong thư mục dự án và thực thi lệnh:
<img width="398" height="652" alt="image" src="https://github.com/user-attachments/assets/cbb3ed7b-98ec-4160-96bb-8b7c279ac2f8" />
