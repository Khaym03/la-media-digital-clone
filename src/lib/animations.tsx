import { Transition, MotionProps } from 'framer-motion'

interface FloatAnimationProps {
  animate: MotionProps['animate']
  transition: Transition;
}

export const floatAnimation = (): FloatAnimationProps => ({
  animate: { translateY: [-20, 20] },
  transition: {
    repeat: Infinity,
    repeatType: 'mirror',
    duration: 5,
    ease: 'easeInOut'
  }
})
