# Báo cáo Bài tập 06: Xây dựng và sử dụng Module tự tạo (`bai06.js` & `xulyDiem.js`)

Tài liệu này mô tả chi tiết các bước thực hiện, lệnh chạy chương trình và kết quả thực thi bài tập tạo mô đun tính điểm trung bình và xếp loại học tập trong Node.js.

---

## 1. Cấu trúc thư mục bài tập
Thư mục `Bai03/Bt06` bao gồm các tập tin sau:
- **`xulyDiem.js`**: Module chứa hàm `tinhDiemTrungBinh()` (tính trung bình cộng 3 môn) và hàm `xepLoaiHocTap()` (phân loại Giỏi, Khá, Trung bình, Yếu), xuất ra ngoài bằng `module.exports`.
- **`bai06.js`**: Tập tin chính sử dụng `require('./xulyDiem')` để gọi các hàm xử lý cho danh sách 3 sinh viên và xuất kết quả ra Terminal.
- **`README.md`**: Tài liệu hướng dẫn và minh chứng kết quả chạy chương trình.

---

## 2. Các bước thực hiện và lệnh chạy

### Bước 1: Tạo các tập tin mã nguồn trong VS Code
Tạo hai tập tin `xulyDiem.js` và `bai06.js` trong cùng một thư mục dự án và nhập mã nguồn theo yêu cầu.

> **Hình minh họa tạo file và mã nguồn:**
<img width="196" height="28" alt="image" src="https://github.com/user-attachments/assets/6494bca0-886b-44eb-a190-c4d0e51c7f45" />

### Bước 2: Chạy chương trình bằng Terminal
Mở cửa sổ **Terminal** tại thư mục chứa file và thực thi lệnh và cho ra kết quả:
<img width="370" height="308" alt="image" src="https://github.com/user-attachments/assets/ea449faf-6df6-47de-9a3b-fe46b50353ee" />
