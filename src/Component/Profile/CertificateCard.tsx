import { ActionIcon } from "@mantine/core"
import { IconTrash } from "@tabler/icons-react"
import { formatDate } from "../../Services/Utilities"
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";

const CertificateCard = (props:any) => {
    const dispatch = useDispatch();
    const profile = useSelector((state: any) => state.profile);
    const handleDelete = () => {
        let certi = [...profile.certifications];
        certi.splice(props.index, 1);
        let updatedProfile = { ...profile, certifications: certi };
        dispatch(changeProfile(updatedProfile));
        successNotification('Certificate Deleted Successfully', 'Success');
    }
    return (
        <div>
        <div className="flex justify-between">
            <div className="flex gap-2 items-center mb-4">
                <div className="p-2 bg-cape-cod-800 rounded-md">
                    <img className="h-7" src={require(`../../assets/Icons/${props.issuer}.png`)} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-sm text-cape-cod-300">
                        {props.issuer}
                    </div>
                </div>
            </div>
            <div className="flex gap-2 ">
            <div className="text-sm text-cape-cod-300 flex flex-col items-end">
                        <div>Issued {formatDate(props.issueDate)}</div>
                        <div>ID: {props.certificateID}</div>
                    </div>
                    {props.edit&&<ActionIcon onClick={handleDelete} variant="subtle" radius="lg" color="red.8" size="lg"  >
                        <IconTrash className="h-4/5 w-4/5" stroke={1.5} />
                    </ActionIcon>}
                    </div>
        </div>
        </div>

    )
}

export default CertificateCard