import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";

import { Toaster as Sonner, type ToasterProps } from "sonner";

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
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
            <CheckCircle2 className="size-5 text-emerald-400" />
          </div>
        ),

        error: (
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-red-400/30 bg-red-400/10">
            <XCircle className="size-5 text-red-400" />
          </div>
        ),

        warning: (
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10">
            <AlertTriangle className="size-5 text-amber-400" />
          </div>
        ),

        info: (
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
            <Info className="size-5 text-cyan-400" />
          </div>
        ),
      }}
      toastOptions={{
        classNames: {
          toast: `
            group

            !w-[380px]
            !min-h-[76px]

            !rounded-xl

            !border
            !bg-[#172235]/95

            !text-[#F4F8FF]

            !backdrop-blur-xl

            !shadow-[0_12px_40px_rgba(0,0,0,0.40)]

            transition-all
            duration-300

            hover:!bg-[#1B293E]
          `,

          title: `
            !text-[14px]
            !font-semibold
            !leading-5
            !text-[#F4F8FF]
          `,

          description: `
            !mt-1
            !text-[13px]
            !leading-5
            !text-[#8FA3BD]
          `,

          closeButton: `
            !right-3
            !top-3

            !border-0
            !bg-transparent

            !text-[#71849D]

            hover:!bg-white/5
            hover:!text-white

            transition-colors
          `,

          success: `
            !border-emerald-400/30

            !shadow-[0_0_30px_rgba(16,185,129,0.08)]
          `,

          error: `
            !border-red-400/30

            !shadow-[0_0_30px_rgba(239,68,68,0.08)]
          `,

          warning: `
            !border-amber-400/30

            !shadow-[0_0_30px_rgba(245,158,11,0.08)]
          `,

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
