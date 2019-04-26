import "./scss/index.scss";

import * as React from "react";
import { Link } from "react-router-dom";

import { Button, Dropdown, ProductListItem } from "..";
import { generateProductUrl } from "../../core/utils";
import Loader from "../Loader";
import { Filters } from "../ProductFilters";

import { Product } from "../ProductListItem";

interface ProductsListProps {
  displayLoader: boolean;
  filters: Filters;
  hasNextPage: boolean;
  notFound?: string | React.ReactNode;
  onLoadMore: () => void;
  onOrder: (order: string) => void;
  products: Product[];
  totalCount: number;
}

export const ProductList: React.FC<ProductsListProps> = ({
  displayLoader,
  filters,
  hasNextPage,
  notFound,
  onLoadMore,
  onOrder,
  products,
  totalCount
}) => {
  const filterOptions = [
    { value: "price", label: "Giá từ thấp đến cao" },
    { value: "-price", label: "Giá từ cao xuống thấp" },
    { value: "name", label: "Lọc theo tên A-Z" },
    { value: "-name", label: "Lọc theo tên Z-A" }
  ];
  const sortValues = filterOptions.find(
    option => option.value === filters.sortBy
  );
  const hasProducts = !!totalCount;

  return (
    <div className="products-list">
      <div className="products-list__products container">
        <div className="products-list__products__subheader">
          {hasProducts && (
            <span className="products-list__products__subheader__total">
              {totalCount} sản phẩm
            </span>
          )}
          {displayLoader && (
            <div className="products-list__loader">
              <Loader />
            </div>
          )}
          <span className="products-list__products__subheader__sort">
            {hasProducts && (
              <>
                <span>lọc:</span>{" "}
                <Dropdown
                  options={filterOptions}
                  value={sortValues || ""}
                  isSearchable={false}
                  onChange={event => onOrder(event.value)}
                />
              </>
            )}
          </span>
        </div>
        {hasProducts ? (
          <>
            <div className="products-list__products__grid">
              {products.map(product => (
                <Link
                  to={generateProductUrl(product.id, product.name)}
                  key={product.id}
                >
                  <ProductListItem product={product} />
                </Link>
              ))}
            </div>
            <div className="products-list__products__load-more">
              {displayLoader ? (
                <Loader />
              ) : (
                hasNextPage && (
                  <Button secondary onClick={onLoadMore}>
                    Xem thêm sản phẩm
                  </Button>
                )
              )}
            </div>
          </>
        ) : (
          <div className="products-list__products-not-found">{notFound}</div>
        )}
      </div>
    </div>
  );
};

ProductList.defaultProps = {
  notFound: "Không có sản phẩm thỏa mãn với điều kiện bạn vừa nêu, hoặc sản phẩm chưa được cập nhật đầy đủ"
};

export default ProductList;
