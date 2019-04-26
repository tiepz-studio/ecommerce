import * as React from "react";
import { Link } from "react-router-dom";

import { baseUrl } from "./App/routes";
import Button from "./Button";

const EmptyCart: React.FC<{}> = () => (
  <div className="cart-page__empty">
    <h4>chúng tôi thấy...giỏ đang trống</h4>
    <p>
      Nếu bạn quên món gì đó mà chưa đưa vào giỏ thì
      nhanh tay làm đi nhé, đừng bỏ lỡ bất cứ điều gì có ích
    </p>
    <div className="cart-page__empty__action">
      <Link to={baseUrl}>
        <Button secondary>Tiếp tục mua sắm</Button>
      </Link>
    </div>
  </div>
);

export default EmptyCart;
