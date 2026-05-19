import './index.css'
import logo from './assets/logo.png'
import img from './assets/img.png'

export default function App() {
  return (
    <div className="min-h-screen bg-[#6cd6df] text-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-200/30 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center " style={{width: 250,height: 150}}>
            <img
                  src={logo}
                />
          </div>
        </div>

        {/*<nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <a href="#features" className="hover:text-cyan-100 transition">Tính năng</a>
          <a href="#about" className="hover:text-cyan-100 transition">Giới thiệu</a>
          <a href="#download" className="hover:text-cyan-100 transition">Tải app</a>
          <button className="bg-white text-[#6cd6df] px-6 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition">
            Bắt đầu
          </button>
        </nav>*/}
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight text-white">
              EasyLife
              <span className="block text-cyan-100 mt-2">Cuộc sống dễ dàng</span>
            </h2>

            <p className="mt-6 text-lg text-white/90 leading-8 max-w-xl">
              Ứng dụng kết nối khách hàng với những kỹ thuật viên tay nghề cao, những người sẽ cung cấp các dịch vụ cho bạn và ngôi nhà bạn một cách nhanh nhất và chuyên nghiệp nhất
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="/app.apk" download className="text-center bg-white text-[#6cd6df] px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition">
                Tải ứng dụng ngay cho Android
              </a>

            </div>

            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex -space-x-4">
                <img
                  src="https://i.pravatar.cc/100?img=1"
                  className="w-12 h-12 rounded-full border-4 border-white"
                />
                <img
                  src="https://i.pravatar.cc/100?img=2"
                  className="w-12 h-12 rounded-full border-4 border-white"
                />
                <img
                  src="https://i.pravatar.cc/100?img=3"
                  className="w-12 h-12 rounded-full border-4 border-white"
                />
              </div>

              <div>
                <p className="font-bold text-white text-lg">10.000+ người dùng</p>
                <p className="text-white/80">Đánh giá 4.9/5 ⭐</p>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative flex justify-center">
            <div className="absolute w-[420px] h-[420px] bg-white/20 rounded-full blur-3xl" />

            <img
                  src={img}
                  className="hover:rotate-0 transition duration-500 rotate-6"
                />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 bg-white rounded-t-[50px] px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[#6cd6df] font-bold uppercase tracking-[4px]">
              Thông tin ứng dụng
            </p>
            <h3 className="text-4xl md:text-5xl font-semibold mt-4">
              EasyLife - Ứng dụng kết nối khách hàng với người cung cấp dịch vụ tiện ích
            </h3>
            <p className="text-slate-500 mt-6 text-lg leading-8">
              EasyLife là ứng dụng kết nối khách hàng và người cung cấp dịch vụ tiện ích cho bạn hoặc ngôi nhà của bạn như: <br />
Sửa chữa điều hòa, tủ lạnh, máy giặt, điện nước,.... <br />
Giúp việc, dọn dẹp.<br />
Kiểm soát côn trùng.<br />
Vận chuyển.<br />
Thanh lý đồ cũ.<br />
.......<br />
Có đa dạng dịch vụ trong EasyLife, người dùng có thể lựa chọn dịch vụ phù hợp với nhu cầu cần thiết của mình. EasyLife sẽ kết nối khách hàng với các chuyên viên kỹ thuật tay nghề cao ngay lập tức.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
     {/*<section id="download" className="bg-white px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto bg-[#6cd6df] rounded-[40px] overflow-hidden relative p-10 md:p-16">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Sẵn sàng tải ứng dụng?
              </h3>

              <p className="mt-6 text-lg text-white/90 leading-8 max-w-xl">
                Tạo landing page chuyên nghiệp giúp tăng lượt cài đặt app nhanh chóng.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#6cd6df] px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition">
                  Google Play
                </button>

                <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
                  App Store
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white rounded-[32px] p-4 shadow-2xl w-[260px] rotate-12 hover:rotate-0 transition duration-500">
                <div className="bg-[#6cd6df] rounded-[24px] h-[480px] flex items-center justify-center text-white text-3xl font-black">
                  YOUR APP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          <p className="text-slate-500">
            © 2026 HQTech. All rights reserved.
          </p>

          {/*<div className="flex items-center gap-6 text-slate-600 font-medium">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>*/}
        </div>
      </footer>
    </div>
  );
}

