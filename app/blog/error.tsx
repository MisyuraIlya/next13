'use client'

const error = ({error}: {error: Error}) => {
    return (
        <div>
            Oops!!!! {error.message}
        </div>
    );
};

export default error;