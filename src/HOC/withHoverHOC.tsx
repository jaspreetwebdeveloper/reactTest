import React, { useState } from 'react';

const withHoverHOC = (
    WrappedComponent: any,
  ): any  => {
    const WithHover = (): any => {
        const [isStatic, setIsStatic] = useState<boolean>(false);
        return <WrappedComponent
          isStatic={isStatic}
          onMouseOver={() => setIsStatic(true)}
          onMouseLeave={() => setIsStatic(false)} />
    }
    return WithHover;
}

export default withHoverHOC;
