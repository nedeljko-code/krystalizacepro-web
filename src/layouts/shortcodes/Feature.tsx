import { ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

type FeatureProps = {
  icon: "cz" | "shield";
  title: string;
  children: ReactNode;
};

const Feature = ({ icon, title, children }: FeatureProps) => {
  return (
    <div className="my-6">
      <div className="mb-2 flex items-center gap-2">
        {icon === "cz" ? (
          <span
            className="inline-flex h-4 w-4 overflow-hidden rounded-full"
            aria-hidden="true"
          >
            <img
              src="/images/icons/cz-flag.svg"
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
        ) : (
          <ShieldCheck
            className="h-4 w-4 shrink-0 text-white"
            aria-hidden="true"
          />
        )}

        <h3 className="m-0 text-base font-semibold">{title}</h3>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Feature;