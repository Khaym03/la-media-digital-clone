import { Transition, MotionProps } from 'framer-motion'

interface FloatAnimationProps {
  animate: MotionProps['animate']
  transition: Transition;
}

export const floatAnimation = (duration?: number, range?: number): FloatAnimationProps => {
  if(!range) range = 20
  return ({
  
    animate: { translateY: [-range, range] },
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: duration ? duration : 5,
      ease: 'easeInOut'
    }
  })
}
