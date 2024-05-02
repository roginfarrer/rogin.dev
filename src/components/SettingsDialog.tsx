import { IoClose } from "react-icons/io5";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { setupForm } from "./setupSettingsForm";
import { onMount } from "solid-js";

export function SettingsDialog(props: { children: any }) {
  let dialog: HTMLDialogElement;

  onMount(() => {
    // @ts-expect-error
    dialog.openModal = function openModal() {
      dialog.showModal();
      document.querySelector("body")!.style.setProperty("overflow", "hidden");
    };

    setupForm(dialog);
  });

  function handleDialogClick(event: Event) {
    event.stopPropagation();
    document.querySelector("body")!.style.removeProperty("overflow");
    dialog.close();
  }
  const handleDialogTouchEnd = handleDialogClick;

  function handleInnerClick(event: Event) {
    event.stopPropagation();
  }
  const handleInnerTouchEnd = handleInnerClick;

  return (
    <dialog
      ref={dialog!}
      onClick={handleDialogClick}
      onTouchEnd={handleDialogTouchEnd}
      class={css({
        color: "inherit",
        width: "min(85dvw, 300px)",
        boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        border: 0,
        padding: 0,
        backgroundColor: { _dark: "gray1" },
        "--backdrop-color": {
          base: "rgb(0 0 0 / 10%)",
          _dark: "rgb(255 255 255 / 10%)",
        },
        "&::backdrop": {
          backdropFilter: "blur(2px)",
          backgroundColor: "var(--backdrop-color)",
        },
      })}
    >
      <div
        onClick={handleInnerClick}
        onTouchEnd={handleInnerTouchEnd}
        class={css({ p: "4" })}
      >
        <button
          class={flex({
            position: "absolute",
            top: "2",
            right: "2",
            justify: "center",
            align: "center",
            size: "36px",
          })}
          title="Close dialog"
          onClick={() => dialog.close()}
        >
          {/* @ts-expect-error */}
          <IoClose size="1.25em" />
        </button>
        <div class={flex({ gap: "3", direction: "column" })}>
          <h2 class={css({ textStyle: "2xl" })}>Settings</h2>
          {props.children}
        </div>
      </div>
    </dialog>
  );
}
