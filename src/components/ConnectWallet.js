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
                dispatch(connect());
                getData();
                console.log(blockchain.account);
                }}
            >
                Connect Wallet
            </button>
            {blockchain.errorMsg}
            {console.log(blockchain)}
            </div>
        );
    }

export default ConnectWallet;
