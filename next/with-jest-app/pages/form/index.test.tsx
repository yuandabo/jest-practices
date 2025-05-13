/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "./index";

it("Form", () => {
  render(<Form />);
  //   expect(screen.getByRole("label")).toHaveTextContent("Username");
  // screen.getByLabelText('用户名')
  // 模拟输入
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "test" },
  });
  fireEvent.click(screen.getByRole("button"));
  waitFor(() => {
    expect(screen.getByText("提交成功")).toBeInTheDocument();
  });
});

test("空用户名触发错误", () => {
  const { getByRole, getByText } = render(<Form />);
  fireEvent.click(screen.getByRole("button"));
  expect(getByText("用户名不能为空")).toBeInTheDocument(); // 引用示例[7](@ref)
});

// 生成快照
test("Form快照", () => {
  const { asFragment } = render(<Form />);
  expect(asFragment()).toMatchSnapshot();
});
