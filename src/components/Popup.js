import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import useStyles from "./Styles";

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
      <h2 id="simple-modal-title">Error</h2>
      <p id="simple-modal-description">{props.errorMsg}</p>
    </div>
  );

  // Only show popup when an error message exists or a new one appears
  useEffect(() => {
    if (props.errorMsg) {
      handleOpen();
    }
  }, [props.errorMsg, props.errorCount]);

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
