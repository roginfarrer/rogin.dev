import { vars } from "@/vars.css";
import { style } from "@vanilla-extract/css";

export const dialog = style({
  position: 'fixed',
  top: '100%',
  transform: 'translateY(-50%)',
  width: '100%',
  maxWidth: '100%',
  padding: 0,
  border: 0,
  borderRadius: `${vars.radii.xl} ${vars.radii.xl} 0 0`,
})

export const menuItem = style({
  ':first-of-type': {
    marginTop: vars.space[2]
  },
  ':last-of-type': {
    marginBottom: vars.space[2]
  },
  padding: vars.space[2],
  textAlign: 'center',
})
