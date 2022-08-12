import {connect} from "@tableland/sdk"
import waitForTx from "../utils/waitForTx";
import {useEffect, useState} from "react";
import {sequence} from "0xsequence"

const useCreateTable = () => {
    const [tableland, setTableland] = useState(null)

    useEffect(() => {
        const connectTableLand = async () => {
            const wallet = sequence.getWallet()
            const signer = await wallet.getSigner()
            console.log("Signer is",signer)
            const tableland = await connect({
                network: "testnet",
                chain: "polygon-mumbai",
                signer: signer
            })
            console.log("Tableland is", tableland)
            setTableland(tableland)
        }
        connectTableLand().then(() => console.log("Tableland set successfully!"))
    }, [])

    const mainSchema = `name text, id int, primary key (id)`;

    const createMainTable = async(prefix) => {
        const {name, txnHash} = await tableland.create(
            mainSchema,
            {
                prefix: prefix
            }
        )
        let isTableCreated = await waitForTx(tableland, txnHash)
        if(isTableCreated){
            console.log(`Table ${name} has been created at hash ${txnHash}`)
            return {
                tableName: name,
                hash: txnHash
            }
        } else {
            throw new Error(
                `Create table error could not get table`
            )
        }
    }

    return {
        createMainTable,
        tableland
    }
}

export default useCreateTable;