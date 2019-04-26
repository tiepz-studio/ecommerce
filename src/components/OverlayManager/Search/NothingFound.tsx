import * as React from "react";

export const NothingFound: React.FC<{ search: string }> = ({ search }) => (
  <div className="search__products--not-found">
    <p className="u-lead u-lead--bold u-uppercase">
      Không tìm thấy gì với điều kiện tìm: “{search}”
    </p>
    <p>
      Đừng bỏ cuộc sớm - thử lại với từ khóa khác sẽ khớp với điều kiện mà shop đang có
      thử lại với ô tìm kiếm bên trên.
    </p>
  </div>
);

export default NothingFound;
