import { smallScreen } from "../../components/App/scss/variables.scss";
import "./scss/index.scss";

import * as React from "react";
import Media from "react-media";

import CostRow from "./CostRow";
import ProductRow, { EditableProductRowProps, LineI } from "./ProductRow";

interface TableProps extends EditableProductRowProps {
  lines: LineI[];
  subtotal: string;
  deliveryCost?: string;
  totalCost?: string;
}

const Table: React.FC<TableProps> = ({
  subtotal,
  deliveryCost,
  totalCost,
  lines,
  ...rowProps
}) => (
  <Media query={{ minWidth: smallScreen }}>
    {mediumScreen => (
      <table className="cart-table">
        <thead>
          <tr>
            <th>Món</th>
            {mediumScreen && <th>Đơn giá</th>}
            <th>Kích thước</th>
            <th className="cart-table__quantity-header">Số lượng</th>
            <th colSpan={2}>{mediumScreen ? "Thành tiền" : "Đơn giá"}</th>
          </tr>
        </thead>
        <tbody>
          {lines.map(line => (
            <ProductRow
              key={line.id}
              line={line}
              mediumScreen={mediumScreen}
              {...rowProps}
            />
          ))}
        </tbody>
        <tfoot>
          <CostRow
            mediumScreen={mediumScreen}
            heading="Tạm tính"
            cost={subtotal}
          />
          {deliveryCost && (
            <CostRow
              mediumScreen={mediumScreen}
              heading="Cước vận chuyển"
              cost={deliveryCost}
            />
          )}
          {totalCost && (
            <CostRow
              mediumScreen={mediumScreen}
              heading="Tổng chi phí"
              cost={totalCost}
            />
          )}
        </tfoot>
      </table>
    )}
  </Media>
);

export default Table;
