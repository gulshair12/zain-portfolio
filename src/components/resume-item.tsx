import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <motion.div
      className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-300"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg bg-gray-900 text-white shadow-none">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </Card>
      <Typography className="w-full font-normal !text-gray-700">
        {children}
      </Typography>
    </motion.div>
  );
}

export default ResumeItem;
