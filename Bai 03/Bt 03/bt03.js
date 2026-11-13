var fs = require('fs');
var fileName = 'thongtin.txt';

console.log("--- BẮT ĐẦU THỰC HIỆN CÁC THAO TÁC FILE ---");

var initialContent = "Họ và tên: Đỗ Chí Đức\nMã sinh viên: [CĐ-CNTT18A10]\n";
fs.writeFileSync(fileName, initialContent, 'utf8');
console.log(`[1] Đã tạo thành công file '${fileName}'.`);

console.log("\n[2] Nội dung ban đầu của tập tin:");
var dataBefore = fs.readFileSync(fileName, 'utf8');
console.log(dataBefore);

var additionalContent = "Lớp: CĐ-CNTT18A\n";
fs.appendFile(fileName, additionalContent, 'utf8', function (err) {
  if (err) throw err;
  console.log("[3] Đã ghi nối thêm tên lớp vào cuối tập tin thành công bằng appendFile().");

  console.log("\n[4] Nội dung sau khi đã cập nhật thêm lớp:");
  var dataAfter = fs.readFileSync(fileName, 'utf8');
  console.log(dataAfter);
});
