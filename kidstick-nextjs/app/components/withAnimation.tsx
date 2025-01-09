import { motion } from 'framer-motion';
import React from 'react';

const withAnimation = (Component: React.ComponentType) => {
  return (props: any) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Component {...props} />
    </motion.div>
  );
};

export default withAnimation;