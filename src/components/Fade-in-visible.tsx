// import React, { ReactNode } from 'react';
// import { motion, useAnimation } from 'motion/react';
// import { useInView } from 'react-intersection-observer';

// const FadeInWhenVisible = ({ children }: { children: ReactNode }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();

//   React.useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       transition={{ duration: 1, ease: 'easeOut' }}
//       variants={{
//         visible: { opacity: 1, y: 0},
//         hidden: { opacity: 0,  y: 50}
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default FadeInWhenVisible;
