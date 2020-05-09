import React, { Fragment } from "react";
import { InputIconBox } from "./components";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TextField,
  Switch,
  TableHead
} from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import Mail from "@material-ui/icons/Mail";
import Phone from "@material-ui/icons/Phone";
import Person from "@material-ui/icons/Person";
import Explore from "@material-ui/icons/Explore";
import ChatBubble from "@material-ui/icons/ChatBubble";
import { DialogPaper } from "../UI/FullscreenDialog/components";

const TextFieldRows = ({ recipient, handleChange, inputs }) =>
  inputs.map(({ icon, label, name, note }) => (
    <Fragment key={name}>
      <TableRow>
        <TableCell padding="none">
          <InputIconBox>{icon}</InputIconBox>
        </TableCell>
        <TableCell padding="none">
          <TextField
            fullWidth
            name={name}
            value={recipient[name]}
            placeholder={label}
            onChange={handleChange}
          />
        </TableCell>
      </TableRow>

      {note && (
        <TableRow>
          <TableCell colSpan={99} align="center">
            <Typography variant="caption">{note}</Typography>
          </TableCell>
        </TableRow>
      )}
    </Fragment>
  ));

const SwitchRows = ({ recipient, handleChange, inputs }) =>
  inputs.map(({ label, name }) => (
    <TableRow key={name} hover>
      <TableCell padding="default">
        <Typography variant="body2">{label}</Typography>
      </TableCell>
      <TableCell padding="none">
        <Switch
          name={name}
          size="small"
          checked={recipient[name]}
          onChange={handleChange}
        />
      </TableCell>
    </TableRow>
  ));

const Recipient = ({ storeAndActions }) => {
  const { order } = storeAndActions.store;

  const handleChange = ({ target }) => {
    const { name, value, checked } = target;

    storeAndActions.orderSetRecipient({
      ...order.recipient,
      [name]: target.type === "text" ? value : checked
    });
  };

  return (
    <Fragment>
      <DialogPaper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={99}>
                <Typography>Datos para el envío</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TextFieldRows
              recipient={order.recipient}
              handleChange={handleChange}
              inputs={[
                { name: "name", icon: <Person />, label: "Nombre" },
                { name: "address", icon: <Home />, label: "Dirección" },
                {
                  name: "locality",
                  icon: <Explore />,
                  label: "Barrio, conjunto"
                },
                {
                  name: "email",
                  icon: <Mail />,
                  label: "Email",
                  note: "No enviamos Spam ni damos tu correo a terceros."
                },
                {
                  name: "phone",
                  icon: <Phone />,
                  label: "Celular",
                  note: "Te avisamos por WhatsApp sobre el estado de tu órden."
                },
                {
                  name: "notes",
                  icon: <ChatBubble />,
                  label: "Observaciones",
                  note: "¿Algo más para que tomemos en cuenta?"
                }
              ]}
            />
          </TableBody>
        </Table>
      </DialogPaper>

      <DialogPaper>
        <Table size="small">
          <TableBody>
            <SwitchRows
              recipient={order.recipient}
              handleChange={handleChange}
              inputs={[
                { name: "addChopsticks", label: "Enviar Palillos" },
                { name: "addTeriyaki", label: "Enviar Teriyaki" },
                { name: "addWasabi", label: "Enviar Jengibre" },
                { name: "addGinger", label: "Enviar Wasabi" },
                { name: "addSoy", label: "Enviar Soya" }
              ]}
            />
          </TableBody>
        </Table>
      </DialogPaper>
    </Fragment>
  );
};

export default Recipient;
