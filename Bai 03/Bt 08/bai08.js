const fs = require('fs');
const path = require('path');

const dirName = 'data';
const oldFilePath = path.join(dirName, 'ghichu.txt');
const newFilePath = path.join(dirName, 'ghichu_moi.txt');
const tempFilePath = path.join(dirName, 'tam.txt');

// 1. Tạo thư mục data nếu chưa tồn tại
if (!fs.existsSync(dirName)) {
  fs.mkdirSync(dirName);
  console.log(`[1] Đã tạo thư mục '${dirName}'.`);
} else {
  console.log(`[1] Thư mục '${dirName}' đã tồn tại.`);
}

// 2. Ghi vào tập tin ghichu.txt ít nhất 3 dòng nội dung
const noiDungGhiChu = [
  'Dòng 1: Ôn tập module fs trong Node.js.',
  'Dòng 2: Thực hành tạo thư mục, đổi tên và xóa tập tin.',
  'Dòng 3: Hoàn thành bài tập bai08.js.'
].join('\n') + '\n';

fs.writeFileSync(oldFilePath, noiDungGhiChu, 'utf8');
console.log(`[2] Đã tạo và ghi 3 dòng nội dung vào '${oldFilePath}'.`);

// 3. Đổi tên tập tin thành ghichu_moi.txt bằng fs.rename()
fs.rename(oldFilePath, newFilePath, (err) => {
  if (err) {
    console.error('[3] Lỗi khi đổi tên tập tin:', err);
    return;
  }
  console.log(`[3] Đã đổi tên '${oldFilePath}' thành '${newFilePath}'.`);

  // 4. Đọc và hiển thị nội dung sau khi đổi tên
  fs.readFile(newFilePath, 'utf8', (readErr, content) => {
    if (readErr) {
      console.error('[4] Lỗi khi đọc tập tin:', readErr);
      return;
    }
    console.log(`[4] Nội dung của '${newFilePath}':`);
    console.log('----------------------------------------');
    console.log(content.trimEnd());
    console.log('----------------------------------------');

    // 5. Tạo tập tin tam.txt, sau đó xóa bằng fs.unlink()
    fs.writeFileSync(tempFilePath, 'Tập tin tạm sẽ bị xóa ngay sau đây.', 'utf8');
    console.log(`[5a] Đã tạo tập tin tạm '${tempFilePath}'.`);

    fs.unlink(tempFilePath, (unlinkErr) => {
      if (unlinkErr) {
        console.error('[5b] Lỗi khi xóa tập tin tạm:', unlinkErr);
        return;
      }
      console.log(`[5b] Đã xóa thành công tập tin tạm '${tempFilePath}'.`);
    });
  });
});
