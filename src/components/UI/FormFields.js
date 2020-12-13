import React from "react";
import styled from "styled-components";
import {
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel
} from "@material-ui/core";
import { golden } from "../../theme";

const InputIconBox = styled.div`
  color: ${golden};
`;

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

const TypeSwitch = ({ name,label, checked, onChange }) => (
  <FormControlLabel
    control={
      <Switch
        name={name}
        size="small"
        checked={checked}
        onChange={onChange}
      />
    }
    label={label}
  />
);

const FormFields = ({ inputs }) =>
  inputs.map(
    ({ type, icon, label, name, value, note, checked, options, onChange, onBlur }) => (
      <Grid container key={name}>
        <Grid item xs={1}>
          <InputIconBox>{icon}</InputIconBox>
        </Grid>

        <Grid item xs={11}>
          {(checked !== undefined) && (
            <TypeSwitch
              name={name}
              label={label}
              checked={checked}
              onChange={onChange}
            />
          )}
          {options && (
            <TypeSelect
              name={name}
              value={value}
              label={label}
              options={options}
              onChange={onChange}
            />
          )}
          { !type && !options && (checked === undefined) && (
            <TextField
              fullWidth
              name={name}
              value={value}
              placeholder={label}
              onChange={onChange}
              onBlur={onBlur}
            />
          )
          }
        </Grid>

        <Grid item xs={12}>
          <Typography variant="caption" align="center" display="block">
            {note}
          </Typography>
        </Grid>
      </Grid>
    )
  );

export default FormFields;
