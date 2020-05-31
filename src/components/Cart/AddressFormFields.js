import React from "react";
import {
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { InputIconBox } from "./components";

const TypeSelect = ({ name, value, label, options, emptyOption, onChange }) => (
  <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select name={name} value={value} onChange={onChange}>
      {options.map(({ value, content }) => (
        <MenuItem value={value} key={value}>
          {content}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const AddressFormFields = ({ inputs }) =>
  inputs.map(
    ({ icon, label, name, value, note, options, onChange, onBlur }) => (
      <Grid container key={name}>
        <Grid item xs={1}>
          <InputIconBox>{icon}</InputIconBox>
        </Grid>

        <Grid item xs={11}>
          {options ? (
            <TypeSelect
              name={name}
              value={value}
              label={label}
              options={options}
              onChange={onChange}
            />
          ) : (
            <TextField
              fullWidth
              name={name}
              value={value}
              placeholder={label}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="caption" align="center" display="block">
            {note}
          </Typography>
        </Grid>
      </Grid>
    )
  );

export default AddressFormFields;
