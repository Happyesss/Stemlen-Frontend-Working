import { formatDate } from "../../Services/Utilities"

const ExperienceCard = (props:any) => {
  return (
    <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-2 bg-cape-cod-800 rounded-md">
            <img className="h-7" src={require(`../../assets/Icons/${props.company}.png`)} alt="" />
            </div>
            <div>
              <div className="font-semibold">{props.title}</div>
              <div className="text-sm text-cape-cod-300">
                {props.company} &#x2022;  {props.location}
              </div>
            </div>
          </div>
          <div>{formatDate(props.startDate)} - {formatDate(props.endDate)} </div>
          </div>
          <div className="text-sm text-cape-cod-300 text-justify">
            {props.description}
            </div>
    </div>
  )
}

export default ExperienceCard