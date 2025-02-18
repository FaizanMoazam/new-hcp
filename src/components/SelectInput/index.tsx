import React from "react";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import Loader from "../Spinner/index";

interface SelectInputProps {
  name: string;
  value: string;
  onChange: any;
  onBlur?: (event: React.FocusEvent<{ value: unknown }>) => void;
  error?: boolean;
  label: string;
  options: any[];
  children?: any;
  onMenuItemClick?: any;
  styles?: any;
  fetching?: any;
  data: any;
  disabled?: boolean;
  any?: boolean;
  variant?: "standard" | "filled" | "outlined";
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  value,
  onChange,
  onBlur,
  error,
  label,
  options,
  children,
  onMenuItemClick,
  styles,
  fetching,
  data,
  disabled,
  any,
}) => {
  let labelName = label;

  return (
    <>
      <FormControl sx={styles}>
        <Select
          name={name}
          value={value || ""}
          onChange={onChange}
          onBlur={onBlur}
          error={!disabled && error}
          disabled={disabled}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            fontWeight: "400",
            borderRadius: "0",
            background: "#fff",
            height: "41px",
            width: "100%",
            boxShadow: "inset 0px 0px 5px rgba(0,0,0,0.35)",
            border: error ? "1px solid #FF0000" : "none",

            color: (theme: any) => theme.palette.text.primary,
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
            },

            // disabled
            "& .Mui-disabled": {
              color: (theme: any) => theme.palette.text.disabled,
            },

            // target the placeholder
            "& .MuiInputBase-input::placeholder": {
              fontSize: "14px",
            },

            "& fieldset": { border: 'none' },
          }}
        >
          <MenuItem value="">
            <Box sx={{ font: "inherit", color: "#b5b5bd", fontSize: "14px" }}>
              {labelName}
            </Box>
          </MenuItem>
          {any && (
            <MenuItem
              value="Any"
              onClick={
                onMenuItemClick
                  ? () => onMenuItemClick({ value: "Any", label: "Any" })
                  : undefined
              }
            >
              -- Any --
            </MenuItem>
          )}
          {fetching ? (
            <Loader />
          ) : data?.length > 0 ? (
            options?.map((option: any, index: any) => (
              <MenuItem
                key={index}
                value={option.value}
                disabled={option.disabled}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                onClick={
                  onMenuItemClick ? () => onMenuItemClick(option) : undefined
                }
              >
                {option.label}
              </MenuItem>
            ))
          ) : (
            <MenuItem>No Record Found</MenuItem>
          )}
        </Select>
        {!disabled && children}
      </FormControl>
    </>
  );
};

export default SelectInput;
