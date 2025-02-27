import { companyData } from "../../assets/Data/Company";

const CompanyAbout = () => {
  const company: { [key: string]: any } = companyData;

  return (
    <div className="flex flex-col gap-5 mt-5">
      {Object.keys(company).map((key, index) => 
        key !== "Name" && (
          <div key={index}>
            <div className="text-xl mb-3 font-semibold">{key === "Specialties" ? "Specialities" : key}</div>
            {key !== "Website" && (
              <div className="text-sm text-shaft-300 text-justify">
                {Array.isArray(company[key])
                  ? company[key].map((item: string, idx: number) => (
                      <span key={idx}>
                        {idx > 0 && " • "}
                        {item}
                      </span>
                    ))
                  : company[key]}
              </div>
            )}
            {key === "Website" && (
              <a
                href={company[key]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-bright-sun-400 text-justify"
              >
                {company[key]}
              </a>
            )}
          </div>
        ) 
      )}
    </div>
  );
};

export default CompanyAbout;
