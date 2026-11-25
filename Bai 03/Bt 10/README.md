# Báo cáo Bài tập 10: Liên kết Collection bằng `aggregate()` và `$lookup` (`bai10.js`)

Tài liệu này mô tả chi tiết các bước thực hiện, lệnh chạy phản ánh đường dẫn dự án cá nhân và kết quả truy vấn liên kết giữa hai collection `departments` và `students_join` trong database `qlsinhvien` trên MongoDB.

---

## 1. Nội dung yêu cầu của bài tập (`bai10.js`)
- Tạo collection `departments` gồm ít nhất 2 khoa với các trường `makhoa`, `tenkhoa`.
- Tạo collection `students_join` gồm ít nhất 4 sinh viên với các trường `masv`, `hoten`, `makhoa`.
- Sử dụng `aggregate()` kết hợp `$lookup` để liên kết sinh viên với khoa thông qua trường `makhoa`.
- Hiển thị danh sách sinh viên kèm cả mã khoa lẫn tên khoa tương ứng.

---

## 2. Các bước thực hiện và lệnh chạy

### Bước 1: Tạo tập tin `bai10.js` tại thư mục dự án
Tạo tập tin `bai10.js` trong thư mục làm việc:
<img width="193" height="69" alt="image" src="https://github.com/user-attachments/assets/809a1239-6754-4ba5-88d9-0b131ea835e2" />

### Bước 2: Chạy chương trình trên Terminal theo đường dẫn cá nhân
Mở Terminal và thực thi lệnh tại thư mục dự án cá nhân:
<img width="384" height="64" alt="image" src="https://github.com/user-attachments/assets/ad1f5de8-32cf-44c0-b369-8c036e95a2c2" />
## 3. Kết quả cuối cùng
Sau khi thực thi lệnh node bai10.js, Terminal hiển thị trạng thái kết nối MongoDB, số lượng bản ghi khởi tạo ở departments và students_join, cùng bảng danh sách sinh viên đầy đủ cả makhoa và tenkhoa tương ứng.
<img width="618" height="296" alt="image" src="https://github.com/user-attachments/assets/43e6467f-7460-429f-b9bc-bfb900a2c1d1" />
