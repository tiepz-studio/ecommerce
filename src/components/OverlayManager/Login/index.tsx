import "./scss/index.scss";

import * as React from "react";
import ReactSVG from "react-svg";

import {
  LoginForm,
  Offline,
  OfflinePlaceholder,
  Online,
  Overlay,
  OverlayContextInterface,
  OverlayTheme,
  OverlayType
} from "../..";
import RegisterForm from "./RegisterForm";

import closeImg from "../../../images/x.svg";

class Login extends React.Component<
  { overlay: OverlayContextInterface },
  { active: "login" | "register" }
> {
  constructor(props) {
    super(props);
    this.state = {
      active: "login"
    };
  }

  changeActiveTab = (active: "login" | "register") => {
    this.setState({ active });
  };

  render() {
    const { overlay } = this.props;
    const { show, hide } = overlay;

    return (
      <Overlay context={overlay}>
        <div className="login">
          <Online>
            <div className="overlay__header">
              <p className="overlay__header-text">Noodless tài khoản</p>
              <ReactSVG
                path={closeImg}
                onClick={hide}
                className="overlay__header__close-icon"
              />
            </div>
            <div className="login__tabs">
              <span
                onClick={() => this.changeActiveTab("login")}
                className={this.state.active === "login" ? "active-tab" : ""}
              >
                Đăng nhập
              </span>
              <span
                onClick={() => this.changeActiveTab("register")}
                className={this.state.active === "register" ? "active-tab" : ""}
              >
                Đăng ký mới tài khoản
              </span>
            </div>
            <div className="login__content">
              {this.state.active === "login" ? (
                <>
                  <LoginForm />
                  <div className="login__content__password-reminder">
                    <p>
                      Quên mật khẩu?&nbsp;
                      <span
                        onClick={() =>
                          show(OverlayType.password, OverlayTheme.right)
                        }
                      >
                        Bấm vào đây
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                <RegisterForm show={show} />
              )}
            </div>
          </Online>
          <Offline>
            <OfflinePlaceholder />
          </Offline>
        </div>
      </Overlay>
    );
  }
}

export default Login;
