import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card
        color="transparent"
        shadow={false}
        className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <CardBody className="text-center p-6">
          <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-gray-900 p-3 text-white">
            <Icon className="h-7 w-7" strokeWidth={1.5} />
          </div>
          <Typography variant="h5" className="mb-3 font-semibold text-gray-900">
            {title}
          </Typography>
          <Typography className="font-normal !text-gray-600 leading-relaxed">
            {children}
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default SkillCard;
