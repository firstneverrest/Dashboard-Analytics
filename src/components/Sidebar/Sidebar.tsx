import React from 'react';
import {
  Title,
  SidebarContainer,
  LogoContainer,
  NavContainer,
  IconContainer,
} from './Sidebar.styled';
import { ReactComponent as Icon } from '@/images/icon.svg';
import { ReactComponent as DashboardIcon } from '@/images/dashboard.svg';
import { ReactComponent as CalendarIcon } from '@/images/calendar.svg';
import { ReactComponent as BankIcon } from '@/images/bank.svg';
import { ReactComponent as BlogIcon } from '@/images/blog.svg';
import { ReactComponent as ChatIcon } from '@/images/chat.svg';
import { ReactComponent as ContactIcon } from '@/images/contact.svg';
import { ReactComponent as MailIcon } from '@/images/mail.svg';
import { ReactComponent as TaskIcon } from '@/images/task.svg';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <span>
          <Icon />
        </span>
        <h2>Analytics</h2>
      </LogoContainer>
      <Title>Daily</Title>
      <NavContainer>
        <IconContainer>
          <DashboardIcon />
        </IconContainer>
        <a href="#">Dashboard</a>
      </NavContainer>
      <NavContainer>
        <IconContainer>
          <CalendarIcon />
        </IconContainer>
        <a href="#">Calendar</a>
      </NavContainer>
      <NavContainer>
        <IconContainer>
          <TaskIcon />
        </IconContainer>
        <a href="#">Task</a>
      </NavContainer>
      <Title>Money Management</Title>
      <NavContainer>
        <IconContainer>
          <BankIcon />
        </IconContainer>
        <a href="#">Bank</a>
      </NavContainer>
      <Title>Social</Title>
      <NavContainer>
        <IconContainer>
          <ChatIcon />
        </IconContainer>
        <a href="#">Chat</a>
      </NavContainer>
      <NavContainer>
        <IconContainer>
          <MailIcon />
        </IconContainer>
        <a href="#">Mail</a>
      </NavContainer>
      <NavContainer>
        <IconContainer>
          <ContactIcon />
        </IconContainer>
        <a href="#">Contact</a>
      </NavContainer>
      <NavContainer>
        <IconContainer>
          <BlogIcon />
        </IconContainer>
        <a href="#">Blog</a>
      </NavContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
