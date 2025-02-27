import { formatDate } from "../../Services/Utilities"

const CertiCard = (props:any) => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-cape-cod-800 rounded-md">
                <img className="h-7" src={require(`../../assets/Icons/${props.issuer}.png`)} alt="" />
                
                </div>
                <div>
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-sm text-cape-cod-300">
                        {props.issuer}
                    </div>
                </div>
            </div>
            <div className="text-sm text-cape-cod-300 flex flex-col items-end">
                        <div>Issued on {formatDate(props.issueDate)}</div>
                        <div>ID: {props.certificateID}</div>
                    </div>
        </div>

    )
}

export default CertiCard