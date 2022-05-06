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
                How can I connect to the Polygon network on Metamask?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography className={classes.accordianText}>
                You must add the Polygon Mainnet manually as a Custom RPC. Check
                out Polygon's documentation on how to connect for more
                assistance.{"  "}
                <a
                  href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/"
                  target="_blank"
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
            <AccordionDetails className={classes.accordianDetails}>
              <Typography className={classes.accordianText}>
                You must transfer Matic and Ethereum to your Metamask address on
                the Ethereum Mainnet and use the Polygon Bridge to convert your
                Matic to the Polygon Network.{"  "}
                <a
                  href="https://wallet.polygon.technology/"
                  target="_blank"
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
            <AccordionDetails className={classes.accordianDetails}>
              <Typography className={classes.accordianText}>
                Check out the collection page or the Mellow Heads OpenSea
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
                How many Mellow Heads am I allowed to mint?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography className={classes.accordianText}>
                Each address is able to mint a maximum of 100 Mellow Heads.
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
            <AccordionDetails className={classes.accordianDetails}>
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
            <AccordionDetails className={classes.accordianDetails}>
              <Typography className={classes.accordianText}>
                Each Mellow Head is stored as an ERC-721 token on the Polygon
                blockchain and the metadata is hosted on IPFS to ensure they
                will never leave the internet.
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
                Is there a roadmap for Mellow Heads NFT?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography className={classes.accordianText}>
                There is no established roadmap or additional promises that will
                be made. If you enjoy the artwork and want to join the Mellow
                Heads community for a low cost then I encourage you to do so!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </center>
    </Scroll.Element>
  );
}

export default FAQ;
