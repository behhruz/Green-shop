import type { FC } from "react";
import {
  SearchOutlined,
  BellOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Navbar: FC = () => {
  const icons_style: string = "cursor-pointer text-[20px]";
  return (
    <div className="w-[80%] m-auto flex justify-between items-center h-[90px]">
      <div className="cursor-pointer">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          alt=""
        />
      </div>
      <div>
        <nav className="flex gap-[50px] cursor-pointer">
          <p>Home</p>
          <p>Blog</p>
        </nav>
      </div>
      <div className="flex justify-around items-center gap-[30px]">
        <SearchOutlined className={`${icons_style}`} />
        <BellOutlined className={`${icons_style}`} />
        <ShoppingCartOutlined className={`${icons_style}`} />
        <button className="rounded-md text-white flex gap-[4px] items-center justify-center w-[100px] h-[35px] bg-[#46A358]">
          <LoginOutlined />
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
