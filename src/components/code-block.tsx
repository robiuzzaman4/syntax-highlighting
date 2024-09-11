import React from "react";
import MdxProvider from "@/markdown/mdx-provider.mdx";
import MdxComponent from "@/markdown/mdx-components.mdx";

const CodeBlock = () => {
  return (
    <div className="pb-20">
      <h3 className="text-2xl font-semibold leading-tight pb-6">#Examples:</h3>
      <div className="space-y-6">
        {/* mdx component */}
        <div className="grid gap-1">
          <p className="text-xs font-medium text-primary">
            ¬ mdx-components.tsx
          </p>
          <MdxComponent />
        </div>
        {/* mdx provider */}
        <div className="grid gap-1">
          <p className="text-xs font-medium text-primary">¬ mdx-provider.tsx</p>
          <MdxProvider />
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
