import React from "react";
import styled from "styled-components";
import { golden } from "../../theme";

const HtmlTable = styled.table`
  width: 100%;
  border-spacing: 8px 0;
  border-collapse: separate;
`;

const Step = styled.div`
  width: 100%;
  margin-top: 16px;
  height: 6px;
  background-color: ${props => (props.completed ? golden : "rgb(200,200,200)")};
`;

export const StepsProgress = ({ steps, current }) => (
  <HtmlTable>
    <tbody>
      <tr>
        {steps.map(step => (
          <td key={step}>
            <Step completed={step <= current} />
          </td>
        ))}
      </tr>
    </tbody>
  </HtmlTable>
);
