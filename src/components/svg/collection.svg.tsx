import React from "react";
import { SizeVariantType, ThemeType } from "../../../types/globalTypes";

export type SvgProps = {
  color?: string;
  size?: "xsm" | SizeVariantType;
  accent?: boolean;
  className?: string;
};

export const Solid = ({ color, size }: SvgProps) => (
  <svg
    width={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    height={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7 17.8L12.7 14.8C12.3 14.4 11.7 14.4 11.3 14.8L8.3 17.8C7.9 18.2 7.9 18.8 8.3 19.2C8.7 19.6 9.3 19.6 9.7 19.2L12 16.9L14.3 19.2C14.5 19.4 14.7 19.5 15 19.5C15.3 19.5 15.5 19.4 15.7 19.2C16.1 18.8 16.1 18.2 15.7 17.8ZM11.3 10.2C11.5 10.4 11.7 10.5 12 10.5C12.3 10.5 12.5 10.4 12.7 10.2L15.7 7.2C16.1 6.8 16.1 6.2 15.7 5.8C15.3 5.4 14.7 5.4 14.3 5.8L12 8.1L9.7 5.8C9.3 5.4 8.7 5.4 8.3 5.8C7.9 6.2 7.9 6.8 8.3 7.2L11.3 10.2Z"
      fill={color === "dark" ? "#FFFFFF" : "#6A6666"}
    />
  </svg>
);

export const Search = ({ color, size }: SvgProps) => (
  <svg
    width={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    height={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.07 16.83L19 14.71C18.5547 14.2868 17.9931 14.0063 17.3872 13.9047C16.7813 13.8032 16.1589 13.8851 15.6 14.14L14.7 13.24C15.7606 11.8229 16.2449 10.0567 16.0555 8.29684C15.8662 6.537 15.0172 4.91423 13.6794 3.7552C12.3417 2.59618 10.6145 1.98696 8.84566 2.05019C7.07679 2.11341 5.39755 2.84439 4.14597 4.09597C2.89439 5.34755 2.16341 7.0268 2.10018 8.79567C2.03696 10.5645 2.64618 12.2917 3.8052 13.6294C4.96422 14.9672 6.58699 15.8162 8.34684 16.0055C10.1067 16.1949 11.8729 15.7106 13.29 14.65L14.18 15.54C13.8951 16.0996 13.793 16.7346 13.8881 17.3553C13.9832 17.9761 14.2706 18.5513 14.71 19L16.83 21.12C17.3925 21.6818 18.155 21.9974 18.95 21.9974C19.745 21.9974 20.5075 21.6818 21.07 21.12C21.3557 20.8406 21.5828 20.5069 21.7378 20.1386C21.8928 19.7702 21.9726 19.3746 21.9726 18.975C21.9726 18.5754 21.8928 18.1798 21.7378 17.8114C21.5828 17.4431 21.3557 17.1094 21.07 16.83ZM12.59 12.59C11.8902 13.288 10.9993 13.7629 10.0297 13.9549C9.06018 14.1468 8.0555 14.047 7.1426 13.6682C6.22971 13.2894 5.44956 12.6485 4.90071 11.8265C4.35186 11.0046 4.05894 10.0384 4.05894 9.05C4.05894 8.06163 4.35186 7.09544 4.90071 6.27347C5.44956 5.45149 6.22971 4.81062 7.1426 4.43182C8.0555 4.05301 9.06018 3.95325 10.0297 4.14515C10.9993 4.33706 11.8902 4.812 12.59 5.51C13.0556 5.97446 13.4251 6.52621 13.6771 7.13367C13.9292 7.74112 14.0589 8.39233 14.0589 9.05C14.0589 9.70768 13.9292 10.3589 13.6771 10.9663C13.4251 11.5738 13.0556 12.1255 12.59 12.59ZM19.66 19.66C19.567 19.7537 19.4564 19.8281 19.3346 19.8789C19.2127 19.9297 19.082 19.9558 18.95 19.9558C18.818 19.9558 18.6873 19.9297 18.5654 19.8789C18.4436 19.8281 18.333 19.7537 18.24 19.66L16.12 17.54C16.0263 17.447 15.9519 17.3364 15.9011 17.2146C15.8503 17.0927 15.8242 16.962 15.8242 16.83C15.8242 16.698 15.8503 16.5673 15.9011 16.4454C15.9519 16.3236 16.0263 16.213 16.12 16.12C16.213 16.0263 16.3236 15.9519 16.4454 15.9011C16.5673 15.8503 16.698 15.8242 16.83 15.8242C16.962 15.8242 17.0927 15.8503 17.2146 15.9011C17.3364 15.9519 17.447 16.0263 17.54 16.12L19.66 18.24C19.7537 18.333 19.8281 18.4436 19.8789 18.5654C19.9297 18.6873 19.9558 18.818 19.9558 18.95C19.9558 19.082 19.9297 19.2127 19.8789 19.3346C19.8281 19.4564 19.7537 19.567 19.66 19.66Z"
      fill={color}
    />
  </svg>
);

export const Clock = ({ color, size }: SvgProps) => (
  <svg
    width={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    height={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 2C9.02218 2 7.08879 2.58649 5.44429 3.6853C3.7998 4.78412 2.51808 6.3459 1.7612 8.17317C1.00433 10.0004 0.806292 12.0111 1.19214 13.9509C1.578 15.8907 2.5304 17.6725 3.92893 19.0711C5.32745 20.4696 7.10928 21.422 9.04909 21.8079C10.9889 22.1937 12.9996 21.9957 14.8268 21.2388C16.6541 20.4819 18.2159 19.2002 19.3147 17.5557C20.4135 15.9112 21 13.9778 21 12C21 10.6868 20.7413 9.38642 20.2388 8.17317C19.7362 6.95991 18.9996 5.85752 18.0711 4.92893C17.1425 4.00035 16.0401 3.26375 14.8268 2.7612C13.6136 2.25866 12.3132 2 11 2ZM11 20C9.41775 20 7.87103 19.5308 6.55543 18.6518C5.23984 17.7727 4.21446 16.5233 3.60896 15.0615C3.00346 13.5997 2.84503 11.9911 3.15371 10.4393C3.4624 8.88743 4.22432 7.46197 5.34314 6.34315C6.46196 5.22433 7.88743 4.4624 9.43927 4.15372C10.9911 3.84504 12.5997 4.00346 14.0615 4.60896C15.5233 5.21447 16.7727 6.23984 17.6518 7.55544C18.5308 8.87103 19 10.4177 19 12C19 14.1217 18.1571 16.1566 16.6569 17.6569C15.1566 19.1571 13.1217 20 11 20ZM12 11.93V7C12 6.73478 11.8946 6.48043 11.7071 6.29289C11.5196 6.10536 11.2652 6 11 6C10.7348 6 10.4804 6.10536 10.2929 6.29289C10.1054 6.48043 10 6.73478 10 7V12C10 12 10 12.07 10 12.11C9.97539 12.3133 10.0138 12.5192 10.11 12.7L11.61 15.3C11.7426 15.5307 11.9614 15.6993 12.2184 15.7687C12.4753 15.8381 12.7493 15.8026 12.98 15.67C13.2107 15.5374 13.3793 15.3186 13.4487 15.0616C13.5181 14.8047 13.4826 14.5307 13.35 14.3L12 11.93Z"
      fill={color}
    />
  </svg>
);

export function Close({ color, className = "" }: Props) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.71 8.29002C15.6171 8.19629 15.5065 8.1219 15.3846 8.07113C15.2627 8.02036 15.132 7.99422 15 7.99422C14.868 7.99422 14.7373 8.02036 14.6154 8.07113C14.4936 8.1219 14.383 8.19629 14.29 8.29002L12 10.59L9.71002 8.29002C9.52171 8.10171 9.26632 7.99593 9.00002 7.99593C8.73372 7.99593 8.47832 8.10171 8.29002 8.29002C8.10171 8.47832 7.99593 8.73372 7.99593 9.00002C7.99593 9.26632 8.10171 9.52171 8.29002 9.71002L10.59 12L8.29002 14.29C8.19629 14.383 8.1219 14.4936 8.07113 14.6154C8.02036 14.7373 7.99422 14.868 7.99422 15C7.99422 15.132 8.02036 15.2627 8.07113 15.3846C8.1219 15.5065 8.19629 15.6171 8.29002 15.71C8.38298 15.8037 8.49358 15.8781 8.61544 15.9289C8.7373 15.9797 8.86801 16.0058 9.00002 16.0058C9.13203 16.0058 9.26274 15.9797 9.38459 15.9289C9.50645 15.8781 9.61705 15.8037 9.71002 15.71L12 13.41L14.29 15.71C14.383 15.8037 14.4936 15.8781 14.6154 15.9289C14.7373 15.9797 14.868 16.0058 15 16.0058C15.132 16.0058 15.2627 15.9797 15.3846 15.9289C15.5065 15.8781 15.6171 15.8037 15.71 15.71C15.8037 15.6171 15.8781 15.5065 15.9289 15.3846C15.9797 15.2627 16.0058 15.132 16.0058 15C16.0058 14.868 15.9797 14.7373 15.9289 14.6154C15.8781 14.4936 15.8037 14.383 15.71 14.29L13.41 12L15.71 9.71002C15.8037 9.61705 15.8781 9.50645 15.9289 9.38459C15.9797 9.26274 16.0058 9.13203 16.0058 9.00002C16.0058 8.86801 15.9797 8.7373 15.9289 8.61544C15.8781 8.49358 15.8037 8.38298 15.71 8.29002ZM19.07 4.93002C18.1476 3.97492 17.0441 3.21309 15.8241 2.689C14.604 2.16491 13.2918 1.88905 11.964 1.87751C10.6362 1.86598 9.31944 2.11899 8.09048 2.6218C6.86151 3.12461 5.745 3.86714 4.80607 4.80607C3.86714 5.745 3.12461 6.86151 2.6218 8.09048C2.11899 9.31944 1.86598 10.6362 1.87751 11.964C1.88905 13.2918 2.16491 14.604 2.689 15.8241C3.21309 17.0441 3.97492 18.1476 4.93002 19.07C5.85249 20.0251 6.95593 20.7869 8.17597 21.311C9.39601 21.8351 10.7082 22.111 12.036 22.1225C13.3638 22.1341 14.6806 21.881 15.9096 21.3782C17.1385 20.8754 18.255 20.1329 19.194 19.194C20.1329 18.255 20.8754 17.1385 21.3782 15.9096C21.881 14.6806 22.1341 13.3638 22.1225 12.036C22.111 10.7082 21.8351 9.39601 21.311 8.17597C20.7869 6.95593 20.0251 5.85249 19.07 4.93002ZM17.66 17.66C16.3521 18.9694 14.6306 19.7848 12.7888 19.9673C10.9471 20.1498 9.09902 19.6881 7.55954 18.6608C6.02006 17.6335 4.88438 16.1042 4.34599 14.3335C3.80761 12.5628 3.89982 10.6602 4.60693 8.9498C5.31404 7.23945 6.59229 5.82717 8.22391 4.95358C9.85553 4.07999 11.7396 3.79915 13.555 4.15889C15.3705 4.51863 17.0051 5.49671 18.1803 6.92648C19.3555 8.35625 19.9986 10.1493 20 12C20.0036 13.0513 19.7986 14.0929 19.3969 15.0644C18.9953 16.0359 18.4049 16.9182 17.66 17.66Z"
        fill={color}
      />
    </svg>
  );
}

export const GithubIcon = ({ className }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    className={className}
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export const NightIcon = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15px"
    height="15px"
    viewBox="0 0 512 512"
    className={className}
  >
    <path
      d="M180 3.9C97.9 31.1 34.4 96.4 10.6 178c-7.4 25.4-10 44.5-10 74 0 23.3 1.1 34.7 5.5 54.5 8.4 38.1 26.6 76.2 51.3 107.5 7.7 9.7 30.9 32.9 40.6 40.6 37 29.2 81 48.1 128.5 55 14.7 2.2 50 2.5 65.5.5C377.7 499.3 450.3 449 491.2 372c9.3-17.4 20.8-47.9 20.8-54.8-.1-6.2-5.7-14.3-11.6-16.8-6.8-2.8-10.8-1.9-26.9 6-18.2 9-34.7 14.8-50.9 18.1-80.8 16.3-162.8-18.9-208.1-89.5-10.2-15.9-19.3-36.7-24.5-56.4-4.7-17.5-6.3-30-6.3-49.6.1-33.6 6.1-58.7 21.9-90.4 5.8-11.7 7.4-15.9 7.4-19.3 0-8.1-3.8-13.8-11.5-17.4-5.6-2.6-8.5-2.4-21.5 2zm-23 51.8c0 .5-.9 3.7-2 7.3-10.9 35.9-12.2 79.6-3.4 118.5 7.5 33.3 24.7 68.7 47.1 96.5 24.8 31 61.1 57.5 99.1 72.4 46.7 18.3 101.9 20.9 149.5 7 4.9-1.4 9.1-2.4 9.4-2.1 1 1.1-13 23-22.6 35.2-3 3.8-10.7 12.2-17 18.5-52.5 52.2-126.3 74.9-198.1 60.9C111.1 449 34.3 352.8 38.3 243.5c2.8-76.1 42.6-142.9 109.5-183.7 7.8-4.8 9.2-5.4 9.2-4.1z"
      fill="#fff"
    />
  </svg>
);

export const SunIcon = ({ className, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    className={className}
  >
    <path
      d="M11 0v3h2V0h-2zM4.223 2.809 2.809 4.223l2.12 2.12L6.345 4.93 4.223 2.809zm15.554 0-2.12 2.12 1.413 1.415 2.121-2.121-1.414-1.414zM12 5c-3.854 0-7 3.146-7 7s3.146 7 7 7 7-3.146 7-7-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5zM0 11v2h3v-2H0zm21 0v2h3v-2h-3zM4.93 17.656l-2.121 2.121 1.414 1.414 2.12-2.12-1.413-1.415zm14.14 0-1.414 1.414 2.121 2.121 1.414-1.414-2.12-2.12zM11 21v3h2v-3h-2z"
      fill="#222"
    />
  </svg>
);
type Props = {
  color?: string;
  className?: string;
  fill?: string;
  sdoffset?: number;
  width?: number;
};
export const EyeIcon = ({ color }: Props) => {
  return (
    <svg
      // className="svg-container-blue svg-container"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
    >
      <path
        fill={color}
        d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636C20.118 13.473 16.806 17 12.015 17c-4.42 0-7.93-3.536-9.478-5.407C4.03 9.946 7.354 7 12.015 7zm0-2C4.446 5 0 11.551 0 11.551S4.835 19 12.015 19C19.748 19 24 11.551 24 11.551S19.709 5 12.015 5zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-.004 3.999a1.446 1.446 0 1 1-2.044-2.046 1.446 1.446 0 0 1 2.044 2.046z"
      />
    </svg>
  );
};
export const HeartIcon = ({ color, fill, sdoffset }: Props) => {
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="svg-container"
    >
      <path
        fill={color}
        d="M12 21.593C6.37 16.054 1 11.296 1 7.191 1 3.4 4.068 2 6.281 2c1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447C20.266 2.01 23 3.631 23 7.191c0 4.069-5.136 8.625-11 14.402M17.726 1.01c-2.203 0-4.446 1.042-5.726 3.238C10.715 2.042 8.478 1 6.281 1 3.098 1 0 3.187 0 7.191 0 11.852 5.571 16.62 12 23c6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"
      />
    </svg>
  );
};
export const CommentIcon = ({ color }: Props) => {
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="svg-container-green svg-container"
    >
      <path
        fill={color}
        d="M12 1C5.662 1 0 5.226 0 11.007c0 2.05.739 4.063 2.047 5.625L.054 23 7 20a19.51 19.51 0 0 0 4.864.641c7.174 0 12.136-4.439 12.136-9.634C24 5.195 18.299 1 12 1zm0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695L1.66 21.217l1.505-4.808C1.857 14.845 1 13.281 1 11.007 1 6.041 5.935 2 12 2zM7 9.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 7 9.5zm5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 12 9.5zm5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 17 9.5z"
      />
    </svg>
  );
};
export const EllipsesIcon = ({ color }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-150 transition-all duration-300"
      style={{
        stroke: "#d3d3d3",
      }}
    >
      <path
        d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
        fill={color}
      />
    </svg>
  );
};

export const FacebookIcon = ({ color, width = 24 }: Props) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9 2H3.1C2.80826 2 2.52847 2.11589 2.32218 2.32218C2.11589 2.52847 2 2.80826 2 3.1V20.9C2 21.0445 2.02845 21.1875 2.08373 21.321C2.13901 21.4544 2.22004 21.5757 2.32218 21.6778C2.42433 21.78 2.54559 21.861 2.67905 21.9163C2.81251 21.9715 2.95555 22 3.1 22H12.68V14.25H10.08V11.25H12.68V9C12.6261 8.47176 12.6885 7.93813 12.8627 7.43654C13.0369 6.93495 13.3188 6.47755 13.6885 6.09641C14.0582 5.71528 14.5068 5.41964 15.0028 5.23024C15.4989 5.04083 16.0304 4.96225 16.56 5C17.3383 4.99521 18.1163 5.03528 18.89 5.12V7.82H17.3C16.04 7.82 15.8 8.42 15.8 9.29V11.22H18.8L18.41 14.22H15.8V22H20.9C21.0445 22 21.1875 21.9715 21.321 21.9163C21.4544 21.861 21.5757 21.78 21.6778 21.6778C21.78 21.5757 21.861 21.4544 21.9163 21.321C21.9715 21.1875 22 21.0445 22 20.9V3.1C22 2.95555 21.9715 2.81251 21.9163 2.67905C21.861 2.54559 21.78 2.42433 21.6778 2.32218C21.5757 2.22004 21.4544 2.13901 21.321 2.08373C21.1875 2.02845 21.0445 2 20.9 2Z"
        fill={color}
      />
    </svg>
  );
};

export const TwitterIcon = ({ color, width = 24 }: Props) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z"
        fill={color}
      />
    </svg>
  );
};

export const LinkIcon = ({ color, width = 24 }: Props) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.11 15.39L8.23002 19.27C7.76026 19.7233 7.13288 19.9767 6.48002 19.9767C5.82716 19.9767 5.19978 19.7233 4.73002 19.27C4.49962 19.0405 4.31681 18.7678 4.19207 18.4675C4.06733 18.1671 4.00312 17.8452 4.00312 17.52C4.00312 17.1948 4.06733 16.8728 4.19207 16.5725C4.31681 16.2722 4.49962 15.9995 4.73002 15.77L8.61002 11.89C8.79832 11.7017 8.90411 11.4463 8.90411 11.18C8.90411 10.9137 8.79832 10.6583 8.61002 10.47C8.42172 10.2817 8.16632 10.1759 7.90002 10.1759C7.63372 10.1759 7.37832 10.2817 7.19002 10.47L3.31002 14.36C2.52838 15.2108 2.10564 16.3306 2.13009 17.4857C2.15455 18.6408 2.6243 19.7418 3.44125 20.5587C4.2582 21.3757 5.35918 21.8454 6.51427 21.8699C7.66935 21.8944 8.78923 21.4716 9.64002 20.69L13.53 16.81C13.7183 16.6217 13.8241 16.3663 13.8241 16.1C13.8241 15.8337 13.7183 15.5783 13.53 15.39C13.3417 15.2017 13.0863 15.0959 12.82 15.0959C12.5537 15.0959 12.2983 15.2017 12.11 15.39ZM20.69 3.30997C19.8488 2.47398 18.711 2.00476 17.525 2.00476C16.339 2.00476 15.2012 2.47398 14.36 3.30997L10.47 7.18997C10.3768 7.28321 10.3028 7.3939 10.2524 7.51572C10.2019 7.63755 10.1759 7.76811 10.1759 7.89997C10.1759 8.03183 10.2019 8.1624 10.2524 8.28422C10.3028 8.40604 10.3768 8.51673 10.47 8.60997C10.5633 8.70321 10.6739 8.77717 10.7958 8.82763C10.9176 8.87809 11.0482 8.90406 11.18 8.90406C11.3119 8.90406 11.4424 8.87809 11.5643 8.82763C11.6861 8.77717 11.7968 8.70321 11.89 8.60997L15.77 4.72997C16.2398 4.2766 16.8672 4.02323 17.52 4.02323C18.1729 4.02323 18.8003 4.2766 19.27 4.72997C19.5004 4.95946 19.6832 5.23218 19.808 5.53249C19.9327 5.8328 19.9969 6.15479 19.9969 6.47997C19.9969 6.80516 19.9327 7.12714 19.808 7.42745C19.6832 7.72776 19.5004 8.00049 19.27 8.22997L15.39 12.11C15.2963 12.2029 15.2219 12.3135 15.1711 12.4354C15.1204 12.5573 15.0942 12.688 15.0942 12.82C15.0942 12.952 15.1204 13.0827 15.1711 13.2045C15.2219 13.3264 15.2963 13.437 15.39 13.53C15.483 13.6237 15.5936 13.6981 15.7154 13.7489C15.8373 13.7996 15.968 13.8258 16.1 13.8258C16.232 13.8258 16.3627 13.7996 16.4846 13.7489C16.6065 13.6981 16.7171 13.6237 16.81 13.53L20.69 9.63997C21.526 8.79875 21.9952 7.66095 21.9952 6.47497C21.9952 5.289 21.526 4.15119 20.69 3.30997ZM8.83002 15.17C8.92346 15.2627 9.03428 15.336 9.15611 15.3857C9.27795 15.4355 9.40841 15.4607 9.54002 15.46C9.67163 15.4607 9.80209 15.4355 9.92393 15.3857C10.0458 15.336 10.1566 15.2627 10.25 15.17L15.17 10.25C15.3583 10.0617 15.4641 9.80627 15.4641 9.53997C15.4641 9.27367 15.3583 9.01828 15.17 8.82997C14.9817 8.64167 14.7263 8.53588 14.46 8.53588C14.1937 8.53588 13.9383 8.64167 13.75 8.82997L8.83002 13.75C8.73629 13.8429 8.6619 13.9535 8.61113 14.0754C8.56036 14.1973 8.53422 14.328 8.53422 14.46C8.53422 14.592 8.56036 14.7227 8.61113 14.8445C8.6619 14.9664 8.73629 15.077 8.83002 15.17Z"
        fill={color}
      />
    </svg>
  );
};

export const RedditIcon = ({ color, width = 24 }: Props) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4102 16.8672C13.728 17.3674 12.8828 17.5933 12.042 17.5C11.2022 17.5935 10.358 17.368 9.67677 16.8681C9.48898 16.6817 9.23497 16.5772 8.97033 16.5776C8.70569 16.578 8.45197 16.6832 8.26471 16.8702C8.07746 17.0572 7.97191 17.3107 7.97117 17.5754C7.97043 17.84 8.07456 18.0942 8.26077 18.2822C8.77784 18.7273 9.37881 19.0644 10.0282 19.2735C10.6776 19.4827 11.3624 19.5597 12.042 19.5C12.7217 19.5594 13.4064 19.4824 14.056 19.2734C14.7055 19.0645 15.3067 18.7278 15.8242 18.2832C15.9175 18.1904 15.9916 18.0801 16.0423 17.9587C16.0929 17.8372 16.1191 17.707 16.1193 17.5754C16.1196 17.4438 16.0939 17.3135 16.0437 17.1919C15.9935 17.0702 15.9198 16.9597 15.8268 16.8666C15.7338 16.7735 15.6234 16.6996 15.5018 16.6492C15.3802 16.5989 15.2499 16.573 15.1183 16.573C14.9868 16.5731 14.8565 16.5991 14.735 16.6496C14.6134 16.7 14.5031 16.774 14.4102 16.8672L14.4102 16.8672ZM9.2005 15.0016C9.39828 15.0016 9.5916 14.9429 9.75602 14.8329C9.92044 14.723 10.0486 14.5668 10.1242 14.384C10.1998 14.2013 10.2196 14.0002 10.1809 13.8062C10.1423 13.6123 10.047 13.4341 9.90709 13.2943C9.7672 13.1545 9.58899 13.0593 9.395 13.0208C9.201 12.9823 8.99994 13.0021 8.81724 13.0779C8.63454 13.1536 8.4784 13.2818 8.36856 13.4463C8.25873 13.6108 8.20014 13.8041 8.2002 14.0019C8.20049 14.2671 8.30599 14.5213 8.49354 14.7087C8.68108 14.8962 8.93535 15.0015 9.2005 15.0016ZM15.2005 13.0016C15.0027 13.0016 14.8094 13.0602 14.6449 13.17C14.4804 13.2798 14.3522 13.436 14.2764 13.6187C14.2007 13.8014 14.1808 14.0024 14.2194 14.1964C14.2579 14.3904 14.3531 14.5686 14.4929 14.7085C14.6327 14.8484 14.8108 14.9437 15.0048 14.9824C15.1988 15.021 15.3999 15.0013 15.5826 14.9256C15.7654 14.85 15.9216 14.7219 16.0315 14.5574C16.1414 14.393 16.2001 14.1997 16.2002 14.0019C16.1999 13.7368 16.0945 13.4826 15.9071 13.2951C15.7197 13.1076 15.4656 13.0021 15.2005 13.0016ZM23 11.7802C23.0018 10.9872 22.7536 10.2137 22.2906 9.56981C21.8277 8.92591 21.1735 8.44433 20.4211 8.19353C19.6688 7.94274 18.8565 7.93549 18.0998 8.17283C17.343 8.41016 16.6804 8.87999 16.206 9.51554C15.2065 9.26109 14.1854 9.10088 13.1559 9.03703L14.0117 3.33203L16.0993 4.04187C16.1088 4.83599 16.4331 5.59387 17.001 6.14902C17.569 6.70418 18.334 7.01121 19.1281 7.00269C19.9223 6.99416 20.6806 6.67078 21.2364 6.10356C21.7923 5.53635 22.1003 4.77168 22.0928 3.97754V3.95506C22.0737 3.16958 21.7501 2.42226 21.1903 1.87089C20.6306 1.31951 19.8785 1.00723 19.0928 0.999978C18.642 1.00335 18.1978 1.10906 17.7938 1.30914C17.3899 1.50922 17.0366 1.79844 16.7607 2.15498L13.5225 1.05369C13.3839 1.00626 13.2365 0.989894 13.0909 1.00574C12.9453 1.02159 12.805 1.06927 12.6798 1.1454C12.5547 1.22153 12.4478 1.32425 12.3668 1.44628C12.2857 1.56831 12.2325 1.70666 12.2109 1.85154L11.1345 9.02698C10.0073 9.07633 8.88808 9.24002 7.794 9.51554C7.21467 8.73411 6.35555 8.20704 5.39644 8.04464C4.43733 7.88225 3.45259 8.09712 2.6483 8.64428C1.84402 9.19144 1.28254 10.0285 1.08138 10.9802C0.880228 11.9319 1.05499 12.9246 1.56908 13.7504C1.20061 14.4433 1.00536 15.2152 1 16C1 19.9248 5.832 23 12 23C18.168 23 23 19.9248 23 16C22.9947 15.2154 22.7996 14.4439 22.4313 13.7511C22.7988 13.159 22.9955 12.477 23 11.7802ZM19.0928 2.99998C19.2906 2.99998 19.4839 3.05863 19.6483 3.16851C19.8128 3.27839 19.941 3.43457 20.0166 3.61729C20.0923 3.80002 20.1121 4.00109 20.0736 4.19507C20.035 4.38905 19.9397 4.56723 19.7999 4.70708C19.66 4.84694 19.4818 4.94218 19.2879 4.98076C19.0939 5.01935 18.8928 4.99955 18.7101 4.92386C18.5274 4.84817 18.3712 4.72 18.2613 4.55555C18.1514 4.3911 18.0928 4.19776 18.0928 3.99998C18.0971 3.7361 18.2038 3.48424 18.3904 3.29763C18.577 3.11102 18.8289 3.00428 19.0928 2.99998ZM4.78027 9.99998C5.09105 10.0038 5.39528 10.0899 5.66199 10.2495C4.69674 10.6646 3.8031 11.2295 3.0141 11.9234C3.0101 11.8755 3 11.8284 3 11.7802C3.0006 11.3083 3.18836 10.8558 3.5221 10.5221C3.85583 10.1883 4.3083 10.0006 4.78027 9.99998ZM12 21C7.12109 21 3 18.71 3 16C3 13.29 7.12109 11 12 11C16.8789 11 21 13.29 21 16C21 18.71 16.8789 21 12 21ZM20.9859 11.9234C20.1969 11.2295 19.3033 10.6646 18.338 10.2495C18.6047 10.0899 18.9089 10.0038 19.2197 9.99998C19.6917 10.0006 20.1442 10.1883 20.4779 10.5221C20.8116 10.8558 20.9994 11.3083 21 11.7802C21 11.8283 20.9899 11.8756 20.9859 11.9234Z"
        fill={color}
      />
    </svg>
  );
};

export const ReportIcon = ({ color }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 12H8C7.73478 12 7.48043 12.1054 7.29289 12.2929C7.10536 12.4804 7 12.7348 7 13C7 13.2652 7.10536 13.5196 7.29289 13.7071C7.48043 13.8946 7.73478 14 8 14H14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12ZM19.41 19L20.71 17.71C20.8983 17.5217 21.0041 17.2663 21.0041 17C21.0041 16.7337 20.8983 16.4783 20.71 16.29C20.5217 16.1017 20.2663 15.9959 20 15.9959C19.7337 15.9959 19.4783 16.1017 19.29 16.29L18 17.59L16.71 16.29C16.5217 16.1017 16.2663 15.9959 16 15.9959C15.7337 15.9959 15.4783 16.1017 15.29 16.29C15.1017 16.4783 14.9959 16.7337 14.9959 17C14.9959 17.2663 15.1017 17.5217 15.29 17.71L16.59 19L15.29 20.29C15.1963 20.383 15.1219 20.4936 15.0711 20.6154C15.0203 20.7373 14.9942 20.868 14.9942 21C14.9942 21.132 15.0203 21.2627 15.0711 21.3846C15.1219 21.5064 15.1963 21.617 15.29 21.71C15.383 21.8037 15.4936 21.8781 15.6154 21.9289C15.7373 21.9797 15.868 22.0058 16 22.0058C16.132 22.0058 16.2627 21.9797 16.3846 21.9289C16.5064 21.8781 16.617 21.8037 16.71 21.71L18 20.41L19.29 21.71C19.383 21.8037 19.4936 21.8781 19.6154 21.9289C19.7373 21.9797 19.868 22.0058 20 22.0058C20.132 22.0058 20.2627 21.9797 20.3846 21.9289C20.5064 21.8781 20.617 21.8037 20.71 21.71C20.8037 21.617 20.8781 21.5064 20.9289 21.3846C20.9797 21.2627 21.0058 21.132 21.0058 21C21.0058 20.868 20.9797 20.7373 20.9289 20.6154C20.8781 20.4936 20.8037 20.383 20.71 20.29L19.41 19ZM12 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H11V7C11 7.79565 11.3161 8.55871 11.8787 9.12132C12.4413 9.68393 13.2044 10 14 10H17V13C17 13.2652 17.1054 13.5196 17.2929 13.7071C17.4804 13.8946 17.7348 14 18 14C18.2652 14 18.5196 13.8946 18.7071 13.7071C18.8946 13.5196 19 13.2652 19 13V9C19 9 19 9 19 8.94C18.9896 8.84813 18.9695 8.75763 18.94 8.67V8.58C18.8919 8.47718 18.8278 8.38267 18.75 8.3L12.75 2.3C12.6673 2.22222 12.5728 2.15808 12.47 2.11C12.4369 2.10421 12.4031 2.10421 12.37 2.11C12.2728 2.058 12.1683 2.02092 12.06 2H6C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H12C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21C13 20.7348 12.8946 20.4804 12.7071 20.2929C12.5196 20.1054 12.2652 20 12 20ZM13 5.41L15.59 8H14C13.7348 8 13.4804 7.89464 13.2929 7.70711C13.1054 7.51957 13 7.26522 13 7V5.41ZM8 8C7.73478 8 7.48043 8.10536 7.29289 8.29289C7.10536 8.48043 7 8.73478 7 9C7 9.26522 7.10536 9.51957 7.29289 9.70711C7.48043 9.89464 7.73478 10 8 10H9C9.26522 10 9.51957 9.89464 9.70711 9.70711C9.89464 9.51957 10 9.26522 10 9C10 8.73478 9.89464 8.48043 9.70711 8.29289C9.51957 8.10536 9.26522 8 9 8H8ZM12 16H8C7.73478 16 7.48043 16.1054 7.29289 16.2929C7.10536 16.4804 7 16.7348 7 17C7 17.2652 7.10536 17.5196 7.29289 17.7071C7.48043 17.8946 7.73478 18 8 18H12C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17C13 16.7348 12.8946 16.4804 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16Z"
        fill={color}
      />
    </svg>
  );
};

export const BrandingImage = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100.333}
      height={30.667}
      viewBox="0 0 232 65"
    >
      <path
        d="M123.2 3c-7.3 5.2-17.9 20.3-26.5 37.6C93.2 47.5 86.4 55 83.6 55c-1 0-.4-1.7 1.9-5.6 3.8-6.3 5.3-13.3 3.6-17-.9-2-1.8-2.4-5.7-2.4-5.5 0-10.1 2.5-12.7 6.9-.9 1.6-2.6 3.3-3.6 3.6-1.1.3-2.8 2-3.8 3.8C60.5 48.9 50 60 48.4 60c-2.3 0-1.7-1.8 3.8-11.3 7.2-12.4 7-17.6-.5-17.7-3.5 0-6.3 1.4-10.4 5.3L38 39.4v-3c0-7.2-7.8-7.5-15.4-.5-2.6 2.4-2.8 2.4-2.2.5.5-1.7 0-2.7-2-4.3-3.1-2.4-6.4-2.8-6.4-.6 0 .8-2.8 7.1-6.2 13.9C.4 56.3-.3 58.3.6 60.7c1.7 5 3.8 3.9 8.6-4.4 2.7-4.6 7.2-10.4 11.1-14.1 10.3-9.8 10.9-8.3 3 7-3.8 7.4-4.4 9.1-3.6 11.5 1.8 5.2 4.4 4.1 8.8-3.9 4-7.2 15.9-20.8 18.3-20.8 2 0 1.4 2.2-3.3 11.9C41 53 39 57.8 39 58.6c0 2.6 3.8 5.4 7.4 5.4 2.6 0 4.5-1 8.5-4.6 4.4-4 5.1-4.3 5.1-2.4 0 1.1 1.1 3.2 2.5 4.5 3.3 3.4 8.4 3.3 12.3 0 1.7-1.4 3.8-2.5 4.8-2.5 1.1-.1 3.6-.7 5.7-1.4 3.5-1.3 3.7-1.2 3.7.6 0 3 1.9 5.8 3.9 5.8 1.3 0 2.6-1.9 4.5-6.3 3.9-9.2 19.6-25.9 19.6-20.8 0 .5-2 5.1-4.5 10.2-5.1 10.4-5.3 12.1-2.5 14.9 2.8 2.8 7 2.5 11.7-.9l3.9-2.8 1.7 2.8c2.6 4.6 7.2 4 13.6-1.7 4.2-3.7 5.1-4.2 5.1-2.6 0 1 .9 3.1 2.1 4.6 5.1 6.4 16.1.4 26.1-14.3 1-1.4 1.8-3 1.8-3.4 0-2.1-3.1.3-8.1 6.3-3 3.5-6.9 7.2-8.6 8.2-2.9 1.8-6.3 1.6-6.3-.3 0-.5 5-10.6 11.1-22.4l11-21.4 5.4-1.5c6.4-1.9 13.8-2.1 16.5-.4 2.4 1.5 3.4.6 2.5-2.1-.7-2.3-5.3-5.1-8.3-5.1-1 0-4.4.9-7.5 1.9l-5.7 2-2.9-3c-4-3.9-5.6-3.7-7 1.1-.9 3-2 4.4-3.9 5.1-5.6 2-10.2 4.2-10.2 4.9 0 .5 1.7.4 3.8-.1 2-.5 4.3-.9 5-.9 2.4 0-14.2 30-20.3 36.7-4.9 5.4-8.5 7.8-8.5 5.7 0-.8 4.9-10.4 8.4-16.4 1.4-2.5 2.6-5.3 2.6-6.2 0-1.8-4.8-6-6.2-5.6-.6.2-2.3 3.7-4 7.7-2.2 5.2-4.8 9.2-9.1 13.8-11 11.7-12.9 10.2-4.7-3.7 6.7-11.5 6.7-17-.3-17-3.6 0-6.3 1.4-10.6 5.4l-3.3 3.1 1.6-3.2c.9-1.7 4.9-5.6 8.9-8.6 14.6-11.1 20.8-22.9 13.8-26.6-2.8-1.6-3.3-1.4-7.9 1.9zm6.7 7.2c-3.4 4.9-9 11.2-12.8 14.4-3.3 2.8-3.4 2.8-2.1.4 3.5-6.8 10.4-16.1 13.3-17.9 3.9-2.5 4.6-1.2 1.6 3.1zM85.8 35.5c.5 3.6-2.1 10.2-5.9 15.5-2.5 3.4-3.3 3.9-4.5 3-3.5-3-.1-15.7 5.4-20 3.2-2.6 4.6-2.1 5 1.5zM73 59c-3.9 2.5-6.2.2-4.4-4.5.6-1.5 1-1.3 3.3.9 2.2 2.3 2.4 2.8 1.1 3.6z"
        fill={color}
      />
      <path
        d="M141.5 17c-.3.5.2 3.5 1.1 6.6 1.5 5.3 1.7 5.5 4.2 4.9 5.1-1.2 8.7-4 9-6.8.3-2.4 0-2.7-2.7-2.7-1.6 0-3.3.4-3.6 1-1 1.6-2.1 1.1-3.3-1.5-1.2-2.5-3.6-3.3-4.7-1.5zM214.9 24.9c-1.6 1.6-2.9 4-2.9 5.3 0 1.3-2 5.3-4.5 9-5 7.5-5.1 7.8-3.1 7.8.8 0 2.5-1.7 3.8-3.8l2.3-3.7.3 3.2c.8 7.9-3.6 15.8-9.4 16.9l-3.6.7 2.1 2.1c3 3 9.7 2.6 15.9-1 7.5-4.3 17.8-16.1 15.8-18.1-.4-.4-3.2 2.1-6.2 5.5-3.1 3.4-5.9 6.2-6.2 6.2-.4 0-.7-1.2-.8-2.8 0-1.5-.4-5.9-.9-9.8l-.8-7 4.9-4.3 4.9-4.2-3-2.4c-3.9-3.2-5-3.1-8.6.4z"
        fill={color}
      />
    </svg>
  );
};
export function MIcon({ color, className }: Props) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1000.000000pt"
      height="520.000000pt"
      viewBox="0 0 125.000000 65.000000"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <g
        transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M226 605 c-4 -20 -57 -135 -117 -258 -99 -197 -110 -226 -106 -261 7
-50 49 -96 74 -80 10 6 49 65 88 132 77 132 167 245 260 324 64 54 101 75 112
65 10 -10 -31 -104 -110 -256 -74 -142 -82 -174 -52 -231 18 -34 64 -52 77
-29 5 8 40 68 79 133 77 131 141 216 216 287 76 72 113 99 135 99 30 0 20 -28
-73 -215 -80 -161 -89 -196 -69 -249 12 -34 66 -66 109 -66 58 0 116 37 203
129 96 101 192 235 184 256 -9 24 -26 18 -59 -22 -160 -185 -257 -283 -282
-283 -41 0 -29 36 69 205 81 140 109 218 96 266 -16 54 -37 69 -97 69 -78 0
-117 -21 -201 -107 -48 -50 -71 -68 -66 -52 5 13 9 44 9 68 -1 61 -36 91 -108
91 -63 0 -104 -23 -184 -101 l-55 -54 16 38 c20 49 11 68 -52 108 -64 40 -88
39 -96 -6z"
        />
      </g>
    </svg>
  );
}

export const VercelIcon = ({ color }: Props) => {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 282.72 64"
      width={80}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5zM36.95 0 73.9 64H0zm92.38 5-27.71 48L73.91 5H84.3l17.32 30 17.32-30zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
        fill={color}
      />
    </svg>
  );
};

export const NextJsIcon = ({ color }: Props) => {
  return (
    <svg
      height={24}
      viewBox="0.5 -0.2 1023 1024.1"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M478.5.6c-2.2.2-9.2.9-15.5 1.4C317.7 15.1 181.6 93.5 95.4 214c-48 67-78.7 143-90.3 223.5C1 465.6.5 473.9.5 512s.5 46.4 4.6 74.5C32.9 778.6 169.6 940 355 999.8c33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5L487 587.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5C991.1 245.4 854.4 84 669 24.2 636.3 13.6 601.5 6.3 562.5 1.9c-9.6-1-75.7-2.1-84-1.3zM687.9 310c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6V457.2c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"
        fill={color}
      />
      <path
        fill={color}
        d="M784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"
      />
    </svg>
  );
};

export const TailwindIcon = ({ color }: Props) => {
  return (
    <svg
      height={30}
      preserveAspectRatio="xMidYMid"
      width={30}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 153.6"
    >
      <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
        <stop offset={0} stopColor="#2298bd" />
        <stop offset={1} stopColor="#0ed7b5" />
      </linearGradient>
      <path
        d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
        fill="url(#a)"
      />
    </svg>
  );
};
export const Check = ({ color, size }: SvgProps) => (
  <svg
    width={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    height={size === "xsm" ? 14 : size === "sm" ? 18 : 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 10.3L11.4 15.1C11 15.5 10.4 15.5 10 15.1L7.8 12.9C7.4 12.5 7.4 11.9 7.8 11.5C8.2 11.1 8.8 11.1 9.2 11.5L10.7 13L14.8 8.9C15.2 8.5 15.8 8.5 16.2 8.9C16.6 9.3 16.6 9.9 16.2 10.3Z"
      fill={color}
    />
  </svg>
);
