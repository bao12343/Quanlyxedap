import React, { useState } from 'react';

const UpdateUserForm = ({ currentUser }) => {
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(currentUser.phone);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/user/update/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, phone }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Cập nhật thành công!');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Đã xảy ra lỗi. Vui lòng thử lại sau.');
    }
  };

  return (
    <div className="update-user-form">
      <h2>Cập nhật thông tin người dùng</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu mới:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Số điện thoại:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
