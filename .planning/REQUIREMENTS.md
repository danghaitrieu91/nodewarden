# Yêu cầu hệ thống - Nodewarden on Cloudflare

## 1. Yêu cầu chức năng
- **Quản lý mật khẩu:** Lưu trữ, truy xuất và quản lý mật khẩu an toàn.
- **Tương thích Client:** Hoạt động tốt với ứng dụng Bitwarden trên trình duyệt, mobile và desktop.
- **Web Vault:** Giao diện web tích hợp để quản lý khi không dùng app.
- **Đa người dùng:** Hỗ trợ nhiều tài khoản người dùng (tùy cấu hình).
- **Đính kèm & Backup:** Hỗ trợ lưu trữ tệp đính kèm và tự động sao lưu dữ liệu sang R2.
- **Tự động cập nhật:** Đồng bộ mã nguồn từ repository gốc để nhận các bản vá bảo mật và tính năng mới.

## 2. Yêu cầu phi chức năng
- **Bảo mật:** Sử dụng JWT cho xác thực, mã hóa dữ liệu phía client.
- **Hiệu năng:** Tận dụng Edge computing của Cloudflare để giảm độ trễ.
- **Chi phí:** Tối ưu hóa để chạy trong gói Free Tier của Cloudflare.
- **Độ tin cậy:** Không phụ thuộc vào VPS, tận dụng hạ tầng của Cloudflare.

## 3. Tiêu chí nghiệm thu (UAT)
- [ ] Có thể đăng nhập và tạo tài khoản admin trên domain đã cấu hình.
- [ ] Thêm/Sửa/Xóa mật khẩu thành công và đồng bộ được với ứng dụng Bitwarden chính thức.
- [ ] File đính kèm được lưu trữ chính xác trên Cloudflare R2.
- [ ] Quy trình backup hoạt động và tạo được file sao lưu trên R2.
- [ ] GitHub Actions chạy thành công cho việc đồng bộ upstream.

## 4. Ràng buộc
- Chỉ sử dụng Cloudflare Workers, không sử dụng VPS.
- Cần có domain riêng (hoặc subdomain) trỏ về Cloudflare để tránh giới hạn của *.workers.dev.
