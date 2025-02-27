import { ActionIcon } from "@mantine/core"
import { IconCancel, IconPencil, IconPlus } from "@tabler/icons-react"
import ExperienceCard from "./ExperienceCard"
import ExpInput from "./ExpInput"
import { useState } from "react"
import { useSelector } from "react-redux"

const Experience = () => {
    const profile = useSelector((state: any) => state.profile);
    const [edit, setEdit] = useState(false);
    const [addExp, setAddExp] = useState(false);
    const handleEdit = () => {
        setEdit(!edit);
    }
    
  return (
    <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">Experience
          <div className="flex gap-3">
            <ActionIcon variant="subtle" radius="lg" color="blue.4" size="lg" onClick={() => setAddExp(true)} >
              < IconPlus className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>

            <ActionIcon variant="subtle" radius="lg" color={edit?"red.8":"blue.4"} size="lg" onClick={handleEdit} >
              {edit ? <IconCancel className="h-4/5 w-4/5" /> : < IconPencil className="h-4/5 w-4/5" stroke={1.5} />}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">{
          profile?.experiences?.map((exp: any, index: number) => <ExperienceCard key={index} index={index} {...exp} edit={edit} />)
        }
          {addExp && <ExpInput add setEdit={setAddExp} />}
        </div>
      </div>
  )
}

export default Experience