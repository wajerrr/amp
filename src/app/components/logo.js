import React from 'react';
import { css } from 'emotion';

const logoClassName = css`
  display: block;
  width: 124px;
  height: 62px;
  background: url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%20544.2%20595.3%20297.6%22%20enable-background%3D%22new%200%20544.2%20595.3%20297.6%22%20xml%3Aspace%3D%22preserve%22%20height%3D%22%22%20width%3D%22%22%3E%0D%0A%3Cg%3E%0D%0A%09%3Cg%3E%0D%0A%09%09%3Cg%3E%0D%0A%09%09%09%3Crect%20y%3D%22544.2%22%20fill%3D%22%23E3120B%22%20width%3D%22595.3%22%20height%3D%22297.6%22%2F%3E%0D%0A%09%09%3C%2Fg%3E%0D%0A%09%3C%2Fg%3E%0D%0A%09%3Cg%3E%0D%0A%09%09%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M276.1%2C622.8c-0.3-8.4-2-9.5-14.7-9.5c-0.6%2C0-1.5%2C0-2.7%2C0v48.1c0%2C6.6%2C1.7%2C8.4%2C8.2%2C8.5l0.2%2C2.3%0D%0A%09%09%09c-6.2-0.1-10.8-0.1-13.9-0.1c-3.1%2C0-8%2C0-14.4%2C0.1l0.2-2.3c6.5-0.2%2C8.2-1.9%2C8.2-8.5v-48.1c-1.3%2C0-2.4%2C0-3.2%2C0%0D%0A%09%09%09c-13%2C0-14.8%2C1.2-14.9%2C9.5l-3.3-0.2l0.3-13.6c12%2C0.1%2C20.9%2C0.2%2C26.8%2C0.2c5.7%2C0%2C14.4-0.1%2C25.9-0.2l0.3%2C13.6L276.1%2C622.8L276.1%2C622.8z%0D%0A%09%09%09%20M320.8%2C671.9c-2.4%2C0-6%2C0.2-10.9%2C0.3l0.2-2.1c4.7-0.7%2C5.1-1.6%2C5.2-9.4v-5.5v-7.8c0-11.1-1.9-14.8-7.7-14.8c-3.3%2C0-6.6%2C2-8%2C5.1%0D%0A%09%09%09c-0.5%2C1-0.9%2C2.2-1.2%2C3.4c-0.1%2C0.4-0.1%2C0.8-0.1%2C1v13.2v5.5c0%2C7.8%2C0.5%2C8.7%2C5.2%2C9.4l0.2%2C2.1c-4.9-0.2-8.5-0.3-11-0.3%0D%0A%09%09%09c-2.6%2C0-6.4%2C0.2-11.5%2C0.3l0.2-2.1c5.9%2C0%2C6.7-1.2%2C6.8-9.4v-5.5v-29.2v-5.5c-0.1-8.3-0.9-9.4-6.8-9.4l-0.2-2.1c8-0.4%2C9.8-0.7%2C17-2%0D%0A%09%09%09v27.3c4.7-5.2%2C8.6-7.2%2C13.8-7.2c8.6%2C0%2C13.4%2C5.5%2C13.4%2C15.5v12.7v5.5c0.1%2C8.3%2C0.9%2C9.4%2C6.8%2C9.4l0.2%2C2.1%0D%0A%09%09%09C327.2%2C672.1%2C323.3%2C671.9%2C320.8%2C671.9L320.8%2C671.9z%20M348.8%2C647.5c0.3%2C13.4%2C5.2%2C20.9%2C13.3%2C20.9c4.8%2C0%2C8.9-2.2%2C13.2-7.2l1.3%2C2.4%0D%0A%09%09%09c-5.5%2C6.7-10.8%2C9.6-17.8%2C9.6c-12.2%2C0-20.5-9-20.5-22.3c0-14.2%2C8.5-24%2C20.9-24c6.7%2C0%2C11.5%2C2.4%2C14.8%2C7.8c2.2%2C3.7%2C2.8%2C6.2%2C2.9%2C12.6%0D%0A%09%09%09L348.8%2C647.5L348.8%2C647.5z%20M357.5%2C630.1c-5.3%2C0-8%2C4.4-8.9%2C14c8.1-0.2%2C10.6-0.3%2C18.7-1.2C366.2%2C634.3%2C363%2C630.1%2C357.5%2C630.1%0D%0A%09%09%09L357.5%2C630.1z%20M77.8%2C755.7c11%2C0%2C14.2-2.4%2C15.2-11.9l3.9%2C0.2l-2.3%2C16.4l-7.5%2C0.1l-23.9-0.2L47%2C760.4l0.3-2.6c7.1-0.2%2C9-2.2%2C9-9.5%0D%0A%09%09%09v-46.1c0-7.3-1.9-9.2-9-9.5l-0.3-2.6l15.1%2C0.2l23.9-0.2l6.2%2C0.1l0.4%2C14.4l-3.9%2C0.3c-0.7-8.9-2.3-9.8-16.4-9.8c-0.8%2C0-1.5%2C0-2.2%2C0%0D%0A%09%09%09l-1%2C0.1v26.5c1.9%2C0%2C3.3%2C0.1%2C4.2%2C0.1c1.6%2C0.1%2C3%2C0.2%2C4.5%2C0.2c7.8%2C0%2C9.5-1.7%2C9.7-9.1h3.3c-0.3%2C5.9-0.3%2C9-0.3%2C11.9%0D%0A%09%09%09c0%2C2.3%2C0%2C5.6%2C0.1%2C10.1h-3.1c-0.4-7-2-8.4-9.5-8.5l-5.3-0.1l-3.7%2C0.2v20.6C69.1%2C755.3%2C69.6%2C755.7%2C77.8%2C755.7L77.8%2C755.7z%0D%0A%09%09%09%20M132.3%2C713.7c-7.3%2C0-11.1%2C6.5-11.1%2C19.1c0%2C14.8%2C4.6%2C23.1%2C12.8%2C23.1c4.3%2C0%2C7.9-1.9%2C11.7-5.9l1.5%2C3.5c-5.6%2C5.8-10.2%2C8-16.6%2C8%0D%0A%09%09%09c-12.8%2C0-21.3-10.1-21.3-25.3c0-15.8%2C8.9-25.9%2C22.9-25.9c3.7%2C0%2C7.5%2C0.7%2C13.4%2C2.3l0.2%2C11.7l-4.4%2C0.3%0D%0A%09%09%09C139.8%2C715.7%2C138%2C713.7%2C132.3%2C713.7L132.3%2C713.7z%20M181.4%2C761.5c-14%2C0-23.3-9.4-23.8-23.7c0-0.5%2C0-1%2C0-1.5c0-16.5%2C8.9-26%2C24.1-26%0D%0A%09%09%09c14.1%2C0%2C24.1%2C10.5%2C24.1%2C25.6C205.8%2C751.2%2C196.2%2C761.5%2C181.4%2C761.5L181.4%2C761.5z%20M180.3%2C714c-7.2%2C0-10.8%2C6.2-10.8%2C18.3%0D%0A%09%09%09c0%2C1.5%2C0%2C2.9%2C0.2%2C4.4c1%2C14%2C5.6%2C21.5%2C13.1%2C21.5c7%2C0%2C11.2-7.3%2C11.2-19.6C194%2C724.1%2C188.3%2C714%2C180.3%2C714L180.3%2C714z%20M249.4%2C760.4%0D%0A%09%09%09l0.2-2.3c5.2-0.8%2C5.8-1.7%2C5.8-10.5l0.1-6.2v-8.7c0-12.3-2.3-16.4-8.6-16.4c-3.8%2C0-7%2C2-9%2C5.6c-0.8%2C1.5-1.5%2C3.8-1.5%2C4.8v14.6v6.2%0D%0A%09%09%09c0.1%2C8.7%2C0.6%2C9.7%2C5.8%2C10.5l0.3%2C2.3c-5.3-0.2-19.2-0.2-25%2C0l0.2-2.3c6.5%2C0%2C7.5-1.3%2C7.5-10.5v-6.2v-10.2v-6.2c0-9.1-1-10.3-7.5-10.4%0D%0A%09%09%09l-0.2-2.3c8.7-0.5%2C10.6-0.8%2C18-2.3l0.5%2C8.8c5.6-6.2%2C9.8-8.5%2C15.8-8.5c9.5%2C0%2C14.8%2C6.2%2C14.8%2C17.1v11.8c0%2C5.5%2C0%2C8.2%2C0%2C8.4%0D%0A%09%09%09c-0.1%2C0.8-0.1%2C1.6-0.1%2C2.3c0%2C6.2%2C1.6%2C8.1%2C7.6%2C8.1l0.2%2C2.3C268.5%2C760.2%2C254.6%2C760.2%2C249.4%2C760.4L249.4%2C760.4z%20M306.8%2C761.5%0D%0A%09%09%09c-14%2C0-23.3-9.4-23.8-23.7c0-0.5%2C0-1%2C0-1.5c0-16.5%2C8.9-26%2C24.1-26c14.1%2C0%2C24.1%2C10.5%2C24.1%2C25.6%0D%0A%09%09%09C331.1%2C751.2%2C321.5%2C761.5%2C306.8%2C761.5L306.8%2C761.5z%20M305.6%2C714c-7.1%2C0-10.8%2C6.2-10.8%2C18.3c0%2C1.5%2C0%2C2.9%2C0.2%2C4.4%0D%0A%09%09%09c1%2C14%2C5.6%2C21.5%2C13.1%2C21.5c7%2C0%2C11.2-7.3%2C11.2-19.6C319.3%2C724.1%2C313.6%2C714%2C305.6%2C714L305.6%2C714L305.6%2C714z%20M404.1%2C760.4l0.2-2.3%0D%0A%09%09%09c5.2-0.8%2C5.6-1.7%2C5.8-10.5v-6.2v-8.7c0-12.1-2.2-16.4-8.2-16.4c-3.6%2C0-7.3%2C2.3-8.9%2C5.6c-0.5%2C1.2-1%2C2.3-1.3%2C3.7%0D%0A%09%09%09c-0.1%2C0.5-0.2%2C0.9-0.2%2C1v14.6v6.2c0%2C8.7%2C0.6%2C9.7%2C5.8%2C10.5l0.2%2C2.3c-5.3-0.2-18.1-0.2-23.1%2C0l0.2-2.3c5.2-0.8%2C5.6-1.7%2C5.8-10.5%0D%0A%09%09%09v-6.2v-8.7c0-12.1-2.2-16.4-8.2-16.4c-3.7%2C0-7%2C2.2-8.9%2C5.6c-0.8%2C1.6-1.5%2C3.8-1.5%2C4.8v14.6v6.2c0.1%2C8.7%2C0.6%2C9.7%2C5.8%2C10.5l0.2%2C2.3%0D%0A%09%09%09c-5.2-0.2-19.1-0.2-24.9%2C0l0.2-2.3c6.5%2C0%2C7.5-1.3%2C7.5-10.5v-6.2v-10.2v-6.2c0-9.1-1-10.3-7.5-10.4l-0.2-2.3%0D%0A%09%09%09c8.7-0.5%2C10.6-0.8%2C18-2.3l0.5%2C8.8c5.6-6.2%2C9.8-8.5%2C15.6-8.5c6.6%2C0%2C10.5%2C2.7%2C13.5%2C9.2c5.9-6.8%2C10.3-9.2%2C16.3-9.2%0D%0A%09%09%09c9.2%2C0%2C14.5%2C6.2%2C14.5%2C17.1v11.8c0%2C5.3%2C0%2C8.1%2C0%2C8.4c0%2C0.8-0.1%2C1.6-0.1%2C2.3c0%2C6.2%2C1.7%2C8.1%2C7.6%2C8.1l0.2%2C2.3%0D%0A%09%09%09C423%2C760.2%2C409.3%2C760.2%2C404.1%2C760.4L404.1%2C760.4L404.1%2C760.4z%20M451.6%2C760c-2.9%2C0-7.3%2C0.2-13.3%2C0.4l0.2-2.3c6.5%2C0%2C7.5-1.3%2C7.5-10.4%0D%0A%09%09%09l0.1-6.2v-10.2l-0.1-6.2c0-9.1-1-10.3-7.5-10.4l-0.2-2.3c9-0.6%2C11-0.9%2C18.9-2.3v31.5l0.1%2C6.2c0%2C9.2%2C0.9%2C10.4%2C7.5%2C10.4l0.2%2C2.3%0D%0A%09%09%09C459%2C760.2%2C454.6%2C760%2C451.6%2C760L451.6%2C760z%20M451.2%2C700.3c-3.7%2C0-6.5-2.8-6.5-6.6c0-3.7%2C2.9-6.6%2C6.5-6.6s6.5%2C3%2C6.5%2C6.6%0D%0A%09%09%09C457.7%2C697.4%2C454.9%2C700.3%2C451.2%2C700.3L451.2%2C700.3z%20M492.9%2C713.7c-4.4%2C0-7.5%2C2.5-7.5%2C6.2c0%2C3.4%2C1.6%2C5.5%2C6.6%2C8.7%0D%0A%09%09%09c4.6%2C3%2C8.2%2C5.8%2C10.6%2C7.9c2.7%2C2.6%2C4.3%2C5.9%2C4.3%2C9.8c0%2C8.7-7.3%2C15.3-16.7%2C15.3c-3.6%2C0-7-0.8-13.3-2.8l-0.4-9.9l5-0.2%0D%0A%09%09%09c2.3%2C7.5%2C3.7%2C9%2C8.9%2C9c4.5%2C0%2C7.4-2.3%2C7.4-5.9c0-3.3-2-5.9-8.2-10.1c-3.1-2.2-5.3-3.6-6.5-4.5c-2.6-2-4.4-4.3-5.3-6.9%0D%0A%09%09%09c-0.6-1.5-0.9-3.2-0.9-5.3c0-8.9%2C6-14.6%2C15.2-14.6c3.4%2C0%2C5.3%2C0.3%2C13.3%2C2.2l0.2%2C9.8l-5%2C0.2C499.5%2C715.9%2C497.5%2C713.7%2C492.9%2C713.7%0D%0A%09%09%09L492.9%2C713.7z%20M542.8%2C756.4c1.6%2C0%2C3-0.2%2C5.3-0.9v2.8c-3.3%2C1.9-7.9%2C2.9-12.6%2C2.9c-4.3%2C0-8.4-2.4-10.2-6c-1.5-3-1.9-6-1.9-12.7v-25%0D%0A%09%09%09h-6.2v-4.4c7.7-0.6%2C10.7-3.9%2C13-14.1h4.4v13.2H547l-1.3%2C5.3h-10.9v24C534.6%2C753.6%2C536.2%2C756.4%2C542.8%2C756.4L542.8%2C756.4z%22%2F%3E%0D%0A%09%3C%2Fg%3E%0D%0A%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E');
  background-repeat: no-repeat;
`;

const spanClassName = css`
  display: none;
`;

const Logo = () => (
  <a href="//www.economist.com" className={logoClassName} title="The Economist">
    <span className={spanClassName}>The Economist</span>
  </a>
);

export default Logo;
