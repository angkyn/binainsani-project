import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionTitle } from "@/components/section-title";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Lala",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et nemo provident adipisci expedita culpa nulla nihil, placeat id, amet recusandae voluptatem animi.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Lili",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt autem voluptatum ratione officia ut harum",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Lali",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, molestiae nisi delectus aperiam eaque sit in voluptatum quasi expedita impedit eius iste. Aliquid, deleniti dolore!",
  },
];

export const Extracurricular = () => {
 return (
   <section className="py-12 xl:py-24 h-auto">
     <div className="container mx-auto">
       <SectionTitle title="Our Services" className="mx-auto mb-8 xl:mb-16" />
       {/* grid items */}
       <div
         className="
      pt-7 grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8"
       >
         {servicesData.map((item, index) => {
           return (
             <Card
               className="flex flex-col items-center relative w-full max-w-[424px] h-auto"
               key={index}
             >
               <CardHeader className="text-primary absolute -top-16">
                 <div className="w-[140px] h-[80px] bg-white flex justify-center items-center">
                   {item.icon}
                 </div>
               </CardHeader>
               <CardContent className="text-center">
                 <CardTitle className="mt-12 mb-4 text-xl">
                   {item.title}
                 </CardTitle>
                 <CardDescription className="text-lg">
                   {item.description}
                 </CardDescription>
               </CardContent>
             </Card>
           );
         })}
       </div>
     </div>
   </section>
 );
};

