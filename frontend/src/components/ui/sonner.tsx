import {
  AlertTriangle,
  CheckCircle2,
  Info,
  XCircle,
} from "lucide-react";

import { Toaster as Sonner, type ToasterProps } from "sonner";

const iconWrapper =
  "flex size-9 shrink-0 items-center justify-center rounded-full";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      position="top-right"
      expand={false}
      richColors={false}
      closeButton
      duration={4000}
      gap={10}
      offset="20px"
      visibleToasts={5}
      icons={{
        success: (
          <div
            className={`${iconWrapper} border border-emerald-400/30 bg-emerald-400/10`}
          >
            <CheckCircle2 className="size-5 text-emerald-400" />
          </div>
        ),

        error: (
          <div
            className={`${iconWrapper} border border-red-400/30 bg-red-400/10`}
          >
            <XCircle className="size-5 text-red-400" />
          </div>
        ),

        warning: (
          <div
            className={`${iconWrapper} border border-amber-400/30 bg-amber-400/10`}
          >
            <AlertTriangle className="size-5 text-amber-400" />
          </div>
        ),

        info: (
          <div
            className={`${iconWrapper} border border-cyan-400/30 bg-cyan-400/10`}
          >
            <Info className="size-5 text-cyan-400" />
          </div>
        ),
      }}
      toastOptions={{
        classNames: {
          /*
           * =========================================================
           * TOAST CONTAINER
           * =========================================================
           *
           * Explicit grid:
           *
           * 36px | content | close button
           *
           * This prevents the icon/content/close button from fighting
           * each other when the description becomes longer.
           */
          toast: `
            group

            !grid
            !grid-cols-[36px_minmax(0,1fr)_28px]
            !items-start
            !gap-x-3

            !w-[min(380px,calc(100vw-32px))]
            !min-h-[76px]

            !rounded-xl
            !border
            !border-white/[0.06]

            !bg-[#172235]/95
            !text-[#F4F8FF]

            !px-4
            !py-4
            !pr-3

            !backdrop-blur-xl

            !shadow-[0_12px_40px_rgba(0,0,0,0.40)]

            transition-all
            duration-300

            hover:!bg-[#1B293E]
          `,

          /*
           * =========================================================
           * TITLE
           * =========================================================
           */

          title: `
            !m-0

            !min-w-0

            !text-[14px]
            !font-semibold
            !leading-5
            !text-[#F4F8FF]

            !break-words
          `,

          /*
           * =========================================================
           * DESCRIPTION
           * =========================================================
           */

          description: `
            !m-0
            !mt-1

            !min-w-0

            !text-[13px]
            !leading-5
            !text-[#8FA3BD]

            !break-words
          `,

          /*
           * =========================================================
           * CLOSE BUTTON
           * =========================================================
           *
           * Sonner normally positions this itself, but forcing it into
           * the third grid column keeps it visually stable.
           */

          closeButton: `
            !static
            !col-start-3
            !row-start-1

            !self-start

            !flex
            !size-7
            !items-center
            !justify-center

            !rounded-md

            !border-0
            !bg-transparent

            !text-[#71849D]

            hover:!bg-white/5
            hover:!text-white

            transition-colors
          `,

          /*
           * =========================================================
           * CONTENT
           * =========================================================
           *
           * Give Sonner's content area its own grid position.
           */

          content: `
            !col-start-2
            !row-start-1

            !min-w-0
            !w-full
            !self-start
          `,

          /*
           * =========================================================
           * SUCCESS
           * =========================================================
           */

          success: `
            !border-emerald-400/30
            !shadow-[0_0_30px_rgba(16,185,129,0.08)]
          `,

          /*
           * =========================================================
           * ERROR
           * =========================================================
           */

          error: `
            !border-red-400/30
            !shadow-[0_0_30px_rgba(239,68,68,0.08)]
          `,

          /*
           * =========================================================
           * WARNING
           * =========================================================
           */

          warning: `
            !border-amber-400/30
            !shadow-[0_0_30px_rgba(245,158,11,0.08)]
          `,

          /*
           * =========================================================
           * INFO
           * =========================================================
           */

          info: `
            !border-cyan-400/30
            !shadow-[0_0_30px_rgba(6,182,212,0.08)]
          `,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };