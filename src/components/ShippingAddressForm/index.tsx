import "./scss/index.scss";

import * as React from "react";

import { Button, Form, SelectField, TextField } from "..";
import { Omit } from "../../core/tsUtils";
import { AddressInterface } from "../../core/types";
import { FormError } from "../Form";
import { ShopContext } from "../ShopProvider/context";

export interface AddressType extends Partial<AddressInterface> {
  email?: string;
}

export interface FormAddressType extends Omit<AddressType, "country"> {
  asBilling?: boolean;
  country: { value?: string; code?: string };
}

const ShippingAddressForm: React.FC<{
  buttonText: string;
  billing?: boolean;
  data?: AddressType;
  errors: FormError[];
  loading: boolean;
  onSubmit: (event: React.FormEvent<any>, data: FormAddressType) => any;
}> = ({ data, billing, buttonText, errors, loading, onSubmit }) => (
  <div className="address-form">
    <ShopContext.Consumer>
      {({ countries }) => (
        <Form
          errors={errors}
          onSubmit={(evt, data) => onSubmit(evt, data as any)}
          data={data}
        >
          {!billing ? (
            <TextField
              label="Địa chỉ email"
              type="email"
              autoComplete="email"
              name="email"
            />
          ) : null}
          <div className="address-form__grid">
            <TextField
              label="Tên"
              type="given-name"
              name="firstName"
              autoComplete="given-name"
            />
            <TextField
              label="họ và tên đệm"
              type="family-name"
              name="lastName"
              autoComplete="family-name"
            />
          </div>
          <TextField
            label="Công ty hoặc tổ chức"
            type="organization"
            name="companyName"
            autoComplete="organization"
          />
          <TextField
            label="Địa chỉ chính"
            type="address-line1"
            name="streetAddress1"
            autoComplete="address-line1"
          />
          <TextField
            label="Địa chỉ phụ"
            type="address-line2"
            name="streetAddress2"
            autoComplete="address-line2"
          />
          <div className="address-form__grid">
            <TextField
              label="Phường, xã, thị trấn"
              type="city"
              name="city"
              autoComplete="address-level2"
            />
            <TextField
              label="Tỉnh, thành phố"
              type="state"
              name="countryArea"
              autoComplete="postal-code"
            />
          </div>
          <div className="address-form__grid">
            <TextField
              label="Mã bưu điện"
              type="postal-code"
              name="postalCode"
              autoComplete="postal-code"
            />
            <SelectField
              label="Quốc gia"
              name="country"
              options={countries.map(country => ({
                label: country.country,
                value: country.code
              }))}
            />
          </div>
          {!billing ? (
            <div>
              <TextField
                label="Số điện thoại"
                type="tel"
                name="phone"
                autoComplete="tel"
              />
              <label className="checkbox">
                <input name="asBilling" type="checkbox" />
                <span>Giống như địa chỉ thanh toán</span>
              </label>
            </div>
          ) : null}
          <Button type="submit" disabled={loading}>
            {loading ? "Loading" : buttonText}
          </Button>
        </Form>
      )}
    </ShopContext.Consumer>
  </div>
);

export default ShippingAddressForm;
