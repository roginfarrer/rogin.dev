import { definePattern } from "@pandacss/dev";

export const proseLink = definePattern({
  description: "Link styles within prose.",
  transform() {
    return {
      color: "{colors.accent11}",
      textDecoration: "underline",
      textDecorationSkipInk: "all",
      textDecorationColor: "{colors.accent6}",
      textDecorationThickness: "0.3ex",
      textUnderlineOffset: "0.3ex",
      _hover: {
        textDecorationThickness: "0.35ex",
        textDecorationColor: "{colors.accent7}",
      },
    };
  },
});
