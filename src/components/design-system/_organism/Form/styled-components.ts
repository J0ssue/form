import styled from "@emotion/styled";
import buildColor from "../../_static/colorPalette";

export const FormContainer = styled.div`
  padding: 15px;
  background-color: ${buildColor("grey", "300")};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 20px;
`;

export const FormEl = styled.form`
  flex-basis: 100%;
  margin-bottom: 30px;
  .input-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    input,
    select {
      width: 250px;
    }
  }
  button {
    margin: 50px 0px 30px auto;
  }

  @media (min-width: 768px) {
    flex-basis: calc(50% - 20px);
  }
`;

export const TableContainer = styled.div`
  border: 2px solid ${buildColor("blue", "400")};
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: calc(50% - 20px);
  }
`;

export const Caption = styled.p`
  text-align: right;
  color: ${buildColor("blue", "400")};
  caption-side: bottom;
  margin-top: 10px;
  flex-basis: 100%;
`;
