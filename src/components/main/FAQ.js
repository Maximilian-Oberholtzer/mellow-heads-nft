import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./Styles";
import * as Scroll from "react-scroll";

function FAQ() {
  const classes = useStyles();

  return (
    <Scroll.Element id="FAQ" name="FAQ">
      <center>
        <Typography variant="h3" className={classes.accordianTitle}>
          F.A.Q.
        </Typography>
        <div className={classes.accordianRoot}>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.accordianText}>
                How can I connect to the Matic (Polygon) network on Metamask?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordianText}>
                You must add the Polygon Mainnet manually as a Custom RPC. Check
                out Polygon's documentation on how to connect for more
                assistance.{"  "}
                <a
                  href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/"
                  style={{ textDecoration: "none" }}
                  className={classes.navTextLink}
                >
                  {">"}Polygon Docs{"<"}
                </a>
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
                How can I get Matic tokens after connecting to the Polygon
                network?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordianText}>
                You must transfer Matic and Ethereum to your Metamask address on
                the Ethereum Mainnet and use the Polygon Bridge to convert your
                Matic to the Polygon Network.{"  "}
                <a
                  href="https://wallet.polygon.technology/"
                  style={{ textDecoration: "none" }}
                  className={classes.navTextLink}
                >
                  {">"}Polygon Bridge{"<"}
                </a>
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
                I just minted a Mellow Head NFT. Where can I view it?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordianText}>
                Check out the collections page or the Mellow Heads OpenSea
                marketplace to view your NFTs.
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
                How do I buy, sell or send my Mellow Heads?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordianText}>
                Go to the OpenSea Marketplace and you will have the ability to
                do all the above actions with your Mellow Heads.
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
                How do I know my Mellow Heads will be safe and secure?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordianText}>
                Each Mellow Head is stored as an ERC-721 token on the Polygon
                blockchain and the metadata is stored on IPFS.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </center>
    </Scroll.Element>
  );
}

export default FAQ;
