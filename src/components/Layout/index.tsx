import Navbar from "../Navbar";

/*
 * @Author: Chunwei Lu
 * @Date: 2022-06-28 22:59:29
 * @LastEditTime: 2022-07-01 12:04:50
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/components/Layout/index.tsx
 */
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};
export default Layout;
