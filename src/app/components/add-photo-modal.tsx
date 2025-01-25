"use client";

import { motion } from "motion/react";
import { IoMdClose } from "react-icons/io";

interface Props {
  image: string;
  onClose: () => void;
}

const AddPhotoModal: React.FC<Props> = ({ image, onClose }) => {
  return (
    <motion.div className="fixed inset-0 w-full h-full z-50 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="bg-black/70 backdrop-blur absolute inset-0 h-full w-full"
      />
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: 100 }}
        onClick={onClose}
        className="absolute top-2 right-2 z-50 bg-white p-2 rounded-full text-black text-lg"
      >
        <IoMdClose />
      </motion.button>
      <div className="p-4 w-full space-y-3 max-w-md absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.img
          layout
          layoutId={image}
          src={image}
          alt=""
          className="w-full aspect-auto object-cover rounded-md"
        />
        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-sm text-center"
          >
            Lorem ipsum dolor sit.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default AddPhotoModal;
