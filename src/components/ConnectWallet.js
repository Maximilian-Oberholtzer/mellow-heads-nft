import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

function ConnectWallet(props) {

    console.log(props);

    return (
            <div>
            <button
                onClick={(e) => {
                e.preventDefault();
                props.dispatch(connect());
                props.getData();
                console.log(props.blockchain.account);
                }}
            >
                Connect Wallet
            </button>
            {props.blockchain.errorMsg}
            {console.log(props.blockchain)}
            </div>
        );
    }

export default ConnectWallet;
