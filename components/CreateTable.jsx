import useCreateTable from "../hooks/useCreateTable";

export default function CreateTable(){
    const {createMainTable} = useCreateTable()
    const createTable = async () => {
        const {tableName} = await createMainTable("test_table")
        console.log(`Created table ${tableName}`)
    }

    return (
        <div>
            <button onClick={async () => await createTable()}>
                Create Table
            </button>
        </div>
    )
}