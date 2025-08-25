import { motion, AnimatePresence } from "framer-motion";

export const PolicyModal = ({ isOpen, onClose, policy }: { isOpen: boolean; onClose: () => void; policy: any }) => {
  if (!policy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-sm md:max-w-3xl w-full p-6 relative"
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
            <h2 className="text-2xl font-bold text-[#194062] dark:text-white mb-4">
              {policy.title}
            </h2>

            {/* Description */}
            {policy.description && (
              <p className="text-gray-600 dark:text-gray-300 text-base mb-6">
                {policy.description}
              </p>
            )}

            {/* PDF Viewer */}
            {/* {policy.pdfUrl && (
              <div className="w-full h-[600px] border border-gray-200 dark:border-gray-600 rounded-lg overflow-y-auto">
                <iframe
                  allowFullScreen={true}
                  src={policy.pdfUrl}
                  className="w-full h-full"
                  title={policy.title}
                />
              </div>
            )} */}
            {policy.pdfUrl && (
              <div className="w-full h-[600px] border border-gray-200 dark:border-gray-600 rounded-lg overflow-y-auto">
                
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

