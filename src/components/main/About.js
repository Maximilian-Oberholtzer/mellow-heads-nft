import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./Styles";
import * as Scroll from "react-scroll";

function About() {
  const classes = useStyles();

  return (
    <Scroll.Element id="About" name="About">
      <center>
        <Typography variant="h3" className={classes.accordianTitle}>
          About
        </Typography>
        <div className={classes.accordianRoot}>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.accordianText}>
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordianText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.accordianText}>
                Accordion 2
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordianText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.accordianText}>
                Accordion 3
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordianText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.accordianText}>
                Accordion 4
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordianText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.accordianText}>
                Accordion 5
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordianText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </center>
    </Scroll.Element>
  );
}

export default About;
