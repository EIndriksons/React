import React from 'react';

// {...} - spread operator which pulls out all props key value pairs and distributes them
// from { name: 'Maximilian', age: 28 }
// to name = 'Maximilian' age = 28

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;