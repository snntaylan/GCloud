import React from "react";

type Props = {
  element: React.ReactNode;
};

/**
 * @param {React.ReactNode} element the component to be lazy loaded
 * @example `<Route path="path" element={<LazyRoute element={<HomePage />} />} />`
 */

const LazyRoute: React.FC<Props> = ({ element }) => {
  return (
    <React.Suspense
      fallback={<div>loading...</div> /* will add fallback later */}
    >
      {element}
    </React.Suspense>
  );
};

export default LazyRoute;
