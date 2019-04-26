import "./scss/index.scss";

import * as React from "react";

import { Button, Form, TextField } from "..";
import { maybe } from "../../core/utils";
import { TypedPasswordResetMutation } from "./queries";

const PasswordResetForm: React.FC = () => (
  <div className="password-reset-form">
    <p>
      Nhập vào địa chỉ email của bạn đã có tài khoản tại Noodless
      chúng tôi sẽ gửi thư xác nhận trước khi khôi phục mật khẩu
    </p>
    <TypedPasswordResetMutation>
      {(passwordReset, { loading, data }) => {
        return (
          <Form
            errors={maybe(() => data.customerPasswordReset.errors, [])}
            onSubmit={(event, { email }) => {
              event.preventDefault();
              passwordReset({ variables: { email } });
            }}
          >
            <TextField
              name="email"
              autoComplete="email"
              label="Địa chỉ email"
              type="email"
              required
            />
            <div className="password-reset-form__button">
              <Button type="submit" {...loading && { disabled: true }}>
                {loading ? "Loading" : "Khôi phục mật khẩu"}
              </Button>
            </div>
          </Form>
        );
      }}
    </TypedPasswordResetMutation>
  </div>
);

export default PasswordResetForm;
