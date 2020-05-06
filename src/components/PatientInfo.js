import React from 'react';

const PatientInfo = ({name, address, note, verifyDate, ref}) => {
    let verifyDateString = "" + verifyDate.getDate() + "/" + verifyDate.getMonth() + "/" + verifyDate.getFullYear();
    return (
        <ul>
            <li ref={ref}>Tên: {name}</li>
            <li>Địa chỉ: {address}</li>
            <li>Ngày phát hiện: {verifyDateString}</li>
            <li>Ghi chú: {note}</li>
        </ul>
    );
}

export default PatientInfo;