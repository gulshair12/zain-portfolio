import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  tags?: string[];
}

export function ProjectCard({ img, title, desc, tags = [] }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card color="transparent" shadow={false} className="group">
        <CardHeader
          floated={false}
          className="mx-0 mt-0 mb-6 h-48 overflow-hidden rounded-lg"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img}
              alt={title}
              width={900}
              height={900}
              className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-110"
            />
          </motion.div>
        </CardHeader>
        <CardBody className="p-0">
          <Typography variant="h5" className="mb-2 font-semibold text-gray-900">
            {title}
          </Typography>
          <Typography className="mb-4 font-normal !text-gray-600 leading-relaxed">
            {desc}
          </Typography>
          {tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <Button
            variant="outlined"
            size="sm"
            color="gray"
            className="border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white transition-colors"
          >
            View Project
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
