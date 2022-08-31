import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-radius4",
  icbCircleBorder20: "rounded-radius20",
};
const variants = {
  OutlineLightblueA700:
    "bg-blue_50 border-bw05 border-light_blue_A700 border-solid text-light_blue_A700",
  OutlineGray200:
    "bg-white_A700 border border-gray_200 border-solid text-indigo_A200",
  OutlineBluegray900:
    "border border-bluegray_900 border-solid text-bluegray_900",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  OutlineRed700:
    "bg-deep_orange_50 border-bw05 border-red_700 border-solid text-red_700",
  OutlineLightgreenA700:
    "bg-light_green_50 border-bw05 border-light_green_A700 border-solid text-light_green_A700",
  OutlineOrange800:
    "bg-orange_50 border-bw05 border-orange_800 border-solid text-orange_800",
  OutlineGray700:
    "bg-light_green_50 border-bw05 border-gray_700 border-solid text-gray_900",
  OutlineGray202:
    "bg-gray_50 border-bw05 border-gray_202 border-solid text-bluegray_901",
  OutlineGray2021_2:
    "bg-white_A700 border-bw05 border-gray_202 border-solid text-bluegray_901",
  icbOutlineGray201: "bg-white_A700 border border-gray_201 border-solid",
  icbFillBluegray900: "bg-bluegray_900",
  icbFillAmber100: "bg-amber_100",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  lg: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  smIcn: "p-[3px]",
  mdIcn: "lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  lgIcn: "p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder4", "icbCircleBorder20"]),
  variant: PropTypes.oneOf([
    "OutlineLightblueA700",
    "OutlineGray200",
    "OutlineBluegray900",
    "FillBluegray900",
    "OutlineRed700",
    "OutlineLightgreenA700",
    "OutlineOrange800",
    "OutlineGray700",
    "OutlineGray202",
    "OutlineGray2021_2",
    "icbOutlineGray201",
    "icbFillBluegray900",
    "icbFillAmber100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "OutlineLightblueA700",
  size: "sm",
};

export { Button };
