import { v4 as uuidv4 } from 'uuid';

export const pIds = (param: any) => {
    if (param === "High") return `high`;
    if (param === "Medium") return `medium`;
    if (param === "Low") return `low`;
};

export const formatDescription = (text: any, number: number) => {
    return text?.length > number ? text.substring(0, 80) + "..." : text;
};

export const generateUUID = () => {
    let id = uuidv4();
    return id;
};