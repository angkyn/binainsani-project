import Image from "next/image";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Printer,
  Shell,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dot } from "@/components/dot";
import { SectionTitle } from "@/components/section-title";

const infoData = [
  {
    icon: <HomeIcon size={20} />,
    text: "Wonogiri, Central Java",
  },
  {
    icon: <Calendar size={20} />,
    text: "Est 2021",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 857 4261 3617",
  },
  {
    icon: <MailIcon size={20} />,
    text: "muh.angkyn@gmail.com",
  },
];

export const About = () => {
  return (
    <section className="py-12 xl:py-24 h-auto">
      <div className="container mx-auto">
        {/* section title */}
        <SectionTitle title="About Us" className="mx-auto mb-8 xl:mb-16" />
        {/* section content */}
        <div className="flex flex-col xl:flex-row h-[450px]">
          <div className="hidden xl:flex flex-1">
            <Image src="/about/about-us.svg" width={500} height={400} alt="" />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="about-us">
              <TabsList className="grid max-w-sm mx-auto xl:w-full grid-cols-3 h-14 rounded-full items-center bg-white border-2 mb-8">
                <TabsTrigger
                  className="rounded-full h-full text-base data-[state=active]:bg-primary data-[state=active]:text-white"
                  value="about-us"
                >
                  About Us
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-full h-full text-base data-[state=active]:bg-primary data-[state=active]:text-white"
                  value="vision"
                >
                  Vision
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-full h-full text-base data-[state=active]:bg-primary data-[state=active]:text-white"
                  value="mission"
                >
                  Mission
                </TabsTrigger>
              </TabsList>

              {/* about us */}
              <TabsContent value="about-us" className="h-full">
                <div className="text-center xl:text-left">
                  <h3 className="mx-auto mb-4 text-3xl font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <p className="mx-auto max-w-lg mb-4 xl:mx-0 xl:mb-8 font-light text-muted-foreground text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam vero magnam, earum ratione iusto nemo.
                  </p>
                  {/* about  us icon */}
                  <div className="grid gap-4 xl:grid-cols-2">
                    {infoData.map((item, index) => {
                      return (
                        <div
                          className="flex gap-x-4 items-center 
                         mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="vision">
                <div className="text-center xl:text-left">
                  <h3 className="mb-4 text-3xl font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <p className="max-w-xl mx-auto xl:mx-0 xl:mb-8 font-light text-muted-foreground text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam vero magnam, earum ratione iusto nemo.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="mission">
                <div className="text-center xl:text-left">
                  <h3 className="mb-4 text-3xl font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <p className="max-w-xl mx-auto xl:mx-0 xl:mb-8 font-light text-muted-foreground text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam vero magnam, earum ratione iusto nemo.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
