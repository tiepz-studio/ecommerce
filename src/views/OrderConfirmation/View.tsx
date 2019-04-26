import "./scss/index.scss";

import React from "react";
import { generatePath, Link, RouteComponentProps } from "react-router-dom";

import { Button, NotFound } from "../../components";
import { guestOrderDetailsUrl } from "../../components/App/routes";
import { BASE_URL } from "../../core/config";
import { userOrderDetailsUrl } from "../../userAccount/routes";

class View extends React.PureComponent<RouteComponentProps> {
  /**
   * Clear router state on leaving the page to ensure view becames unavailable
   * after leaving.
   */
  componentWillUnmount() {
    const {
      history: { location, replace }
    } = this.props;
    const { state } = location;

    if (state) {
      replace({ ...location, state: undefined });
    }
  }

  render() {
    const {
      history: {
        location: { state }
      }
    } = this.props;

    /**
     * Token or id is passed from review page via router state. If it is not
     * present page should not be displayed.
     */
    if (!state) {
      return <NotFound />;
    }

    const { token, id } = state;
    const guest = !id;
    const orderDetailsRef = guest
      ? generatePath(guestOrderDetailsUrl, { token })
      : generatePath(userOrderDetailsUrl, { id });

    return (
      <div className="order-confirmation">
        <h3>
        Cảm ơn <br /> quý khách đặt hàng
      </h3>
      <p className="order-confirmation__info">
        Chúng tôi đã gửi thư email cho bạn để xác nhận
        <br />
        và chúng tôi cũng sẽ có thông báo đến bạn
        <br />
        khi hàng đã được đóng gói và vận chuyển hoàn tất.
        </p>
        <div className="order-confirmation__actions">
          <Link to={BASE_URL}>
            <Button secondary>Tiếp tục mua sắm</Button>
          </Link>
          <Link to={orderDetailsRef}>
            <Button>Chi tiết đơn hàng</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default View;
