import * as React from "react";

import { Button } from "../..";

const Empty: React.FC<{ overlayHide(): void }> = ({ overlayHide }) => (
  <div className="cart__empty">
    <h4>chúng tôi thấy giỏ...trống trải</h4>
    <p>
      Chả có gì ở đây<br />
      Thử thêm món gì đó vào xem bạn, cho nó có không khí của một cái giỏ tội nghiệp nó quá :(
    </p>
    <div className="cart__empty__action">
      <Button secondary onClick={overlayHide}>
        Tiếp tục mua sắm
      </Button>
    </div>
  </div>
);

export default Empty;
