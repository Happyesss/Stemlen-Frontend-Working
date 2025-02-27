import { Avatar, Divider, Tabs } from "@mantine/core";
import {  IconMapPin } from "@tabler/icons-react";
import CompanyAbout from "./CompanyAbout";
import CompanyOpenings from "./CompanyOpenings";

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
        <img
          className="rounded-t-2xl w-full h-64 object-cover"
          src={require(`../../assets/images/bgimg.jpg`)}
          alt=""
        />
        <img
          className="w-36 h-36 rounded-3xl -bottom-1/4 absolute left-5 border-cape-cod-950 border-8 bg-cape-cod-950"
          src={require(`../../assets/Icons/Google.png`)}
          alt=""
        />
      </div>
      <div className="px-3 mt-20">
        <div className="text-3xl flex font-semibold justify-between">
          Google
          <Avatar.Group>
            <Avatar src="image.png" />
            <Avatar src="image.png" />
            <Avatar src="image.png" />
            <Avatar>+10k</Avatar>
          </Avatar.Group>
        </div>
        <div className="flex gap-1 text-lg text-cape-cod-300 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} />location
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
          <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-blue-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="opening">Opening</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about">
            <CompanyAbout />
          </Tabs.Panel>
          <Tabs.Panel value="opening">
            <CompanyOpenings />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Company;
