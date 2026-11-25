# Báo cáo Bài tập 08: Thao tác Thư mục, Đổi tên và Xóa Tập tin với Module `fs` (`bai08.js`)

Tài liệu này mô tả chi tiết các bước thực hiện, lệnh chạy chương trình và kết quả kiểm tra thực tế bài tập `bai08.js` sử dụng module `fs` và `path` trong Node.js.

---

## 1. Nội dung yêu cầu của bài tập (`bai08.js`)
- Sử dụng module `fs` tạo thư mục `data` và tập tin `ghichu.txt`.
- Ghi vào tập tin ít nhất 3 dòng nội dung.
- Đổi tên tập tin thành `ghichu_moi.txt` bằng `fs.rename()`.
- Đọc và hiển thị nội dung tập tin sau khi đổi tên.
- Tạo tập tin `tam.txt`, sau đó xóa bằng `fs.unlink()`.
- Hiển thị thông báo kết quả từng thao tác.

---

## 2. Các bước thực hiện và lệnh chạy

### Bước 1: Tạo tập tin `bai08.js`
Tạo tập tin `bai08.js` trong thư mục dự án trên Visual Studio Code và nhập mã nguồn xử lý các thao tác hệ thống tập tin.

> **Hình minh họa tạo file và mã nguồn:**
<img width="200" height="57" alt="image" src="https://github.com/user-attachments/assets/517e35a3-240c-44a6-aa50-ea050755902a" />

### Bước 2: Chạy chương trình trên Terminal
Mở cửa sổ **Terminal** tại thư mục chứa file và thực thi lệnh node bai08.js:
<img width="360" height="61" alt="image" src="https://github.com/user-attachments/assets/1fcfc04d-ce54-46bc-99a6-17fa69d88a26" />

## 3. Kết quả cuối cùng
Sau khi chạy lệnh node bai08.js, Terminal hiển thị đầy đủ thông báo từng bước: tạo thư mục data, ghi 3 dòng vào ghichu.txt, đổi tên sang ghichu_moi.txt, in nội dung file mới, tạo tam.txt và xóa tam.txt bằng fs.unlink().
<img width="491" height="289" alt="image" src="https://github.com/user-attachments/assets/60eaba21-e050-4323-848a-ef6e07e0ebef" />
