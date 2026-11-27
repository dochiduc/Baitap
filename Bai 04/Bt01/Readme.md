# Báo cáo Bài 1 (Bài 4 - Express): Ứng dụng Web Cá nhân với Express Framework (`bai01.js`)

Tài liệu mô tả quá trình thực hiện bài tập `bai01.js` trên máy cá nhân (`localhost`), các lệnh thực thi theo đường dẫn dự án, hình ảnh minh họa từng bước, kết quả kiểm thử cuối cùng và cách triển khai lên dịch vụ hosting miễn phí.

---

## Phần 1: Thực hiện và kiểm tra trên máy cá nhân (`localhost`)

### 1. Các lệnh khởi tạo dự án và cài đặt Express
Mở Terminal tại thư mục dự án cá nhân (`C:\CD-CNTT18A\MyNodeJS\EXPRESS`) và chạy các lệnh:

```bash
cd EXPRESS
npm init -y
npm install express
```

Hình minh họa mã nguồn bai01.js trong VS Code:
<img width="1251" height="787" alt="image" src="https://github.com/user-attachments/assets/edb812e0-ebf9-40f4-9d88-d703134a803f" />

Hình minh họa cài đặt gói và chuẩn bị chạy trên Terminal:
<img width="585" height="626" alt="image" src="https://github.com/user-attachments/assets/0a17e834-8e75-452a-b22b-3c90539f4493" />

### 2. Lệnh khởi chạy server Express
Thực thi tập tin bai01.js tại cổng 3000 (hoặc cổng được cấp qua process.env.PORT):

```bash
node bai01.js
```

Hình minh họa chạy lệnh node bai01.js trên Terminal:
<img width="400" height="65" alt="image" src="https://github.com/user-attachments/assets/a427e8fc-f8a9-4986-8383-e83af0c660f7" />

### 3. Kết quả cuối cùng trên trình duyệt (http://localhost:3000)
* /: Hiển thị trang chủ cùng thanh menu điều hướng (Trang chủ, Giới thiệu, Kỹ năng, Sở thích, Liên hệ).

* /about: Hiển thị trang giới thiệu bản thân.

* /skills: Hiển thị danh sách kỹ năng chuyên môn.

* /hobbies: Hiển thị các sở thích cá nhân.

* /contact: Hiển thị biểu mẫu liên hệ và xử lý gửi thông tin.

Đường dẫn không tồn tại: Trả về mã trạng thái 404 kèm thông báo lỗi.

Hình minh họa kết quả cuối cùng trên trình duyệt (localhost:3000):
<img width="1600" height="822" alt="image" src="https://github.com/user-attachments/assets/81be71f5-b286-4863-b55d-191beef83894" />
