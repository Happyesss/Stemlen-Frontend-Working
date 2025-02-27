import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const CompanyCard = (props: any) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../../assets/Icons/${props.name}.png`);
        setImageSrc(image.default);
      } catch (error) {
        console.error("Error loading image: ", error);
      }
    };
    loadImage();
  }, [props.company]);

  return (
    <div>
      <div className="flex justify-between bg-cape-cod-900 items-center rounded-lg p-2">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-cape-cod-800 rounded-md">
            {imageSrc && (
              <img className="h-7" src={imageSrc} alt={props.name} />
            )}
          </div>
          <div>
            <div className="font-semibold">{props.name}</div>
            <div className="text-sm text-cape-cod-300">
              {props.employees} Employees
            </div>
          </div>
        </div>
        <ActionIcon color="blue" variant="subtle">
          <IconExternalLink style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ActionIcon>
      </div>
    </div>
  );
};

export default CompanyCard;
