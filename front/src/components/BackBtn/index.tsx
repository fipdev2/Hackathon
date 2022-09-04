import * as React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { TouchableOpacity } from './style';


interface onPress {
    onPress: any
}

function BackBtn({ onPress }: onPress) {
    return (
        <TouchableOpacity onPress={onPress}>
            <FaChevronLeft style={{ fontSize: 22, color:'white' }} />
        </TouchableOpacity>
    );
}

export default BackBtn;