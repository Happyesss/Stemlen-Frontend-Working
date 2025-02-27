// import { Carousel } from "@mantine/carousel"
// import { jobCategory } from "../../assets/Data/Data"

// const JobCategory = () => {
//     return (
//         <div className="mt-20 pb-5">
//             <div className="text-4xl text-center font-semibold mb-3 text-cape-cod-100">
//                 Browse <span className="text-blue-400">job</span> Category
//             </div>
//             <p className="text-lg mb-10 mx-auto text-cape-cod-300 text-center w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos incidunt.</p>

//             <Carousel slideSize="22%" slideGap="md" loop>
//                 {
//                     jobCategory.map((category) => <Carousel.Slide key={category.name}>
//                         <div className="flex flex-col items-center w-64 gap-2 border border-blue-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-blue-300 ">
//                             <div className="p-2 bg-blue-300 rounded-full">
//                                 <img className="h-8 w-8" src={require(`../../assets/Category/${category.name}.png`)} alt="" />
//                             </div>
//                             <div className="text-cape-cod-100 text-xl font-semibold">{category.name}</div>
//                             <div className="text-sm text-cape-cod-300 text-center">{category.desc}</div>
//                             <div className="text-blue-300 text-lg">{category.jobs} jobs available</div>
//                         </div>
                        
//                     </Carousel.Slide>)
//                 }


//             </Carousel>
//         </div>

//     )
// }

// export default JobCategory

import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../assets/Data/Data";

const colors = [
  "border-red-400 shadow-red-300",
  "border-green-400 shadow-green-300",
  "border-yellow-400 shadow-yellow-300",
  "border-purple-400 shadow-purple-300",
  "border-indigo-400 shadow-indigo-300",
  "border-pink-400 shadow-pink-300",
];

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-cape-cod-100">
        Browse <span className="text-blue-400">job</span> Category
      </div>
      <p className="text-lg mb-10 mx-auto text-cape-cod-300 text-center w-1/2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos incidunt.
      </p>

      <Carousel slideSize="22%" slideGap="md" loop>
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={category.name}>
            <div
              className={`flex flex-col items-center w-64 gap-2 border p-5 rounded-xl hover:cursor-pointer 
                hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out 
                ${colors[index % colors.length]}`}
            >
              <div className="p-2 rounded-full bg-cape-cod-100">
                <img
                  className="h-8 w-8"
                  src={require(`../../assets/Category/${category.name}.png`)}
                  alt={category.name}
                />
              </div>
              <div className="text-blue-300 text-xl font-semibold">{category.name}</div>
              <div className="text-sm text-cape-cod-300 text-center">{category.desc}</div>
              <div className="text-lg text-blue-300">{category.jobs} jobs available</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
