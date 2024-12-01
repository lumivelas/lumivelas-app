import React from 'react';

interface Props {
    className?: string;
}

const Logo: React.FC<Props> = ({ className }) => {

    return (
        <div className={className + ' select-none text-xl'}>
            <strong>Lumi</strong>velas
        </div>
    );
};

export default Logo;