import "./scss/index.scss";

import * as React from "react";

import { Button, Form, TextField } from "../..";
import { maybe } from "../../../core/utils";
import { OverlayType, ShowOverlayType } from "../../Overlay/context";
import { TypedCustomerRegisterMutation } from "./queries";
import { RegisterCutomer } from "./types/RegisterCutomer";

const showSuccessNotofication = (
  show: ShowOverlayType,
  data: RegisterCutomer
) => {
  const successful = maybe(() => !data.customerRegister.errors.length);

  if (successful) {
    show(OverlayType.message, null, {
      title: `Tài khoản mới được tạo thành công.`
    });
  }
};

const RegisterForm: React.FC<{ show: ShowOverlayType }> = ({ show }) => (
  <TypedCustomerRegisterMutation
    onCompleted={data => showSuccessNotofication(show, data)}
  >
    {(registerCustomer, { loading, data }) => {
      return (
        <Form
          errors={maybe(() => data.customerRegister.errors, [])}
          onSubmit={(event, { email, password }) => {
            event.preventDefault();
            registerCustomer({ variables: { email, password } });
          }}
        >
          <TextField
            name="email"
            autoComplete="email"
            label="Địa chỉ email"
            type="email"
            required
          />
          <TextField
            name="password"
            autoComplete="password"
            label="Mật khẩu"
            type="password"
            required
          />
          <div className="login__content__button">
            <Button type="submit" {...loading && { disabled: true }}>
              {loading ? "Loading" : "Đăng ký"}
            </Button>
          </div>
        </Form>
      );
    }}
  </TypedCustomerRegisterMutation>
);

export default RegisterForm;
