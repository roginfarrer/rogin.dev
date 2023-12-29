import { keyframes, style } from "@vanilla-extract/css";

const moveInAnimation = keyframes({
  '0%': {
    opacity: '0'
  },
  '100%': {
    opacity: '1'
  }
})

const moveOutAnimation = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0
  }
})

export const moveIn = style({
  animation: `${moveInAnimation} 1s ease`
})

export const moveOut = style({
  animation: `${moveOutAnimation} 1s ease`
})
