import "./scss/index.scss";

import * as React from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

import {
  Button,
  LoginForm,
  Offline,
  OfflinePlaceholder,
  Online,
  PasswordResetForm
} from "..";
import { baseUrl as checkoutUrl } from "../../checkout/routes";
import { UserContext } from "../User/context";

class CheckoutLogin extends React.PureComponent<
  RouteComponentProps<{}>,
  { resetPassword: boolean }
> {
  state = { resetPassword: false };

  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => {
          if (user) {
            return <Redirect to={checkoutUrl} />;
          }
          return (
            <div className="container">
              <Online>
                <div className="checkout-login">
                  <div className="checkout-login__guest">
                    <h3 className="checkout__header">Mua hàng không cần tài khoản</h3>
                    <p>
                      Nếu như không có nhiều thì giờ cho việc thiết lập một tài khoản
                      không cần lo, bạn có thể thanh toán đơn hàng mà không cần phải đăng ký
                      Bạn vẫn sẽ được hưởng mọi quyền lợi như một khách hàng có tài khoản.
                    </p>
                    <Link to={checkoutUrl}>
                      <Button>cho tôi tiếp tục</Button>
                    </Link>
                  </div>
                  <div className="checkout-login__user">
                    <h3 className="checkout__header">Đăng ký một tài khoản</h3>

                    {this.state.resetPassword ? (
                      <>
                        <PasswordResetForm />
                        <div className="login__content__password-reminder">
                          <p>
                            <span
                              onClick={() =>
                                this.setState({ resetPassword: false })
                              }
                            >
                              Quay lại đăng nhập
                            </span>
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <LoginForm />
                        <div className="login__content__password-reminder">
                          <p>
                            Quên mật khẩu?&nbsp;
                            <span
                              onClick={() =>
                                this.setState({ resetPassword: true })
                              }
                            >
                              Bấm vào đây
                            </span>
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Online>
              <Offline>
                <OfflinePlaceholder />
              </Offline>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default CheckoutLogin;
