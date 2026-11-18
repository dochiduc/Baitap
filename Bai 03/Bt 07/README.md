# Báo cáo Bài tập: Xây dựng Web Server xử lý Query Parameters (`bai07.js`)

Tài liệu này mô tả chi tiết các bước thực hiện, lệnh chạy chương trình và kết quả kiểm tra trên trình duyệt đối với Web Server sử dụng module `http` kết hợp đối tượng `URL` hiện đại trong Node.js.

---

## 1. Nội dung yêu cầu của bài tập (`bai07.js`)
- Sử dụng module tích hợp sẵn `http` và đối tượng `URL` để phân tích đường dẫn và các tham số truy vấn (`Query Parameters`).
- Khởi chạy Web Server tại cổng `3001`.
- Xử lý các tuyến đường (routes):
  - **`/hello?name=Minh`**: Hiển thị lời chào kèm tên được truyền vào (Ví dụ: `Xin chào Minh`). Trả về mã lỗi `400` nếu thiếu tham số `name`.
  - **`/sum?a=10&b=20`**: Tính toán và hiển thị tổng của hai số `a` và `b` (Ví dụ: `Tổng = 30`). Trả về mã lỗi `400` nếu thiếu tham số hoặc giá trị không hợp lệ.
  - **Trường hợp lỗi khác**: Trả về mã trạng thái HTTP `404 Not Found` cho các đường dẫn không tồn tại.

---

## 2. Các bước thực hiện và lệnh chạy

### Bước 1: Tạo tập tin `bai07.js`
Trong thư mục dự án trên Visual Studio Code, tạo một tập tin mới tên là `bai07.js` và nhập đoạn mã nguồn xử lý HTTP Server cùng đối tượng `URL`.

> **Hình minh họa tạo file:**
<img width="187" height="44" alt="image" src="https://github.com/user-attachments/assets/9e5f3c17-dd5e-4842-893d-3bf4e60d7c06" />


### Bước 2: Khởi động Server trên Terminal
Mở cửa sổ **Terminal** trong thư mục chứa file và gõ lệnh thực thi:
<img width="373" height="64" alt="image" src="https://github.com/user-attachments/assets/03ba89c9-df9c-4206-a5d3-f9dc970c5b06" />

## 3. Kết quả test thực tế trên trình duyệt web
Mở trình duyệt web (Chrome, Edge,...) và kiểm tra các đường dẫn sau:

 a. Test đường dẫn /hello (Truyền tham số name=Minh)
Đường dẫn: http://localhost:3001/hello?name=Minh

Hình kết quả: 
<img width="437" height="164" alt="image" src="https://github.com/user-attachments/assets/d0ec5626-c9ed-4dbd-a484-3f83873ca47d" />

 b. Test đường dẫn /sum (Truyền tham số a=10&b=20)
Đường dẫn: http://localhost:3001/sum?a=10&b=20

Hình kết quả:
<img width="429" height="151" alt="image" src="https://github.com/user-attachments/assets/11a254d1-76e0-414a-b882-ff9fee8372e4" />

 c. Test các trường hợp lỗi (Thiếu tham số hoặc sai định dạng)
Thiếu tham số name (http://localhost:3001/hello): Trả về thông báo lỗi 400 yêu cầu truyền tham số.

Sai kiểu dữ liệu (http://localhost:3001/sum?a=abc&b=20): Trả về thông báo lỗi giá trị không phải số hợp lệ.

Hình kết quả trang báo lỗi:
<img width="634" height="131" alt="image" src="https://github.com/user-attachments/assets/cc83ca3f-c02a-458e-92a0-be4ee273069a" />
