# Báo cáo Bài tập Ví dụ: Xây dựng Ứng dụng Web với Express Framework (`Baitapvidu`)

Tài liệu mô tả quá trình thực hiện ví dụ mẫu Bài 4 trên máy cá nhân, các lệnh thực thi, hình ảnh minh họa từng bước và kết quả kiểm thử trên trình duyệt.

---

## 1. Mô tả bài tập ví dụ
- Khởi tạo dự án Node.js và cài đặt thư viện **Express** để xây dựng Web Server tại cổng `3000`.
- Thiết lập các route cơ bản (`GET /`, `GET /about`, `GET /items/:id`, `GET /greet?name=...`) và kiểm tra các đường dẫn mở rộng như `/calculator`.
- Quan sát và đối chiếu phản hồi của server khi route tồn tại hoặc chưa được định nghĩa (`Cannot GET /calculator`).

---

## 2. Các bước thực hiện và lệnh chạy trên máy cá nhân

### Bước 1: Viết mã nguồn ví dụ và khởi chạy server
Tạo file mã nguồn ví dụ theo cấu trúc sau:

<img width="460" height="373" alt="image" src="https://github.com/user-attachments/assets/de5e97be-5dc8-4095-a1fe-9d57dcf309b3" />

### Bước 2: Khởi tạo thư mục dự án và cài đặt Express
Mở Terminal tại thư mục dự án cá nhân C:\CD-CNTT18A\MyNodeJS\EXPRESS, điều hướng đến tệp tin my-express-app và chạy lệnh:
<img width="454" height="59" alt="image" src="https://github.com/user-attachments/assets/4890b263-2786-41e5-8815-8e9398a710b0" />

## 3. Kết quả kiểm thử trên trình duyệt

### Kiểm tra đường dẫn /calculator (http://localhost:3000/calculator)
Khi truy cập http://localhost:3000/calculator, trình duyệt hiển thị như sau:
<img width="1600" height="817" alt="image" src="https://github.com/user-attachments/assets/063dafc3-12a8-4a0a-8955-34b3315277e1" />

### kiểm tra Calculator app có hoạt động không:
Nhập ô thứ nhất là 10, ô thứ hai là 10, lựa chọn phép nhân (Multiply): 
<img width="1592" height="817" alt="image" src="https://github.com/user-attachments/assets/dc1bbd61-4031-400d-b200-a9ca5e3cfda2" />

Sau khi bấm Calculat sẽ cho ra kết quả sau:
<img width="1594" height="817" alt="image" src="https://github.com/user-attachments/assets/1f1e716c-a548-4ab7-9333-7d87986959d0" />
