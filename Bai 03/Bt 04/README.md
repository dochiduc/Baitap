# Báo cáo Bài tập: Kết nối và Thao tác MongoDB cơ bản (`bai04.js`)

Tài liệu này mô tả chi tiết các bước thực hiện, lệnh chạy chương trình và kết quả kết nối MongoDB, thêm dữ liệu bằng `insertMany()` và truy vấn bằng `find()`.

---

## 1. Nội dung yêu cầu của bài tập (`bai04.js`)
- Kết nối tới MongoDB Server đang chạy cục bộ trên máy (`mongodb://localhost:27017`).
- Sử dụng cơ sở dữ liệu `qlsinhvien` và bộ sưu tập `students`.
- Thêm mới ít nhất 3 sinh viên (gồm các trường: `masv`, `hoten`, `tuoi`, `diem`) thông qua phương thức `insertMany()`.
- Sử dụng phương thức `find()` để truy vấn và hiển thị danh sách sinh viên ra Terminal.
- Đảm bảo đóng kết nối an toàn với MongoDB sau khi hoàn thành.

---

## 2. Các bước thực hiện và lệnh chạy

### Tạo tập tin `bai04.js`:
<img width="178" height="38" alt="image" src="https://github.com/user-attachments/assets/b89d8835-91cb-4f67-9d20-64e4501e7c1b" />

> **Hình minh họa Terminal thực thi lệnh:**
<img width="295" height="22" alt="image" src="https://github.com/user-attachments/assets/636b541f-13c4-4f3f-b0e8-c869320346b7" />

Sau khi chạy lệnh, Terminal hiển thị thông báo kết nối thành công, số lượng sinh viên được thêm vào, danh sách dữ liệu lấy từ MongoDB và thông báo đóng kết nối.

> **Hình kết quả hiển thị trên Terminal:**
<img width="478" height="558" alt="image" src="https://github.com/user-attachments/assets/d29c1b8d-e644-4185-8068-fdad23d9557f" />
