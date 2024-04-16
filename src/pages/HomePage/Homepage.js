import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Trang chủ</h1>
      </header>
      <main>
        <section className="description">
          <p>
            Chào mừng đến với trang web bán xe đạp của chúng tôi. Chúng tôi cung cấp các loại xe đạp chất lượng với giá cả phải chăng.
          </p>
        </section>
        <section className="products">
          <h2>Danh sách sản phẩm</h2>
          {/* Hiển thị danh sách sản phẩm ở đây */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Trang web bán xe đạp</p>
      </footer>
    </div>
  );
};

export default Home;
