import React, { useState } from "react";
import { Menu, Layout, Button, Drawer, Space } from "antd";
import {
  HomeOutlined,
  RocketOutlined,
  TeamOutlined,
  InstagramOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "./Navbar.css";

const { Header } = Layout;

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMenuClick = (key) => {
    const section = document.querySelector(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsDrawerOpen(false);
    }
  };

  const menuItems = [
    {
      key: "#what-you-get",
      label: "Что вы получите",
      icon: <RocketOutlined />,
      onClick: () => handleMenuClick("#what-you-get"),
    },
    {
      key: "#results",
      label: "Результаты",
      icon: <HomeOutlined />,
      onClick: () => handleMenuClick("#results"),
    },
    {
      key: "#cooperation",
      label: "Сотрудничество",
      icon: <TeamOutlined />,
      onClick: () => handleMenuClick("#cooperation"),
    },
    {
      key: "social",
      label: (
        <Space>
          <Button
            shape="circle"
            icon={<InstagramOutlined />}
            href="https://instagram.com"
            target="_blank"
            className="social-button"
          />
          <Button
            shape="circle"
            className="social-button"
            href="https://telegram.org"
            target="_blank"
          >
            <img
              src="/images/telegram.png"
              alt="Telegram"
              className="telegram-icon"
            />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Header className="navbar">
      <div className="navbar-logo">Логотип</div>
      <Menu
        mode="horizontal"
        theme="dark"
        items={menuItems}
        className="navbar-menu"
        style={{ background: "transparent", borderBottom: "none" }}
        onClick={(e) => handleMenuClick(e.key)}
      />
      <Button
        className="navbar-toggle"
        type="text"
        icon={<MenuOutlined />}
        onClick={toggleDrawer}
      />
      <Drawer
        title="Меню"
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        open={isDrawerOpen}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          onClick={(e) => handleMenuClick(e.key)}
        />
      </Drawer>
    </Header>
  );
};

export default Navbar;
