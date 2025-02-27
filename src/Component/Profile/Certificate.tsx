import { ActionIcon } from "@mantine/core"
import { IconCancel, IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react"
import CertificateCard from "./CertificateCard"
import CertificateInput from "./CertificateInput"
import { useState } from "react"
import { useSelector } from "react-redux"

const Certificate = () => {
    const [addCerti, setAddCerti] = useState(false);
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state: any) => state.profile);
    const handleEdit = (index: number) => {
        const newEdit = !edit;
        setEdit(newEdit);
    }
  return (
    <div className="px-3">
        <div className="text-2xl font-semibold flex justify-between pb-5">Certification
          <div className="flex gap-3">
            <ActionIcon variant="subtle" radius="lg" color="blue.4" size="lg" onClick={() => setAddCerti(true)} >
              < IconPlus className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>

            <ActionIcon variant="subtle" radius="lg" color={edit?"red.8":"blue.4"} size="lg" onClick={() => handleEdit(4)} >
              {edit ? <IconCancel className="h-4/5 w-4/5" /> : < IconPencil className="h-4/5 w-4/5" stroke={1.5} />}
            </ActionIcon>
          </div>
        </div>
        {profile?.certifications?.map((certi:any, index:number) => (
          <CertificateCard key={index} index={index} {...certi} edit={edit} />
        ))}
        {addCerti && <CertificateInput setEdit={setAddCerti} />}
      </div>
  )
}

export default Certificate