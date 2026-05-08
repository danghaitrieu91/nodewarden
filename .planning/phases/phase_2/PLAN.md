# Kế hoạch Phase 2: Thiết lập hạ tầng Cloudflare

## Bối cảnh
Sau khi đã Fork thành công repository, bước tiếp theo là chuẩn bị các dịch vụ cần thiết trên Cloudflare (D1, R2) và cấu hình tên miền để sẵn sàng cho việc triển khai Workers.

## Mục tiêu
- Tạo cơ sở dữ liệu Cloudflare D1 cho NodeWarden.
- Tạo Bucket Cloudflare R2 cho lưu trữ tệp đính kèm và backup.
- Xác nhận tên miền `passkeep.donghohaitrieu.vn` đã sẵn sàng trên Cloudflare.

## Danh sách công việc (Tasks)
1. [ ] **Kiểm tra & Tạo Cloudflare D1 Database**
    - Sử dụng Wrangler hoặc giao diện Web để tạo database tên `nodewarden`.
2. [ ] **Kiểm tra & Tạo Cloudflare R2 Buckets**
    - Tạo bucket `nodewarden-attachments` cho tệp đính kèm.
    - Tạo bucket `nodewarden-backups` cho việc sao lưu định kỳ.
3. [ ] **Cấu hình Domain**
    - Đảm bảo `donghohaitrieu.vn` đã được quản lý bởi Cloudflare.
    - Chuẩn bị tạo bản ghi DNS (sẽ thực hiện ở Phase 3).

## Tiêu chí nghiệm thu (UAT)
- [ ] Database D1 `nodewarden` đã tồn tại.
- [ ] Hai bucket R2 đã sẵn sàng.
- [ ] Tên miền đã sẵn sàng để cấu hình Workers.

## Ghi chú
- Nếu anh chưa tạo R2, em có thể hỗ trợ hướng dẫn qua giao diện Web hoặc dùng lệnh Wrangler nếu anh đã cài đặt.
