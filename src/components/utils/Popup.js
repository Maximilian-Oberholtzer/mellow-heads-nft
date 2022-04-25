import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import useStyles from "../main/Styles";
import { Typography } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Popup(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.popup}>
      <Typography className={classes.popupTitle}>{props.popupType}</Typography>
      <Typography>{props.popupMsg}</Typography>
    </div>
  );

  // Only show popup when an error message exists or a new one appears
  useEffect(() => {
    if (props.popupMsg) {
      handleOpen();
    }
  }, [props.popupType, props.popupMsg, props.popupCount]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default Popup;
