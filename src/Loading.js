import React from "react";
import { MoonLoader } from 'react-spinners';

const Loading = ({ loading }) => {
    return (
        <div style={styles.container}>
            <MoonLoader
                color="#fff"
                cssOverride={{}}
                loading={loading}
                size={60}
                speedMultiplier={0.5}
            />
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // optional: semi-transparent background overlay
    },
};

export default Loading;
