import { motion, AnimatePresence } from "framer-motion";

export const ImageModal=({ isOpen, onClose, image }: { isOpen: boolean; onClose: () => void; image: string | any })=> {
  if (!image || image === "") return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`bg-white dark:bg-gray-800 rounded shadow-2xl max-w-sm md:max-w-3xl w-full  relative`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // prevent closing on modal click
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-bold"
              onClick={onClose}
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-xl ms-2 mt-2 font-bold text-[#194062] dark:text-white mb-4">
              { image.name || "Image"}
            </h2>

            {/* image */}
            {(image) && (
              <div className="w-full max-h-[600px] border border-gray-200 dark:border-gray-600  overflow-y-auto">
                <img
                  src={image.image || image}
                  className={`w-full ${image.image ? "md:w-[50%]" : ""}  h-full object-cover object-center mx-auto`}
                  title={image.name || image}
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

